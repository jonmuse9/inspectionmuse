import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact InspectionMuse - Home Inspection Services",
  description: "Contact InspectionMuse for professional home inspection services in Carroll County, MD. Call (443) 508-8558 or send us a message online.",
  alternates: {
    canonical: "https://inspectionmuse.com/contact/",
  },
  openGraph: {
    title: "Contact InspectionMuse - Home Inspection Services",
    description: "Contact InspectionMuse for professional home inspection services in Carroll County, MD. Call (443) 508-8558 or send us a message online.",
    url: "https://inspectionmuse.com/contact/",
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

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}