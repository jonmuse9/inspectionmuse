import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const serviceAreas = {
  maryland: {
    name: "Maryland",
    counties: [
      {
        name: "Carroll County",
        cities: [
          "Westminster", "Eldersburg", "Sykesville", "Mount Airy", 
          "Taneytown", "Manchester", "Hampstead", "Finksburg",
          "New Windsor", "Union Bridge", "Woodbine", "Marriottsville"
        ]
      },
      { name: "Baltimore County", cities: [] },
      { name: "Howard County", cities: [] },
      { name: "Frederick County", cities: [] }
    ]
  },
  pennsylvania: {
    name: "Pennsylvania",
    counties: [
      { name: "Franklin County", cities: [] },
      { name: "Adams County", cities: [] },
      { name: "York County", cities: [] },
      { name: "Cumberland County", cities: [] }
    ]
  }
}

export function ServiceAreas() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving Maryland & Pennsylvania
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We provide professional home inspection services throughout Maryland and Pennsylvania. 
              Our inspectors are familiar with local construction practices, common issues, and 
              the unique characteristics of homes across both states.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Service Areas
              </h3>
              
              {/* Maryland Counties */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-foreground">Maryland</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-2">
                  {serviceAreas.maryland.counties.map((county) => (
                    <div key={county.name} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span className="text-foreground">{county.name}</span>
                    </div>
                  ))}
                  <div className="col-span-2 sm:col-span-1 flex items-center gap-2 sm:justify-center">
                    <div className="h-2 w-2 bg-primary/50 rounded-full" />
                    <span className="text-sm text-muted-foreground italic">Contact us to verify we service your specific location</span>
                  </div>
                </div>
              </div>
              
              {/* Pennsylvania Counties */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">Pennsylvania</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceAreas.pennsylvania.counties.map((county) => (
                    <div key={county.name} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span className="text-foreground">{county.name}</span>
                    </div>
                  ))}
                  <div className="col-span-2 sm:col-span-1 flex items-center gap-2 sm:justify-center">
                    <div className="h-2 w-2 bg-primary/50 rounded-full" />
                    <span className="text-sm text-muted-foreground italic">Contact us to verify we service your specific location</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Contact us to confirm service availability in your specific area. 
              We're continuously expanding our service regions.
            </p>

            <Link href="/contact">
              <Button size="lg" className="btn-primary-large">Check Service Availability</Button>
            </Link>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/beautiful-shot-big-farmhouse-clear-blue-sky.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-2xl font-bold">Local Expertise</p>
              <p className="text-lg">Proudly serving MD & PA homes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}