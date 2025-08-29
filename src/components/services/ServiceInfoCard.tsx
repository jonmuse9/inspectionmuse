import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface InfoCard {
  icon: LucideIcon
  title: string
  description: string
}

interface ServiceInfoCardProps {
  title: string
  subtitle?: string
  cards: InfoCard[]
  columns?: 2 | 3 | 4
  className?: string
}

export function ServiceInfoCard({ 
  title, 
  subtitle, 
  cards, 
  columns = 4, 
  className 
}: ServiceInfoCardProps) {
  const getGridCols = () => {
    switch (columns) {
      case 2:
        return "md:grid-cols-2"
      case 3:
        return "md:grid-cols-2 lg:grid-cols-3"
      case 4:
      default:
        return "md:grid-cols-2 lg:grid-cols-4"
    }
  }

  return (
    <section className={cn("py-16 bg-muted/50", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className={cn("grid gap-6", getGridCols())}>
          {cards.map((card, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <card.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}