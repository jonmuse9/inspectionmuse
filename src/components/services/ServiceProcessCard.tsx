import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProcessItem {
  icon?: LucideIcon
  title: string
  description: string
}

interface ServiceProcessCardProps {
  title: string
  items: ProcessItem[]
  columns?: 1 | 2
  className?: string
}

export function ServiceProcessCard({ 
  title, 
  items, 
  columns = 2, 
  className 
}: ServiceProcessCardProps) {
  return (
    <div className={cn(className)}>
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <div className={cn(
        "grid gap-6",
        columns === 1 ? "grid-cols-1" : "md:grid-cols-2"
      )}>
        {items.map((item, index) => (
          <div key={index} className="bg-card p-6 rounded-lg border">
            {item.icon && (
              <item.icon className="h-10 w-10 text-primary mb-3" />
            )}
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}