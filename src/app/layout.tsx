import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MediMarks | Innovation by Design for Healthcare, Infrastructure & Modern Spaces",
    template: "%s | MediMarks",
  },
  description:
    "Since 2015, MediMarks has manufactured medical furniture, storage systems, decorative lighting, and custom fabrication across the Middle East and Africa.",
  openGraph: {
    title: "MediMarks — Innovation by Design",
    description:
      "Manufacturing medical furniture, storage systems, decorative lighting, and custom fabrication since 2015.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <LoadingScreen />
        <KeyboardShortcuts />
        <script dangerouslySetInnerHTML={{
          __html: `
            setTimeout(function(){
              var el = document.getElementById('loading-screen');
              if (el && el.style.display !== 'none') { el.style.display = 'none'; }
            }, 3500);
            setTimeout(function(){
              var el = document.getElementById('loading-screen');
              if (el) { el.style.display = 'none'; }
            }, 5000);
          `
        }} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
