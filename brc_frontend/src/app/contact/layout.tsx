import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <Head>
        <title>{'Contact'}</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}