import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Inspection Services & Pricing - InspectionMuse",
  description: "Transparent pricing for professional home inspection services including radon testing, termite inspections, mold testing, and more. Get an instant quote online.",
  alternates: {
    canonical: "https://inspectionmuse.com/services-fees/",
  },
  openGraph: {
    title: "Home Inspection Services & Pricing - InspectionMuse",
    description: "Transparent pricing for professional home inspection services including radon testing, termite inspections, mold testing, and more. Get an instant quote online.",
    url: "https://inspectionmuse.com/services-fees/",
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
};

export default function ServicesFeesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}