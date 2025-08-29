import * as React from "react"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface ScheduleButtonProps {
  variant?: 'primary' | 'outline' | 'white-overlay' | 'black-outline' | 'transparent' | 'custom';
  size?: 'sm' | 'lg';
  text?: 'Schedule Inspection' | 'Schedule Now' | 'Schedule Inspection Now' | 'Schedule Your Inspection' | string;
  href?: string;
  className?: string;
  fullWidth?: boolean;
  iconPosition?: 'left' | 'right' | 'both' | 'none';
  iconSize?: string;
  showArrow?: boolean;
  arrowPosition?: 'left' | 'right';
}

export function ScheduleButton({
  variant = 'primary',
  size = 'lg',
  text = 'Schedule Inspection',
  href = '/schedule',
  className,
  fullWidth = false,
  iconPosition = 'left',
  iconSize = "h-4 w-4",
  showArrow = false,
  arrowPosition = 'right',
  ...props
}: ScheduleButtonProps) {
  
  // Build class names based on variant
  const variantClasses = {
    'primary': 'btn-primary-large',
    'outline': 'btn-outline-overlay',
    'white-overlay': 'btn-white-overlay border-2',
    'black-outline': '!bg-transparent !text-black border-2 !border-black hover:!bg-black/10',
    'transparent': '!bg-transparent border-2',
    'custom': ''
  };
  
  const baseClassName = variant === 'custom' 
    ? className 
    : cn(
        variantClasses[variant], 
        fullWidth && 'w-full',
        className
      );
  
  // Render icons based on position
  const calendarLeft = (iconPosition === 'left' || iconPosition === 'both') && (
    <Calendar className={cn("mr-2", iconSize)} />
  );
  
  const calendarRight = (iconPosition === 'right') && (
    <Calendar className={cn("ml-2", iconSize)} />
  );
  
  const arrowLeft = showArrow && arrowPosition === 'left' && (
    <ArrowRight className={cn("mr-2", iconSize)} />
  );
  
  const arrowRight = showArrow && arrowPosition === 'right' && (
    <ArrowRight className={cn("ml-2", iconSize)} />
  );
  
  return (
    <Link href={href}>
      <Button 
        size={size}
        className={baseClassName}
        {...props}
      >
        {arrowLeft}
        {calendarLeft}
        {text}
        {calendarRight}
        {arrowRight}
      </Button>
    </Link>
  );
}