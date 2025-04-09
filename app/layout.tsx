import type { Metadata } from "next";
import "./globals.css";
import { Head } from "next/document";

export const metadata: Metadata = {
  title: "IELTS with Maxmudov. M.",
  description: "Maxmudov Mirasror",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="L-7zlnYOZGRbdV_75f-GYgldZY7-Y_K17fi1SckoybE"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
