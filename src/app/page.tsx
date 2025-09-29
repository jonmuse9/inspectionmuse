import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { ServiceAreas } from "@/components/sections/service-areas"
import { CTA } from "@/components/sections/cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "InspectionMuse - Professional Home Inspections in Carroll County, MD",
  description: "Professional home inspection services in Carroll County, Maryland. Comprehensive inspections including radon testing, termite inspections, mold testing, and more.",
  alternates: {
    canonical: "https://inspectionmuse.com/",
  },
  openGraph: {
    title: "InspectionMuse - Professional Home Inspections",
    description: "Making your biggest investment your safest investment",
    url: "https://inspectionmuse.com/",
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <CTA />
    </>
  );
}
