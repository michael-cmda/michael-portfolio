"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, GraduationCap, ArrowUpRight, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageModal } from "./image-modal"

// -- Data remains untouched --
const timeline = [
  {
    date: "2025-04",
    month: "April",
    year: "2025",
    title: "Web Developer",
    company: "SixEleven Global Services and Solutions",
    description: "Currently developing internal web applications with a Laravel API backend and React frontend, building company systems that connect all branches, streamline workflows, and enable faster business processes while collaborating with cross-functional teams.",
    image: "sixeleven.jpg",
    images: ["sixeleven.jpg"],
  },
  {
    date: "2024-06",
    month: "May",
    year: "2024",
    title: "Backend Developer",
    company: "Next BPO Solutions Inc.",
    description: "Built internal systems including admin dashboards, examination platforms, and team communication tools using PHP, Laravel, and JavaScript.",
    image: "backend-nbpo.jpg",
    images: ["backend-nbpo.jpg"],
  },
  {
    date: "2023-11",
    month: "November",
    year: "2023",
    title: "Backend Developer Intern",
    company: "Next BPO Solutions Inc.",
    description: "Gained hands-on experience in backend development, API creation, and database management while working on real-world projects.",
    image: "intern1.jpg",
    images: ["intern1.jpg", "intern2.jpg", "intern3.jpg"],
  },
  {
    date: "2024-10",
    month: "October",
    year: "2024",
    title: "Bachelor of Information Technology",
    company: "University of Mindanao – Davao City",
    description: "Completed degree with focus on web development, mobile applications, database systems, and software engineering principles.",
    image: "student1.jpg",
    images: ["student1.jpg", "student2.jpg", "student3.jpg"],
  },
]

const interests = [
  "Web Development", "Mobile App Development", "API Development",
  "Database Design", "Flutter & Firebase", "System Architecture",
  "Team Collaboration", "Continuous Learning",
]

const sortedTimeline = [...timeline].sort((a, b) => (a.date < b.date ? 1 : -1))

export function About() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const [modalState, setModalState] = useState({ open: false, images: [] as string[] })

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-background" ref={containerRef}>
      {/* Background Decor - Modern Subtle Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-24 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-24 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Profile & Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
             <p>Developer specializing in web and mobile applications, focusing on creating efficient backend systems and polished frontend experiences.</p>
<p className="text-base">I build practical tools for real-world use, including admin dashboards, assessment platforms, and team productivity solutions.</p>

              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: MapPin, text: "Davao City, Philippines" },
                { icon: Calendar, text: "Available for new opportunities", highlight: true },
                { icon: GraduationCap, text: "Bachelor of Information Technology" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl border bg-card/50 backdrop-blur-sm">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <item.icon className={`h-5 w-5 ${item.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Areas of Focus</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default py-1.5 px-3">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Modern Timeline */}
          <div className="lg:col-span-7 relative">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              Professional Journey
              <div className="h-px flex-1 bg-border" />
            </h3>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {sortedTimeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-background absolute left-0 md:left-1/2 md:-ml-5 shadow-sm group-hover:border-primary transition-colors duration-500 z-10">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                  </div>

                  {/* Content Card */}
                  <Card className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] overflow-hidden border-muted/60 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                    {item.image && (
                      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setModalState({ open: true, images: item.images })}>
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                          <Button size="sm" variant="secondary" className="h-8 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                            View Images <ArrowUpRight className="ml-1 w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    )}
                    <div className="p-5">
                      <time className="text-xs font-bold text-primary mb-1 block uppercase tracking-wider">{item.month} {item.year}</time>
                      <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-sm font-semibold text-muted-foreground mb-3">{item.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={modalState.open}
        onClose={() => setModalState({ ...modalState, open: false })}
        images={modalState.images}
        currentImageIndex={null}
        onImageClick={(i) => {}}
      />
    </section>
  )
}