import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://inspectionmuse.com"),
  title: "InspectionMuse - Professional Home Inspections in Carroll County, MD",
  description: "Professional home inspection services in Carroll County, Maryland. Comprehensive inspections including radon testing, termite inspections, mold testing, and more.",
  keywords: "home inspection, Carroll County, Maryland, MD, radon testing, termite inspection, mold testing, septic inspection",
  authors: [{ name: "InspectionMuse" }],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
