import type { Metadata } from "next";
import { Manrope, Rubik } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/common/AppWrapper";
import ReduxWrapper from "@/components/common/ReduxWrapper";

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
  keywords: [
    "Forecasta",
    "weather app",
    "modern weather website",
    "real-time weather",
    "climate insights",
    "daily forecast",
    "weather radar",
    "temperature updates",
    "Next.js weather site",
    "local forecast",
  ],
  metadataBase: new URL("https://forecasta-web.vercel.app/"),
  openGraph: {
    title: "Forecasta | Real-Time Weather Forecasts & Smart Climate Insights",
    description:
      "Discover beautiful, accurate weather forecasting with Forecasta. Real-time data, clean UI, and smart climate updates — all in one sleek platform.",
    url: "https://forecasta.vercel.app",
    siteName: "Forecasta",
    images: [
      {
        url: "/open-graph.png", // create a nice open graph image later
        width: 1200,
        height: 630,
        alt: "Forecasta - Modern Weather Forecast Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head></head>
      <body className={` ${manrope.variable} ${sora.variable} antialiased`}>
        <ReduxWrapper>
          <AppWrapper>{children}</AppWrapper>
        </ReduxWrapper>
      </body>
    </html>
  );
}
