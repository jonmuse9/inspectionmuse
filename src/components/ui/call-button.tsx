import * as React from "react"
import { Phone } from "lucide-react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface CallButtonProps {
  variant?: 'white-overlay' | 'outline-overlay' | 'black-outline' | 'green-outline' | 'custom';
  size?: 'sm' | 'lg';
  showNumber?: boolean;
  phoneNumber?: string;
  className?: string;
  iconPosition?: 'left' | 'right' | 'both' | 'none';
  iconSize?: string;
}

export function CallButton({
  variant = 'outline-overlay',
  size = 'lg',
  showNumber = false,
  phoneNumber = "443-555-0100",
  className,
  iconPosition = 'left',
  iconSize = "h-4 w-4",
  ...props
}: CallButtonProps) {
  // Format phone number for tel: link (remove dashes)
  const telNumber = phoneNumber.replace(/-/g, '');
  
  // Determine button text
  const buttonText = showNumber ? `Call (${phoneNumber})` : "Call Now";
  
  // Build class names based on variant
  const variantClasses = {
    'white-overlay': '!bg-transparent !text-white border-white hover:!bg-white/10 border-2',
    'outline-overlay': 'bg-transparent border-primary text-primary hover:bg-primary/20 border-2',
    'black-outline': '!bg-transparent !text-black border-2 !border-black hover:!bg-black/10',
    'green-outline': '!bg-black/50 border-2 !text-[#00FF00] !border-[#00FF00] hover:!bg-[#00FF00]/10',
    'custom': ''
  };
  
  const finalClassName = variant === 'custom' 
    ? className 
    : cn(variantClasses[variant], className);
  
  // Render icon based on position
  const leftIcon = (iconPosition === 'left' || iconPosition === 'both') && (
    <Phone className={cn("mr-2", iconSize)} />
  );
  
  const rightIcon = (iconPosition === 'right' || iconPosition === 'both') && (
    <Phone className={cn("ml-2", iconSize)} />
  );
  
  return (
    <a href={`tel:${telNumber}`}>
      <Button 
        size={size}
        className={finalClassName}
        {...props}
      >
        {leftIcon}
        {buttonText}
        {rightIcon}
      </Button>
    </a>
  );
}