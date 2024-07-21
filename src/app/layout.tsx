import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import MyHeader from "@/components/Header/MyHeader";
import MyFooter from "@/components/Footer/MyFooter";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Северяночка",
  description: "Продуктовый магазин Северяночка",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className+' bg-[#FBF8EC] h-fit'}> <MyHeader/>{children}<MyFooter/></body>
    </html>
  );
}
