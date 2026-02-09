"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Logic for background state
      setIsScrolled(window.scrollY > 20)

      // Logic for active section
      const sections = ["home", "about", "portfolio", "skills", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
const scrollToSection = (sectionId: string) => {
  setActiveSection(sectionId) // ← highlight tab instantly
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  setIsOpen(false)
}


  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300">
      <nav 
        className={cn(
          "w-full max-w-5xl rounded-2xl border transition-all duration-300 px-6 py-2",
          isScrolled 
            ? "bg-background/70 backdrop-blur-xl border-border shadow-md" 
            : "bg-transparent border-transparent"
        )}
      >
        <div className="flex justify-between items-center h-12">
          {/* Logo with a more modern weight */}
          <div className="font-black text-xl tracking-tighter text-foreground cursor-default">
            Portfolio<span className="text-primary">.</span>
          </div>

          {/* Desktop Navigation: Uses a "Pill" indicator approach */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all rounded-full",
                  activeSection === item.id 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <Button 
            variant="secondary" 
            size="icon" 
            className="md:hidden rounded-xl w-10 h-10" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu: Animated drop-down */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <div className="flex flex-col space-y-1 pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-left px-4 py-3 text-sm font-bold rounded-xl transition-colors",
                  activeSection === item.id 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}