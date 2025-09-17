import { Home, Zap, Bug, Droplets, Database, TestTube, ClipboardList, Waves } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "Home Inspections",
    description: "Comprehensive evaluation of all major systems and components of your home.",
    icon: Home,
    image: "/images/home-1622401_1280.jpg",
    href: "/services/home-inspections"
  },
  {
    title: "Pre-Listing Inspection",
    description: "Identify issues before listing to ensure a smooth sale process.",
    icon: ClipboardList,
    image: "/images/house-3123525_1280.jpg",
    href: "/services/pre-listing-inspection"
  },
  {
    title: "Radon Testing",
    description: "Professional radon gas testing to ensure your family's safety.",
    icon: Zap,
    image: "/images/135148_pt_element86.jpg",
    href: "/services/radon-testing"
  },
  {
    title: "Termite & WDI",
    description: "Wood Destroying Insect inspections to protect your investment.",
    icon: Bug,
    image: "/images/CauseTermite-Damage-Cause-header.jpg",
    href: "/services/termite-inspections"
  },
  // {
  //   title: "Mold & Air Quality Testing",
  //   description: "Air quality and mold testing for a healthier home environment.",
  //   icon: Droplets,
  //   image: "/images/attic-112266_1280.jpg",
  //   href: "/services/mold-testing"
  // },
  {
    title: "Septic Inspections",
    description: "Thorough septic system evaluation and functionality testing.",
    icon: Database,
    image: "/images/1702219498banner-septic-inspection.jpg",
    href: "/services/septic-inspections"
  },
  {
    title: "Well Water Testing",
    description: "Complete water quality analysis for private well systems.",
    icon: TestTube,
    image: "/images/Environmental-Testing-and-Research-Laboratories-Inc.jpg",
    href: "/services/well-water-testing"
  },
  // {
  //   title: "Sewer Scope Inspections",
  //   description: "Camera inspection of sewer lines to detect blockages and damage.",
  //   icon: Waves,
  //   image: "/images/pipes-2672184_1280.jpg",
  //   href: "/services/sewer-scope"
  // }
]

export function Services() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Inspection Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive inspection services to give you complete peace of mind about your property investment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={service.href}
                className="group bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}