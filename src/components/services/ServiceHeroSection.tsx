import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, LucideIcon } from "lucide-react"

interface ServiceHeroSectionProps {
  title: string
  subtitle: string
  image: string
  imageAlt: string
  ctaText?: string
  ctaHref?: string
  ctaIcon?: LucideIcon
  showArrow?: boolean
}

export function ServiceHeroSection({
  title,
  subtitle,
  image,
  imageAlt,
  ctaText,
  ctaHref,
  ctaIcon: Icon = Calendar,
  showArrow = true
}: ServiceHeroSectionProps) {
  return (
    <section className="relative h-[400px] md:h-[500px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white/90">
              {subtitle}
            </p>
            {ctaText && ctaHref && (
              <Link href={ctaHref}>
                <Button size="lg" className="btn-primary-large">
                  {Icon && <Icon className="mr-2 h-5 w-5" />}
                  {ctaText}
                  {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}