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
          content="E-PDq5IKPsiG8K_n7P3oVhrCf1GsUT8EYPedtvE83oc"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
