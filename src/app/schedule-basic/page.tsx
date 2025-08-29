import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Calendar, Clock, CheckCircle, Shield } from "lucide-react";
import { CallButton } from "@/components/ui/call-button";

export default function BasicSchedulePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section with Image */}
        <section className="relative h-[400px] bg-gradient-to-br from-blue-900 to-blue-700">
          <Image
            src="/images/businesswoman-using-tablet-analysis.jpg"
            alt="Professional scheduling inspection"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Schedule Your Inspection
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto text-blue-100">
                Book your comprehensive home inspection online in just a few minutes
              </p>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-white py-8 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">Licensed & Insured</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-blue-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">Same Day Reports</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-purple-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">InterNACHI Certified</p>
              </div>
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 text-orange-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">Flexible Scheduling</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scheduling Form Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Easy Online Booking
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select your service, pick a date and time that works for you, and we'll handle the rest.
                You'll receive instant confirmation and reminders.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
                <p className="text-center font-semibold">
                  Secure Online Scheduling Portal
                </p>
              </div>
              <iframe 
                src='https://app.spectora.com/home-inspectors/my-inspection-company-8ccc6aeb30/schedule?iframe=1' 
                style={{
                  border: 0,
                  height: '1100px',
                  width: '100%'
                }}
                title="Schedule Inspection"
              />
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Our team is here to assist you with scheduling
                </p>
                <CallButton 
                  variant="custom"
                  showNumber={true}
                  phoneNumber="443-555-0100"
                  className="text-blue-600 font-semibold hover:underline p-0 h-auto"
                  iconPosition="none"
                />
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
                <p className="text-gray-600">
                  We'll confirm your appointment within 2 hours during business hours
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Flexible Options</h3>
                <p className="text-gray-600">
                  Weekend and evening appointments available upon request
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}