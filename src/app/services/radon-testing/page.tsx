import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, Shield, Calendar, FileText } from "lucide-react"
import { PartnershipInfo } from "@/components/services/PartnershipInfo"
import { 
  ServiceHeroSection,
  ServiceCTASection,
  ServiceGallerySection,
  ChecklistSection,
  TestingResultsCard
} from "@/components/services"

export default function RadonTestingPage() {
  return (
    <main>
      <ServiceHeroSection
        title="Professional Radon Testing"
        subtitle="Protect your family from this invisible health risk"
        image="/images/135148_pt_element86.jpg"
        imageAlt="Radon element 86 - radioactive gas requiring professional testing"
        ctaText="Schedule Radon Test"
        ctaHref="/schedule"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              Radon is a radioactive gas that you cannot see, smell, or taste. It's the second leading cause 
              of lung cancer in the United States. Testing is the only way to know your home's radon levels.
            </p>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-0.5" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Why Radon Testing Matters</h2>
                  <p className="text-muted-foreground">
                    The EPA estimates that radon causes about 21,000 lung cancer deaths per year. 
                    Maryland and Pennsylvania have areas with elevated radon levels due to geological formations.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ChecklistSection
                title="Our Testing Process"
                items={[
                  { text: "48-hour continuous air monitoring" },
                  { text: "EPA-approved testing equipment" },
                  { text: "Professional placement and retrieval" },
                  { text: "Lab-certified results" },
                  { text: "Detailed report with recommendations" }
                ]}
              />

              <TestingResultsCard
                title="Understanding Results"
                results={[
                  {
                    range: "Below 2.0 pCi/L",
                    description: "Consider retesting in the future",
                    severity: "safe"
                  },
                  {
                    range: "2.0 - 4.0 pCi/L",
                    description: "Consider mitigation to reduce levels",
                    severity: "caution"
                  },
                  {
                    range: "Above 4.0 pCi/L",
                    description: "EPA recommends mitigation",
                    severity: "danger"
                  }
                ]}
              />
            </div>

            <div className="bg-card p-8 rounded-lg border mb-8">
              <h2 className="text-2xl font-semibold mb-4">Schedule Radon Testing</h2>
              <p className="text-muted-foreground mb-6">
                Protect your family's health with professional radon testing. 
                Quick, accurate results you can trust.
              </p>
              <Button size="lg" className="btn-primary-large">Book Radon Test</Button>
            </div>

            <PartnershipInfo
              title="Certified Radon Measurement Professionals"
              description="Our radon testing is performed by EPA-certified measurement specialists who follow strict protocols for accurate results. InspectionMuse partners with licensed professionals who use calibrated continuous radon monitors and adhere to all EPA testing guidelines. We ensure proper device placement, maintain closed-house conditions, and provide detailed reports that meet real estate transaction requirements, giving you peace of mind through expert service and reliable results."
              icon={Shield}
              variant="primary"
            />
          </div>
        </div>
      </section>

      <ServiceGallerySection
        title="Radon Testing Areas"
        items={[
          {
            image: "/images/basement-466197_1280.jpg",
            imageAlt: "Basement radon testing - primary testing location",
            title: "Basement Testing",
            subtitle: "Primary Location"
          },
          {
            image: "/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg",
            imageAlt: "Home exterior - radon can affect any home",
            title: "Any Home Type",
            subtitle: "All Properties at Risk"
          },
          {
            image: "/images/large-home-389271_1280.jpg",
            imageAlt: "Large home needing comprehensive radon testing",
            title: "Comprehensive Testing",
            subtitle: "Professional Equipment"
          }
        ]}
      />

      <ServiceCTASection
        title="Ready to Test Your Home for Radon?"
        description="Protect your family's health with professional radon testing. EPA-approved methods with accurate, certified results."
        image="/images/basement-466197_1280.jpg"
        imageAlt="Basement area requiring professional radon testing"
        primaryButton={{
          text: "Schedule Radon Test",
          href: "/schedule",
          icon: Calendar
        }}
        secondaryButton={{
          text: "Learn About Radon Levels",
          href: "https://www.epa.gov/radon",
          external: true,
          icon: FileText
        }}
      />
    </main>
  )
}