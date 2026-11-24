import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://abearco.org"),
  title: "ABEARCO Inc | A Navajo Owned Company",
  description: "ABEARCO Inc is a Navajo-owned consulting company specializing in tourism, consulting, management, and real estate development. Partnering with tribes across the nation.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "ABEARCO Inc | A Navajo Owned Company",
    description: "Navajo-owned consulting company specializing in tourism, consulting, management, and real estate development.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
