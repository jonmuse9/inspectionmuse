import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, FileText } from "lucide-react"
import { 
  ServiceHeroSection,
  ServiceCTASection,
  ServiceGallerySection,
  ChecklistSection
} from "@/components/services"

export default function HomeInspectionsPage() {
  return (
    <main>
      <ServiceHeroSection
        title="Comprehensive Home Inspections"
        subtitle="Thorough evaluations to protect your investment and ensure peace of mind"
        image="/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg"
        imageAlt="Beautiful home ready for comprehensive inspection"
        ctaText="Schedule Inspection"
        ctaHref="/schedule"
      />

      {/* Service Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              Our detailed home inspections provide you with a complete understanding of your property's condition, 
              helping you make informed decisions about your investment.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ChecklistSection
                title="What We Inspect"
                items={[
                  { text: "Roof, attic, and visible insulation" },
                  { text: "Exterior walls, windows, and doors" },
                  { text: "Foundation and structural components" },
                  { text: "Heating and cooling systems" },
                  { text: "Plumbing system and fixtures" },
                  { text: "Electrical system and components" },
                  { text: "Interior walls, ceilings, and floors" },
                  { text: "Basement and crawl spaces" }
                ]}
              />
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Inspection Process</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">1. Visual Examination</h3>
                    <p className="text-muted-foreground">Thorough visual inspection of all accessible areas</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">2. System Testing</h3>
                    <p className="text-muted-foreground">Operating all systems and built-in appliances</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">3. Documentation</h3>
                    <p className="text-muted-foreground">Detailed notes and photos of all findings</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">4. Report Generation</h3>
                    <p className="text-muted-foreground">Comprehensive report delivered within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceGallerySection
        title="Our Inspection Focus Areas"
        items={[
          {
            image: "/images/attic-112266_1280.jpg",
            imageAlt: "Attic inspection - checking insulation and structural elements",
            title: "Attic Inspection",
            subtitle: "Insulation & Structure"
          },
          {
            image: "/images/basement-466197_1280.jpg",
            imageAlt: "Basement inspection - foundation and systems check",
            title: "Basement Analysis",
            subtitle: "Foundation & Systems"
          },
          {
            image: "/images/Roof-Inspection-1-scaled.jpg",
            imageAlt: "Professional roof inspection for structural integrity",
            title: "Roof Inspection",
            subtitle: "Structural Integrity"
          }
        ]}
      />

      <ServiceCTASection
        title="Ready to Schedule Your Home Inspection?"
        description="Get peace of mind with our comprehensive home inspection service. Professional, thorough, and reliable inspections you can trust."
        image="/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg"
        imageAlt="Beautiful home exterior ready for professional inspection"
        primaryButton={{
          text: "Schedule Inspection",
          href: "/schedule",
          icon: Calendar
        }}
        secondaryButton={{
          text: "View Sample Report",
          href: "https://app.spectora.com/home-inspectors/my-inspection-company-20b1ca4e0f/sample_report?sample_id=16772",
          external: true,
          icon: FileText
        }}
      />
    </main>
  )
}