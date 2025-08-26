import { Button } from "@/components/ui/button"
import { Phone, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center text-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Your Inspection?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Don't leave your biggest investment to chance. Get a thorough, 
            professional inspection from Carroll County's trusted experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Calendar className="mr-2" />
                Schedule Online
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 border-black"
                style={{ color: '#01E701' }}
              >
                <Phone className="mr-2" style={{ color: '#01E701' }} />
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-lg">
            <p className="text-muted-foreground">
              Available 7 days a week • Same week appointments • 
              Reports within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}