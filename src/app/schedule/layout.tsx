import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule Your Home Inspection - InspectionMuse",
  description: "Book your comprehensive home inspection online. Same week appointments available with licensed and insured inspectors in Carroll County, MD.",
  alternates: {
    canonical: "https://inspectionmuse.com/schedule/",
  },
  openGraph: {
    title: "Schedule Your Home Inspection - InspectionMuse",
    description: "Book your comprehensive home inspection online. Same week appointments available with licensed and insured inspectors in Carroll County, MD.",
    url: "https://inspectionmuse.com/schedule/",
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

export default function ScheduleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}