import React from "react"
import { Info, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface PartnershipInfoProps {
  title: string
  description: string
  icon?: LucideIcon
  variant?: "primary" | "warning" | "success"
  className?: string
}

export function PartnershipInfo({
  title,
  description,
  icon: Icon = Info,
  variant = "primary",
  className
}: PartnershipInfoProps) {
  const variantStyles = {
    primary: "bg-accent/20 border-primary/30",
    warning: "bg-amber-500/10 border-amber-500/30",
    success: "bg-green-500/10 border-green-500/30"
  }

  const iconStyles = {
    primary: "text-primary",
    warning: "text-amber-500",
    success: "text-green-500"
  }

  return (
    <div className={cn(
      "border rounded-lg p-6",
      variantStyles[variant],
      className
    )}>
      <div className="flex items-start gap-3">
        <Icon className={cn(
          "h-6 w-6 mt-0.5 flex-shrink-0",
          iconStyles[variant]
        )} />
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}