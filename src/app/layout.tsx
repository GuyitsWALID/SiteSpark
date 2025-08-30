import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiteSpark - Multi-page Mini Websites",
  description: "Create beautiful multi-page websites for your social bio links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
