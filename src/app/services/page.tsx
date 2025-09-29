import Link from "next/link"
import { Home, Wind, Bug, Droplets, Trash2, TestTube, ArrowRight, Users, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Home Inspections",
    href: "/services/home-inspections",
    icon: Home,
    description: "Comprehensive evaluation of all major systems and components of your home.",
    features: ["Structural components", "Electrical systems", "Plumbing systems", "HVAC systems"]
  },
  {
    title: "Walk & Talk Consultation",
    href: "/services/walk-and-talk",
    icon: Users,
    description: "Quick property assessment with immediate verbal feedback - perfect for pre-offer decisions.",
    features: ["30-45 minute walkthrough", "Real-time feedback", "Budget-friendly", "No written report"]
  },
  {
    title: "Radon Testing",
    href: "/services/radon-testing",
    icon: Wind,
    description: "Professional radon gas testing to ensure your home's air quality is safe.",
    features: ["48-hour continuous monitoring", "EPA-approved methods", "Detailed reports", "Mitigation recommendations"]
  },
  {
    title: "Termite Inspections",
    href: "/services/termite-inspections",
    icon: Bug,
    description: "Thorough inspection for termites and other wood-destroying insects.",
    features: ["Visual inspection", "Moisture assessment", "Damage evaluation", "Treatment recommendations"]
  },
  {
    title: "Mold & Air Quality Testing",
    href: "/services/mold-testing",
    icon: Droplets,
    description: "Air quality and surface testing to detect mold presence and types.",
    features: ["Air sampling", "Surface sampling", "Lab analysis", "Remediation guidance"]
  },
  {
    title: "Septic Inspections",
    href: "/services/septic-inspections",
    icon: Trash2,
    description: "Complete septic system evaluation including tank and drain field.",
    features: ["Tank inspection", "Drain field assessment", "Flow testing", "Maintenance recommendations"]
  },
  {
    title: "Well Water Testing",
    href: "/services/well-water-testing",
    icon: TestTube,
    description: "Comprehensive water quality testing for private wells.",
    features: ["Bacteria testing", "Chemical analysis", "pH levels", "Heavy metals screening"]
  }
]

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Inspection Services - InspectionMuse Carroll County MD",
  description: "Comprehensive home inspection services including radon testing, mold testing, termite inspections, septic inspections, and more in Carroll County, Maryland.",
  alternates: {
    canonical: "https://inspectionmuse.com/services/",
  },
  openGraph: {
    title: "Professional Home Inspection Services - InspectionMuse",
    description: "Complete home inspection services including radon, mold, termite, septic, and sewer scope inspections.",
    url: "https://inspectionmuse.com/services/",
  },
  twitter: {
    card: "summary_large_image",
    site: "@InspectionMuse",
    creator: "@InspectionMuse",
    title: "Professional Home Inspection Services - InspectionMuse",
    description: "Complete home inspection services including radon, mold, termite, septic, and sewer scope inspections.",
    images: ["/images/logos/muse_logo_360px.png"],
  },
}

export default function ServicesPage() {
  return (
    <main>
      <section className="section-container">
        <div className="page-container">
          <div className="content-wrapper text-center-section">
            <h1 className="heading-page element-spacing">
              Our Inspection Services
            </h1>
            <p className="text-description">
              Comprehensive home inspection services to give you peace of mind about your property investment.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="card-service">
                  <Icon className="icon-card" />
                  <h2 className="heading-card mb-3">{service.title}</h2>
                  <p className="text-muted tight-spacing">{service.description}</p>
                  <ul className="feature-list element-spacing">
                    {service.features.map((feature) => (
                      <li key={feature} className="feature-list-item text-sm">
                        <div className="bullet-point" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button variant="outline" className="btn-outline-overlay w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-container-alt">
        <div className="page-container">
          <div className="content-wrapper text-center">
            <h2 className="heading-section">Need Multiple Services?</h2>
            <p className="text-lg text-muted mb-8">
              Save time and money by bundling multiple inspection services. Contact us for package pricing 
              and to schedule your comprehensive property evaluation.
            </p>
            <Button size="lg" className="btn-primary-large">
              <Calculator className="mr-2 h-5 w-5" />
              Get Package Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}