import { CheckCircle, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChecklistItem {
  text: string
  description?: string
}

interface ChecklistSectionProps {
  title: string
  items: ChecklistItem[]
  icon?: LucideIcon
  columns?: 1 | 2
  className?: string
}

export function ChecklistSection({
  title,
  items,
  icon: Icon = CheckCircle,
  columns = 1,
  className
}: ChecklistSectionProps) {
  return (
    <div className={cn("", className)}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className={cn(
        columns === 1 && "space-y-3",
        columns === 2 && "grid md:grid-cols-2 gap-6"
      )}>
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <Icon className="h-5 w-5 text-primary mt-0.5" />
            {item.description ? (
              <div>
                <span className="font-semibold">{item.text}</span>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}