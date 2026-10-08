import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marwan Group | Wholesale Cosmetics",
  description:
    "Marwan Group — wholesale cosmetics, makeup, nails, and hair products in Egypt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
