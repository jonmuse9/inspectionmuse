import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logos/muse_logo_paths.svg"
                alt="InspectionMuse professional home inspection company Central Maryland Pennsylvania"
                width={250}
                height={149}
                className="h-[62.5px] w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Professional home inspections serving Central Maryland and South Central Pennsylvania. 
              Making your biggest investment your safest investment.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/services-fees"
                  className="hover:text-white transition-colors font-medium"
                >
                  Services & Fees
                </Link>
              </li>
              <li>
                <Link
                  href="/services/home-inspections"
                  className="hover:text-white transition-colors"
                >
                  Home Inspections
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pre-listing-inspection"
                  className="hover:text-white transition-colors"
                >
                  Pre-Listing Inspection
                </Link>
              </li>
              <li>
                <Link
                  href="/services/radon-testing"
                  className="hover:text-white transition-colors"
                >
                  Radon Testing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/termite-inspections"
                  className="hover:text-white transition-colors"
                >
                  Termite Inspections
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mold-testing"
                  className="hover:text-white transition-colors"
                >
                  Mold & Air Quality Testing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/septic-inspections"
                  className="hover:text-white transition-colors"
                >
                  Septic Inspections
                </Link>
              </li>
              <li>
                <Link
                  href="/services/well-water-testing"
                  className="hover:text-white transition-colors"
                >
                  Well Water Testing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sewer-scope"
                  className="hover:text-white transition-colors"
                >
                  Sewer Scope Inspections
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about/service-areas"
                  className="hover:text-white transition-colors"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/about/for-agents"
                  className="hover:text-white transition-colors"
                >
                  For Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="hover:text-white transition-colors"
                >
                  Schedule Inspection
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Serving Central Maryland & South Central Pennsylvania
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:443-508-8558"
                  className="hover:text-white transition-colors text-sm"
                >
                  (443) 508-8558
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@inspectionmuse.com"
                  className="hover:text-white transition-colors text-sm"
                >
                  info@inspectionmuse.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} InspectionMuse. All rights
            reserved.
          </p>
          <p className="mt-2">
            Professional Home Inspections | Licensed & Insured | Central MD & South Central PA
          </p>
        </div>
      </div>
    </footer>
  );
}
