import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/ui/navbar/Navbar";

const inter = Golos_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
      </body>
    </html>
  );
}
