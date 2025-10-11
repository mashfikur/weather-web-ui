import type { Metadata } from "next";
import { Manrope, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar";
import AppWrapper from "@/components/common/AppWrapper";

const manrope = Manrope({
  variable: "--font-primary",
  subsets: ["latin"],
});
const sora = Rubik({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forecasta | Modern Weather Insights & Real-Time Forecasts",
  description:
    "Stay ahead of the weather with Forecasta — a sleek, modern platform offering real-time forecasts, live temperature updates, and smart climate insights tailored for you.",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={` ${manrope.variable} ${sora.variable} antialiased`}>
        <AppWrapper>
          <Navbar />

          <main>{children}</main>
        </AppWrapper>
      </body>
    </html>
  );
}
