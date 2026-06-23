import sharp from "sharp";
import { readdirSync, statSync, existsSync, renameSync } from "fs";
import { join, extname } from "path";

const ROOT = "public/images/products";
const MAX_DIM = 1920;
const Q = 65;

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files = files.concat(walk(full));
    else if (/\.(jpe?g|png)$/i.test(e.name)) files.push(full);
  }
  return files;
}

async function process(file) {
  const oldSize = statSync(file).size;
  const meta = await sharp(file).metadata();
  const isPng = extname(file).toLowerCase() === ".png";

  const resize =
    meta.width > MAX_DIM || meta.height > MAX_DIM
      ? { width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true }
      : undefined;

  const tmp = file + ".tmp";
  if (isPng) {
    await sharp(file).resize(resize).png({ quality: Q }).toFile(tmp);
  } else {
    await sharp(file).resize(resize).jpeg({ quality: Q, progressive: true, mozjpeg: true }).toFile(tmp);
  }

  renameSync(tmp, file);
  const newSize = statSync(file).size;
  return { file, oldSize, newSize };
}

async function main() {
  if (!existsSync(ROOT)) { console.error(`${ROOT} not found`); process.exit(1); }
  const files = walk(ROOT);
  console.log(`Found ${files.length} images\n`);
  let tOld = 0, tNew = 0, i = 0;
  for (const f of files) {
    const { oldSize, newSize } = await process(f);
    tOld += oldSize; tNew += newSize; i++;
    const pct = ((1 - newSize / oldSize) * 100).toFixed(1);
    console.log(`${String(i).padStart(3)}/${files.length}  ${(oldSize/1024).toFixed(0).padStart(6)}K → ${(newSize/1024).toFixed(0).padStart(6)}K  -${pct.padStart(4)}%  ${f.replace(ROOT,"")}`);
  }
  console.log(`\nTotal: ${(tOld/1024/1024).toFixed(1)} MB → ${(tNew/1024/1024).toFixed(1)} MB  (${((1-tNew/tOld)*100).toFixed(1)}% reduction)`);
}

main().catch(console.error);
