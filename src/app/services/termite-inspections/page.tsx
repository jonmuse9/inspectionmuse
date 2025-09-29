import { Button } from "@/components/ui/button";
import { Bug, CheckCircle, Calendar, FileText } from "lucide-react";
import { PartnershipInfo } from "@/components/services/PartnershipInfo";
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";
import { ServiceCTASection } from "@/components/services/ServiceCTASection";
import { ServiceOverviewSection } from "@/components/services/ServiceOverviewSection";
import { ChecklistSection } from "@/components/services/ChecklistSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termite & Wood-Destroying Insect Inspections - Carroll County MD",
  description: "Professional termite and WDI inspections in Carroll County, MD. Licensed pest control inspectors providing NPMA-33 reports to protect your property investment.",
  keywords: "termite inspection, WDI inspection, wood destroying insects, Carroll County MD, NPMA-33, pest inspection, termite damage, Maryland termite inspector",
  alternates: {
    canonical: "https://inspectionmuse.com/services/termite-inspections/",
  },
  openGraph: {
    title: "Termite & WDI Inspections - InspectionMuse Carroll County",
    description: "Professional termite and wood-destroying insect inspections in Carroll County, MD. Licensed inspectors providing official NPMA-33 reports.",
    url: "https://inspectionmuse.com/services/termite-inspections/",
  },
};

export default function TermiteInspectionsPage() {
  return (
    <main>
      <ServiceHeroSection
        title="Termite & Wood-Destroying Insect Inspections"
        subtitle="Protect your investment from costly damage"
        image="/images/man-checks-the-interior-of-a-crawl-space.jpg"
        imageAlt="Licensed termite inspector checking crawl space wood destroying insects Carroll County MD"
        ctaText="Schedule Inspection"
        ctaHref="#contact"
      />

      <ServiceOverviewSection
        sideImage={{
          src: "/images/homeguide-foundation-with-cracks-and-crumbing-concrete.jpg",
          alt: "Foundation damage from wood-destroying insects termite damage Carroll County Maryland home",
        }}
      >
        <p className="text-xl text-muted-foreground mb-8">
          Protect your investment from costly damage. Our certified inspectors
          identify termites and other wood-destroying organisms before they
          become major problems.
        </p>

        <ChecklistSection
          title="What We Look For"
          items={[
            { text: "Subterranean termites" },
            { text: "Drywood termites" },
            { text: "Carpenter ants" },
            { text: "Powder post beetles" },
            { text: "Carpenter bees" },
            { text: "Wood decay fungi" },
          ]}
          icon={Bug}
          columns={2}
        />
      </ServiceOverviewSection>

      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <ChecklistSection
              title="Inspection Areas"
              items={[
                { text: "Foundation and crawl spaces" },
                { text: "Basement and interior walls" },
                { text: "Attic spaces and roof structure" },
                { text: "Exterior siding and trim" },
                { text: "Garage and outbuildings" },
              ]}
              columns={2}
            />
          </div>
        </div>
      </section>

      <section className="pt-8 pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <PartnershipInfo
              title="Licensed Pest Control Partnership"
              description="Our termite and wood-destroying insect inspections are performed by licensed pest control professionals who specialize in WDI detection and reporting. InspectionMuse partners with certified inspectors who are authorized to issue official NPMA-33 forms required for most real estate transactions. We coordinate scheduling and ensure all reports meet state and lender requirements, providing you with seamless service and expert results through a single point of contact."
            />
          </div>
        </div>
      </section>

      <ServiceCTASection
        title="Ready to Protect Your Investment?"
        description="Don't let termites and wood-destroying insects damage your property. Get your official NPMA-33 inspection report today."
        image="/images/man-checks-the-interior-of-a-crawl-space.jpg"
        imageAlt="Professional inspector examining crawl space for termites"
        primaryButton={{
          text: "Schedule WDI Inspection",
          href: "#contact",
          icon: Calendar,
        }}
        secondaryButton={{
          text: "Learn About NPMA-33 Reports",
          href: "https://www.npmapestworld.org/your-team-tools/npma-forms-npma3399a99b/npma-forms-information/",
          external: true,
          icon: FileText,
        }}
      />
    </main>
  );
}
