import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import Header from './components/Header'
import '@/public/assets/styles/tailwind.min.css'
import '@/public/assets/styles/app.min.css'





const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="overflow-x-hidden w-screen relative home-page">
        <NextUIProvider>
          <Header />
            {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
