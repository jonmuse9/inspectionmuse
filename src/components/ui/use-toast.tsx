"use client"

import * as React from "react"

type ToastProps = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

type ToastContextType = {
  toast: (props: ToastProps) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    // Return a mock function if context is not available
    return {
      toast: (props: ToastProps) => {
        console.log("Toast:", props)
        // In a real implementation, this would show a toast notification
        if (typeof window !== 'undefined') {
          alert(`${props.title}\n${props.description || ''}`)
        }
      }
    }
  }
  return context
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toast = React.useCallback((props: ToastProps) => {
    console.log("Toast:", props)
    // Simple alert-based implementation for now
    if (typeof window !== 'undefined') {
      alert(`${props.title}\n${props.description || ''}`)
    }
  }, [])

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
    </ToastContext.Provider>
  )
}