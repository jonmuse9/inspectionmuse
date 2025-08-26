import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Star, Clock, Shield, Award } from "lucide-react"

export default function ServiceTemplatePage() {
  return (
    <main>
      {/* Hero Section with Full-Width Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/roof-inspection-on-residential-home.jpg"
          alt="Professional home inspection service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Service Template Page
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">
                This is a template showcasing how images can enhance service pages
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview with Side Image */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
              <Button variant="outline" size="lg">
                Learn More About Our Process
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/businesswoman-using-tablet-analysis.jpg"
                alt="Inspector reviewing property data"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid with Icons */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Service</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine expertise, technology, and dedication to deliver exceptional inspection services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg border text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">
                Certified inspectors with years of experience
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fast Service</h3>
              <p className="text-sm text-muted-foreground">
                Same-week appointments available
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Guaranteed</h3>
              <p className="text-sm text-muted-foreground">
                Satisfaction guaranteed on all services
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Certified</h3>
              <p className="text-sm text-muted-foreground">
                Industry certifications and standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Work in Action
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-[250px] rounded-lg overflow-hidden group">
              <Image
                src="/images/attic-112266_1280.jpg"
                alt="Attic inspection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Attic Inspection</p>
              </div>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden group">
              <Image
                src="/images/basement-466197_1280.jpg"
                alt="Basement inspection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Basement Analysis</p>
              </div>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden group">
              <Image
                src="/images/Plumbing-5.jpg"
                alt="Plumbing inspection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Plumbing Systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-20">
        <Image
          src="/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg"
          alt="Beautiful home exterior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Schedule Your Inspection?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get peace of mind with our comprehensive inspection services. 
              Professional, thorough, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Inspection
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                View Sample Report
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}