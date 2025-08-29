import Image from "next/image"
import { cn } from "@/lib/utils"

interface ServiceOverviewSectionProps {
  children: React.ReactNode
  sideImage?: {
    src: string
    alt: string
  }
  className?: string
}

export function ServiceOverviewSection({ 
  children, 
  sideImage, 
  className 
}: ServiceOverviewSectionProps) {
  return (
    <section className={cn(sideImage ? "pt-20 pb-8" : "py-16", "bg-background", className)}>
      <div className="container mx-auto px-4">
        <div className={cn(
          "max-w-4xl mx-auto",
          sideImage && "max-w-7xl grid lg:grid-cols-5 gap-12"
        )}>
          <div className={sideImage ? "lg:col-span-2 self-start" : ""}>
            {children}
          </div>
          
          {sideImage && (
            <div className="relative h-[320px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl lg:col-span-3 self-center">
              <Image
                src={sideImage.src}
                alt={sideImage.alt}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}