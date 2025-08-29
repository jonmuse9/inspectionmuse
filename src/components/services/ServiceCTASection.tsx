import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, LucideIcon } from "lucide-react"

interface ServiceCTASectionProps {
  title: string
  description: string
  image: string
  imageAlt: string
  primaryButton: {
    text: string
    href?: string
    onClick?: () => void
    icon?: LucideIcon
  }
  secondaryButton?: {
    text: string
    href?: string
    external?: boolean
    onClick?: () => void
    icon?: LucideIcon
  }
}

export function ServiceCTASection({
  title,
  description,
  image,
  imageAlt,
  primaryButton,
  secondaryButton
}: ServiceCTASectionProps) {
  // Default icons based on button text
  const PrimaryIcon = primaryButton.icon || (primaryButton.text.toLowerCase().includes('schedule') ? Calendar : undefined)
  const SecondaryIcon = secondaryButton?.icon || (secondaryButton?.text.toLowerCase().includes('report') ? FileText : undefined)

  return (
    <section className="relative py-20">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButton.href ? (
              <Link href={primaryButton.href}>
                <Button 
                  size="lg" 
                  className="btn-primary-large"
                  onClick={primaryButton.onClick}
                >
                  {PrimaryIcon && <PrimaryIcon className="mr-2 h-5 w-5" />}
                  {primaryButton.text}
                </Button>
              </Link>
            ) : (
              <Button 
                size="lg" 
                className="btn-primary-large"
                onClick={primaryButton.onClick}
              >
                {PrimaryIcon && <PrimaryIcon className="mr-2 h-5 w-5" />}
                {primaryButton.text}
              </Button>
            )}
            {secondaryButton && (
              secondaryButton.href ? (
                <Link 
                  href={secondaryButton.href}
                  {...(secondaryButton.external && {
                    target: "_blank",
                    rel: "noopener noreferrer"
                  })}
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="btn-white-overlay border-2 border-white"
                    onClick={secondaryButton.onClick}
                  >
                    {SecondaryIcon && <SecondaryIcon className="mr-2 h-5 w-5" />}
                    {secondaryButton.text}
                  </Button>
                </Link>
              ) : (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="btn-white-overlay border-2 border-white"
                  onClick={secondaryButton.onClick}
                >
                  {SecondaryIcon && <SecondaryIcon className="mr-2 h-5 w-5" />}
                  {secondaryButton.text}
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}