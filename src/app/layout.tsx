import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whiteglovenaples.com"),
  title: "White Glove Exteriors | EMF Assessment & Shielding | Naples, Florida",
  description:
    "Professional EMF assessments, shielding solutions, and medical-grade grounding systems for Florida families. Healthy homes, better sleep, peace of mind. Serving Naples and Southwest Florida.",
  keywords:
    "EMF assessment Florida, EMF shielding Naples, healthy home assessment, EMF testing Southwest Florida, grounding systems Florida, dirty electricity, smart meter shielding, cell tower protection",
  authors: [{ name: "White Glove Exteriors" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whiteglovenaples.com",
    siteName: "White Glove Exteriors",
    title: "White Glove Exteriors | EMF Assessment & Shielding | Naples, FL",
    description:
      "Professional EMF assessments, shielding solutions, and medical-grade grounding systems for Florida families.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "White Glove Exteriors | EMF Assessment & Shielding",
    description: "Professional EMF assessments and shielding for Florida families.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-brand-bg text-slate-100">
        {children}
      </body>
    </html>
  );
}
