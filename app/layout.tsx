import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

//Fonts
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const PixelFont = localFont({
  src: "../public/assets/fonts/pixel-font-7.ttf",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Kanishk's Space",
  description: "My Portfolio",
  creator: "Kanishk Shukla aka Rage",
  publisher: "Kanishk Shukla",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          MainFont.className,
          OswaldFont.variable,
          PixelFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
