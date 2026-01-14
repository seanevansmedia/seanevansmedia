import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// UPDATED: Simple Black Circle with White "SE" Text
const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="32" fill="#000000" />
  <text x="32" y="34" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="26" text-anchor="middle" dominant-baseline="central">SE</text>
</svg>
`;

export const metadata: Metadata = {
  title: "seanevansmedia",
  description: "Digital Architect based in Vancouver. Building high-performance, bespoke web experiences with Next.js and React.",
  icons: {
    icon: `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}