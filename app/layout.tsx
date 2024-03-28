import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";

const font = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rob Squires",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
