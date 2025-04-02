"use client"

import type React from "react"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          "hover:translate-y-[-2px] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.2),-1px_-1px_2px_rgba(255,255,255,0.5)]",
          {
            "bg-primary text-primary-foreground": variant === "default",
            "border border-input bg-background hover:bg-accent": variant === "outline",
            "bg-transparent hover:bg-accent": variant === "ghost",
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3": size === "sm",
            "h-11 px-8": size === "lg",
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
CustomButton.displayName = "CustomButton"

export { CustomButton }

