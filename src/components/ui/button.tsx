
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // 99Tattoo specific variants
        tattoo: "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg hover:from-red-700 hover:to-red-900 hover:shadow-xl transform hover:scale-105",
        tattooSecondary: "bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg hover:from-gray-700 hover:to-gray-900 hover:shadow-xl transform hover:scale-105",
        tattooBlack: "bg-gradient-to-r from-black to-gray-800 text-white shadow-lg hover:from-gray-900 hover:to-black hover:shadow-xl transform hover:scale-105",
        tattooOutline: "border-2 border-red-600 text-red-600 bg-white hover:bg-red-50 hover:border-red-700 shadow-md hover:shadow-lg",
        tattooGhost: "text-red-600 hover:bg-red-50 hover:text-red-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        xl: "h-12 rounded-lg px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
