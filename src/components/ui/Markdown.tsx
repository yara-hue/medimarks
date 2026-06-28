import type { ReactNode } from "react";

interface MarkdownProps {
  text: string;
  as?: "p" | "span";
  className?: string;
}

function renderInline(text: string): ReactNode[] {
  return text.split(/(\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return <strong key={i}>{part.slice(1, -1)}</strong>;
    }
    return part;
  });
}

export function Markdown({ text, as: Tag = "p", className }: MarkdownProps) {
  const lines = text.split("\n");
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i}>
          {renderInline(line)}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </Tag>
  );
}
