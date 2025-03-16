import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat", // Custom CSS variable
});

export const metadata: Metadata = {
  title: "OptiFit",
  description: "AI-fitness and meal tracker app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body
      >
        <Navbar/>
        <main style={{padding: '1rem'}}>{children}</main>
      </body>
    </html>
  );
}
