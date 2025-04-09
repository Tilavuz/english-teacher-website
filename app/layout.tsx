// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IELTS with Maxmudov. M.",
  description: "Maxmudov Mirasror",
  verification: {
    google: "L-7zlnYOZGRbdV_75f-GYgldZY7-Y_K17fi1SckoybE",
  },
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
