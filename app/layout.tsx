import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IELTS o'qituvchisi Mirasror Maxmudov | IELTS 8 Balli O'qituvchi",
  description:
    "Mirasror Maxmudov - IELTS 8 balli o'qituvchi. IELTS testlari uchun samarali tayyorgarlik, individual va guruh darslari.",
  keywords: [
    "IELTS o'qituvchisi",
    "IELTS 8 ball",
    "Mirasror Maxmudov",
    "IELTS tayyorlov",
    "IELTS kurslari",
    "IELTS o'qituvchisi Toshkent",
    "IELTS darslari",
    "IELTS test tayyorlov",
    "IELTS 8 balli o'qituvchi",
  ],
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
