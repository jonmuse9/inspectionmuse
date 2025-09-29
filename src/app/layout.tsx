import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0066cc',
}

export const metadata: Metadata = {
  metadataBase: new URL("https://inspectionmuse.com"),
  title: "InspectionMuse - Professional Home Inspections in Carroll County, MD",
  description: "Professional home inspection services in Carroll County, Maryland. Comprehensive inspections including radon testing, termite inspections, mold testing, and more.",
  keywords: "home inspection, Carroll County, Maryland, MD, radon testing, termite inspection, mold testing, septic inspection",
  authors: [{ name: "InspectionMuse" }],
  formatDetection: {
    telephone: false,
  },
  verification: {
    google: "your-google-site-verification-code-here",
  },
  alternates: {
    canonical: "https://inspectionmuse.com/",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/logos/muse_logo_360px.png', sizes: '360x215', type: 'image/png' }
    ],
    apple: "/images/logos/muse_logo_360px.png",
    shortcut: '/favicon.ico'
  },
  openGraph: {
    title: "InspectionMuse - Professional Home Inspections",
    description: "Making your biggest investment your safest investment",
    url: "https://inspectionmuse.com",
    siteName: "InspectionMuse",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logos/muse_logo_360px.png",
        width: 360,
        height: 215,
        alt: "InspectionMuse Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@InspectionMuse",
    creator: "@InspectionMuse",
    title: "InspectionMuse - Professional Home Inspections",
    description: "Making your biggest investment your safest investment",
    images: ["/images/logos/muse_logo_360px.png"],
  },
  other: {
    "geo.region": "US-MD",
    "geo.placename": "Carroll County",
    "geo.position": "39.4;-76.9",
    "ICBM": "39.4, -76.9",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/images/logos/muse_logo_360px.png" />
        {/* Structured Data (JSON-LD) */}
        <Script id="local-business-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://inspectionmuse.com",
              "name": "InspectionMuse",
              "alternateName": "Inspection Muse",
              "description": "Professional home inspection services in Carroll County, Maryland. Comprehensive inspections including radon testing, termite inspections, mold testing, and more.",
              "url": "https://inspectionmuse.com",
              "logo": "https://inspectionmuse.com/images/logos/muse_logo_360px.png",
              "image": "https://inspectionmuse.com/images/logos/muse_logo_360px.png",
              "telephone": "(443) 508-8558",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "MD",
                "addressLocality": "Carroll County",
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Carroll County",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Maryland"
                  }
                },
                {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 39.4,
                    "longitude": -76.9
                  },
                  "geoRadius": "50000"
                }
              ],
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 08:00-16:00"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Home Inspection Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Home Inspection",
                      "description": "Comprehensive evaluation of all major systems and structural components"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Radon Testing",
                      "description": "Professional radon gas testing with EPA-approved methods"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Termite Inspection",
                      "description": "Thorough inspection for termites and wood-destroying insects"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "ratingCount": "50"
              }
            }
          `}
        </Script>

        <Script id="organization-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://inspectionmuse.com#organization",
              "name": "InspectionMuse",
              "url": "https://inspectionmuse.com",
              "logo": "https://inspectionmuse.com/images/logos/muse_logo_360px.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "(443) 508-8558",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English"
              },
              "sameAs": [],
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "MD",
                "addressLocality": "Carroll County",
                "addressCountry": "US"
              }
            }
          `}
        </Script>

        <Script id="website-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://inspectionmuse.com#website",
              "name": "InspectionMuse",
              "alternateName": "Inspection Muse",
              "url": "https://inspectionmuse.com",
              "description": "Professional home inspection services in Carroll County, Maryland",
              "publisher": {
                "@id": "https://inspectionmuse.com#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://inspectionmuse.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>

        <Script id="service-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://inspectionmuse.com#services",
              "name": "Home Inspection Services",
              "description": "Comprehensive home inspection services including structural evaluations, system inspections, and specialized testing",
              "provider": {
                "@id": "https://inspectionmuse.com#organization"
              },
              "areaServed": {
                "@type": "State",
                "name": "Maryland"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Inspection Services Catalog",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Home Inspection",
                      "description": "Comprehensive evaluation of all major systems and structural components",
                      "serviceType": "Home Inspection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pre-Listing Inspection",
                      "description": "Get ahead of potential issues before listing your home for sale",
                      "serviceType": "Pre-Sale Inspection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Radon Testing",
                      "description": "Professional radon gas testing with EPA-approved methods and detailed reports",
                      "serviceType": "Environmental Testing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Termite Inspection",
                      "description": "Thorough inspection for termites and wood-destroying insects with treatment recommendations",
                      "serviceType": "Pest Inspection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mold & Air Quality Testing",
                      "description": "Air quality and surface testing to detect mold presence and types",
                      "serviceType": "Environmental Testing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Septic Inspection",
                      "description": "Complete septic system evaluation including tank and drain field",
                      "serviceType": "System Inspection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Well Water Testing",
                      "description": "Comprehensive water quality testing for private wells",
                      "serviceType": "Water Testing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sewer Scope Inspection",
                      "description": "Video inspection of sewer lines to identify blockages and damage",
                      "serviceType": "System Inspection"
                    }
                  }
                ]
              }
            }
          `}
        </Script>

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17580553822"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17580553822');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
