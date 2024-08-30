import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/global/Header/Navbar"
import Footer from "@/app/components/global/Footer/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Top Picks & Reviews!",
    template: "%s | UrbanTyres",

  },
  description: "",
  // twitter: {
  //   card: "summary_large_image",
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
