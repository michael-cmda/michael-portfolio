"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <img
            src="/profile.png"
            alt="Michael Jan Arieta"
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-lg object-cover"
          />
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance whitespace-nowrap">
          Hi, I'm <span className="text-primary">Michael Jan Arieta</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
          Backend & Mobile Developer – Experienced in building reliable backend systems, seamless APIs, and
          cross-platform mobile applications. Focused on transforming complex challenges into efficient, scalable
          solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" onClick={scrollToPortfolio} className="group">
            View Portfolio
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            Contact Me
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="sm" className="hover:text-primary" asChild>
            <a href="https://github.com/michael-cmda" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-primary" asChild>
            <a
              href="https://www.linkedin.com/in/michael-jan-arieta-a8b30a242/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-primary" asChild>
            <a href="mailto:arietamichaeljan@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
