import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { ServiceAreas } from "@/components/sections/service-areas"
import { CTA } from "@/components/sections/cta"

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
