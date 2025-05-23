import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/header";

const inter = Inter({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivien Tran",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-stone-50">
      <Head>
        <link rel="icon" href="icon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen bg-stone-50">{children}</div>
      </body>
    </html>
  );
}
