"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Service Areas", href: "/about/service-areas" },
      { name: "For Agents", href: "/about/for-agents" },
    ]
  },
  {
    name: "Services & Fees",
    href: "/services-fees",
    children: [
      { name: "Home Inspections", href: "/services/home-inspections" },
      { name: "Walk & Talk Consultation", href: "/services/walk-and-talk" },
      { name: "Pre-Listing Inspection", href: "/services/pre-listing-inspection" },
      { name: "Radon Testing", href: "/services/radon-testing" },
      { name: "Termite Inspections", href: "/services/termite-inspections" },
      { name: "Mold & Air Quality Testing", href: "/services/mold-testing" },
      { name: "Septic Inspections", href: "/services/septic-inspections" },
      { name: "Well Water Testing", href: "/services/well-water-testing" },
      { name: "Sewer Scope Inspections", href: "/services/sewer-scope" },
    ]
  },
  { name: "Your Inspection", href: "/your-inspection" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const pathname = usePathname()

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logos/muse_logo_horiz_paths.svg" 
                alt="InspectionMuse Logo" 
                width={280} 
                height={60}
                priority
                className="h-10 md:h-12 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 hover:bg-accent transition-colors",
                        pathname.startsWith(item.href) ? "text-primary" : "text-foreground"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    {openDropdown === item.name && (
                      <div
                        className="absolute left-0 pt-2 w-56"
                      >
                        <div className="rounded-md shadow-lg bg-card border border-border py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors",
                      pathname === item.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/schedule">
              <Button className="ml-4">Schedule Inspection</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-foreground hover:bg-accent"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 text-sm font-medium hover:bg-accent rounded-md",
                        pathname.startsWith(item.href) ? "text-primary" : "text-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block pl-6 pr-3 py-2 text-sm text-muted-foreground hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent",
                      pathname === item.href ? "text-primary" : "text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-3 py-2">
              <Link href="/schedule" className="w-full block">
                <Button className="w-full">Schedule Inspection</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}