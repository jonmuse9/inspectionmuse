import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Clock, Shield, Award } from "lucide-react"
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection"
import { ServiceCTASection } from "@/components/services/ServiceCTASection"
import { ServiceOverviewSection } from "@/components/services/ServiceOverviewSection"
import { ServiceInfoCard } from "@/components/services/ServiceInfoCard"
import { ServiceGallerySection } from "@/components/services/ServiceGallerySection"

export default function ServiceTemplatePage() {
  return (
    <main>
      <ServiceHeroSection
        title="Service Template Page"
        subtitle="This is a template showcasing how images can enhance service pages"
        image="/images/roof-inspection-on-residential-home.jpg"
        imageAlt="Professional home inspection service"
        ctaText="Schedule Service"
        ctaHref="#schedule"
      />

      <ServiceOverviewSection
        sideImage={{
          src: "/images/businesswoman-using-tablet-analysis.jpg",
          alt: "Inspector reviewing property data"
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Professional Service Excellence
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Our comprehensive inspection services provide detailed insights into your property's 
          condition. With state-of-the-art equipment and certified professionals, we deliver 
          thorough evaluations you can trust.
        </p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
            <span>Certified and licensed professionals</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
            <span>Detailed reports within 24 hours</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
            <span>Advanced inspection equipment</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
            <span>Follow-up consultation included</span>
          </li>
        </ul>
        <Button variant="outline" size="lg" className="btn-outline-overlay">
          Learn More About Our Process
        </Button>
      </ServiceOverviewSection>

      <ServiceInfoCard
        title="Why Choose Our Service"
        subtitle="We combine expertise, technology, and dedication to deliver exceptional inspection services"
        cards={[
          {
            icon: Star,
            title: "Expert Team",
            description: "Certified inspectors with years of experience"
          },
          {
            icon: Clock,
            title: "Fast Service",
            description: "Same-week appointments available"
          },
          {
            icon: Shield,
            title: "Guaranteed",
            description: "Satisfaction guaranteed on all services"
          },
          {
            icon: Award,
            title: "Certified",
            description: "Industry certifications and standards"
          }
        ]}
      />

      <ServiceGallerySection
        title="Our Work in Action"
        className="bg-background"
        items={[
          {
            image: "/images/attic-112266_1280.jpg",
            imageAlt: "Attic inspection",
            title: "Attic Inspection",
            subtitle: ""
          },
          {
            image: "/images/basement-466197_1280.jpg",
            imageAlt: "Basement inspection", 
            title: "Basement Analysis",
            subtitle: ""
          },
          {
            image: "/images/Plumbing-5.jpg",
            imageAlt: "Plumbing inspection",
            title: "Plumbing Systems",
            subtitle: ""
          }
        ]}
      />

      <ServiceCTASection
        title="Ready to Schedule Your Inspection?"
        description="Get peace of mind with our comprehensive inspection services. Professional, thorough, and reliable."
        image="/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg"
        imageAlt="Beautiful home exterior"
        primaryButton={{
          text: "Schedule Inspection",
          href: "#schedule"
        }}
        secondaryButton={{
          text: "View Sample Report",
          href: "#sample-report"
        }}
      />
    </main>
  )
}