import { CheckCircle, Clock, FileText, Users, Award, Shield } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: CheckCircle,
    title: "Thorough Inspections",
    description: "We inspect over 400 items in every home, following InterNACHI standards"
  },
  {
    icon: Clock,
    title: "Same Week Service",
    description: "Quick scheduling availability to meet your closing timeline"
  },
  {
    icon: FileText,
    title: "Detailed Reports",
    description: "Easy-to-read reports with photos delivered within 24 hours"
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    description: "Extensive knowledge of local construction and common issues"
  },
  {
    icon: Award,
    title: "Certified Professional",
    description: "InterNACHI certified and continuously educated",
    href: "/about#certifications"
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete liability and E&O insurance for your protection"
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose InspectionMuse?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing the most thorough, professional home inspections in Carroll County
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Icon className="h-12 w-12 text-primary" />
                </div>
                <div>
                  {feature.href ? (
                    <Link href={feature.href} className="group">
                      <h3 className="text-xl font-semibold mb-2 text-primary group-hover:underline">
                        {feature.title}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  )}
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}