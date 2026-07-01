import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Healthy Home EMF Assessments in Florida | White Glove Exteriors",
    template: "%s | White Glove Exteriors",
  },
  description:
    "Professional EMF Assessments, Shielding Solutions, and Medical-Grade Grounding Systems for Florida homeowners. Healthy homes, better sleep, peace of mind.",
  keywords:
    "EMF assessment Florida, EMF shielding Naples, healthy home assessment, EMF testing Southwest Florida, grounding systems Florida, dirty electricity, smart meter shielding, cell tower protection",
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Healthy Homes. Better Sleep. Peace of Mind.",
    description: "Professional EMF Assessment and Healthy Home Solutions.",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy Homes. Better Sleep. Peace of Mind.",
    description: "Professional EMF Assessment and Healthy Home Solutions for Florida families.",
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "ycgSDbN9YBb5lLuSw_azWUSiY6oT8FeUG-UF2D2x1iA",
  },
};

export const viewport: Viewport = {
  themeColor: "#050B14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/images/logos/logo.png`,
  image: `${site.url}${site.ogImage}`,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  areaServed: site.areaServed,
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#localbusiness`,
  name: site.name,
  image: `${site.url}${site.ogImage}`,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "FL",
    addressLocality: "Naples",
    addressCountry: "US",
  },
  areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={[organizationLd, localBusinessLd]} />
        {children}
      </body>
    </html>
  );
}
