import { Button } from "@/components/ui/button";
import { TestTube, CheckCircle, Calendar, FileText } from "lucide-react";
import { PartnershipInfo } from "@/components/services/PartnershipInfo";
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";
import { ServiceCTASection } from "@/components/services/ServiceCTASection";
import { ServiceOverviewSection } from "@/components/services/ServiceOverviewSection";
import { ServiceProcessCard } from "@/components/services/ServiceProcessCard";
import { ChecklistSection } from "@/components/services/ChecklistSection";

export default function WellWaterTestingPage() {
  return (
    <main>
      <ServiceHeroSection
        title="Well Water Testing"
        subtitle="Ensure your family's water safety with professional testing"
        image="/images/water-well-inspection-541292430.jpg"
        imageAlt="Well water testing equipment and setup"
        ctaText="Schedule Water Test"
        ctaHref="#schedule"
      />

      <ServiceOverviewSection
        sideImage={{
          src: "/images/McCleary_150717_4075-scaled.jpg",
          alt: "Professional well water testing and analysis",
        }}
      >
        <p className="text-xl text-muted-foreground mb-8">
          Ensure your well water is safe for your family. Our comprehensive
          testing identifies bacteria, chemicals, and minerals that could affect
          water quality and health.
        </p>

        <ChecklistSection
          title="Why Test Your Well Water?"
          items={[
            { text: "Private wells are not regulated by the EPA" },
            { text: "Contamination can occur without visible signs" },
            { text: "Required for FHA and VA loans" },
            { text: "Recommended annual testing by health departments" },
          ]}
        />
      </ServiceOverviewSection>

      <section className="pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <ChecklistSection
                title="Basic Testing"
                items={[
                  { text: "Total coliform bacteria" },
                  { text: "E. coli bacteria" },
                  { text: "Nitrates and nitrites" },
                  { text: "pH levels" },
                  { text: "Basic mineral content" },
                ]}
                icon={TestTube}
              />

              <ChecklistSection
                title="Comprehensive Testing"
                items={[
                  { text: "Lead and copper levels" },
                  { text: "Iron and manganese" },
                  { text: "Hardness minerals" },
                  { text: "Pesticides and herbicides" },
                  { text: "Volatile organic compounds (VOCs)" },
                ]}
                icon={TestTube}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <PartnershipInfo
              title="Certified Laboratory Partnership"
              description="Well water testing requires state-certified laboratory analysis to ensure accurate results. InspectionMuse partners with EPA-approved laboratories that specialize in drinking water quality testing. Our certified partners test for bacteria, nitrates, lead, and other contaminants according to federal and state standards. We handle sample collection, chain of custody, and expedited processing, delivering comprehensive results with expert interpretation and treatment recommendations when needed."
              icon={TestTube}
            />
          </div>
        </div>
      </section>

      <ServiceCTASection
        title="Ready to Test Your Well Water?"
        description="Private wells require regular testing to ensure safety. Get state-certified lab results with expert recommendations."
        image="/images/water-well-inspection-541292430.jpg"
        imageAlt="Well water testing for safe drinking water"
        primaryButton={{
          text: "Schedule Water Test",
          href: "#schedule",
          icon: Calendar,
        }}
        secondaryButton={{
          text: "Learn About Water Quality",
          href: "https://mde.maryland.gov/programs/Water/Water_Supply/Pages/Be_Well_Wise.aspx",
          external: true,
          icon: FileText,
        }}
      />
    </main>
  );
}
