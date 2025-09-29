import { Shield, Award, Users, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CallButton } from "@/components/ui/call-button"
import { ScheduleButton } from "@/components/ui/schedule-button"
import InterNACHICertification from "@/components/InterNACHICertification"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About InspectionMuse - Professional Home Inspectors in Carroll County",
  description: "Learn about InspectionMuse's commitment to providing thorough, professional home inspections in Carroll County, MD. Licensed, insured, and InterNACHI certified.",
  alternates: {
    canonical: "https://inspectionmuse.com/about/",
  },
  openGraph: {
    title: "About InspectionMuse - Professional Home Inspectors",
    description: "Learn about our commitment to providing thorough home inspections in Carroll County, MD.",
    url: "https://inspectionmuse.com/about/",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About InspectionMuse</h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Your trusted partner for professional home inspections in Carroll County, Maryland
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4">Making Your Biggest Investment Your Safest Investment</h2>
                <p className="text-muted-foreground mb-4">
                  At InspectionMuse, we understand that buying a home is one of the most significant 
                  investments you'll ever make. That's why we're committed to providing thorough, 
                  professional inspections that give you the knowledge and confidence you need.
                </p>
                <p className="text-muted-foreground mb-4">
                  We bring deep expertise in the construction and inspection industry to every 
                  inspection. Our comprehensive reports help you understand your property's 
                  condition and make informed decisions.
                </p>
                <p className="text-muted-foreground">
                  We serve Carroll County and surrounding areas with pride, offering detailed 
                  inspections, clear communication, and exceptional service to every client.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/roof-inspection-on-residential-home.jpg')" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Licensed & Insured</h3>
                <p className="text-muted-foreground text-sm">Fully licensed in Maryland with comprehensive insurance coverage</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">InterNACHI Certified</h3>
                <p className="text-muted-foreground text-sm">Certified by the International Association of Certified Home Inspectors</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">1000+ Inspections</h3>
                <p className="text-muted-foreground text-sm">Extensive experience with homes throughout Carroll County</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">24-Hour Reports</h3>
                <p className="text-muted-foreground text-sm">Detailed reports delivered within 24 hours of inspection</p>
              </div>
            </div>

            <div id="certifications" className="bg-gray-200 rounded-lg border border-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">Professional Certifications & Training</h2>
              <p className="text-black mb-6">
                Our commitment to excellence is backed by continuous education and certifications from the industry's 
                leading organizations. We maintain the highest standards of professional development to ensure 
                you receive the most thorough and knowledgeable inspection services available.
              </p>
              <InterNACHICertification />
              <p className="text-black mt-6 text-sm text-center">
                InterNACHI® is the world's largest association of residential and commercial property inspectors, 
                providing education, training, and certification to help inspectors deliver the best service to their clients.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8">
              <h2 className="text-2xl font-bold mb-4">Our Commitment to You</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span className="text-foreground">Thorough inspections following InterNACHI standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span className="text-foreground">Clear, detailed reports with photos and explanations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span className="text-foreground">Available to answer questions before and after inspection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span className="text-foreground">Flexible scheduling to meet your timeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span className="text-foreground">Professional, courteous service every time</span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Schedule Your Inspection?</h2>
              <p className="text-muted-foreground mb-6">
                Contact us today to schedule your comprehensive home inspection
              </p>
              <div className="flex gap-4 justify-center">
                <ScheduleButton />
                <CallButton variant="white-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}