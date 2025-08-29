import Image from "next/image"
import { cn } from "@/lib/utils"

interface GalleryItem {
  image: string
  imageAlt: string
  title: string
  subtitle: string
}

interface ServiceGallerySectionProps {
  title: string
  items: GalleryItem[]
  columns?: 2 | 3
  className?: string
}

export function ServiceGallerySection({
  title,
  items,
  columns = 3,
  className
}: ServiceGallerySectionProps) {
  return (
    <section className={cn("py-16 bg-muted/50", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {title}
        </h2>
        <div className={cn(
          "grid gap-6",
          columns === 2 && "md:grid-cols-2",
          columns === 3 && "md:grid-cols-3"
        )}>
          {items.map((item, index) => (
            <div key={index} className="relative h-[250px] rounded-lg overflow-hidden group">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-white/80">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}