import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, FileText, Users, Calendar, Shield } from "lucide-react"

export default function ForAgentsPage() {
  return (
    <main>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Partner with InspectionMuse
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We understand the importance of reliable home inspections in real estate transactions. 
              Our commitment to thorough, timely inspections helps you serve your clients better.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Why Agents Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Scheduling</h3>
                <p className="text-muted-foreground">
                  Same-day or next-day appointments available. We work around your timeline.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <FileText className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
                <p className="text-muted-foreground">
                  Comprehensive reports delivered within 24 hours, complete with photos and recommendations.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Client Education</h3>
                <p className="text-muted-foreground">
                  We take time to explain findings to buyers, helping them make informed decisions.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-muted-foreground">
                  Fully licensed, insured, and certified to provide peace of mind for you and your clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Agent Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">
                    Weekend and evening appointments available to accommodate your clients' schedules.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Agent-Friendly Reports</h3>
                  <p className="text-muted-foreground">
                    Clear, easy-to-understand reports that help facilitate negotiations and repairs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Repair Request Assistance</h3>
                  <p className="text-muted-foreground">
                    We can help prioritize repair items and provide cost estimates when needed.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Schedule Your Client's Inspection Today</h2>
            <p className="text-black/90 mb-8 text-lg">
              Fast, reliable inspections that keep your deals on track. 
              Same-week appointments available with reports delivered within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-primary hover:bg-black/80 border border-black flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Schedule Inspection Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-black text-black hover:bg-black/10">
                Call (443) 555-0100
              </Button>
            </div>
            <p className="text-black/80 mt-6">
              Priority scheduling available for repeat agent partners
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}