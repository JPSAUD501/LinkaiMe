import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const suse = localFont({
  src: './fonts/SUSE.ttf',
  variable: '--font-suse'
})

export const metadata: Metadata = {
  title: "LinkaiMe"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={suse.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
