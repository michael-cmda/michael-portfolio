"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Calendar, GraduationCap, Briefcase, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageModal } from "./image-modal"

// --- Data (Unchanged but sorted for logic) ---
const sortedTimeline = [
  {
    date: "2025-04",
    month: "April",
    year: "2025",
    title: "Web Developer",
    company: "SixEleven Global Services",
    type: "Work",
    description: "Developing internal web applications with a Laravel API backend and React frontend. Streamlining workflows and connecting branches through integrated systems.",
    image: "sixeleven.jpg",
    images: ["sixeleven.jpg"],
  },
  {
    date: "2024-06",
    month: "May",
    year: "2024",
    title: "Backend Developer",
    company: "Next BPO Solutions Inc.",
    type: "Work",
    description: "Built admin dashboards and examination platforms using PHP, Laravel, and JavaScript.",
    image: "backend-nbpo.jpg",
    images: ["backend-nbpo.jpg"],
  },
  {
    date: "2023-11",
    month: "Nov",
    year: "2023",
    title: "Backend Developer Intern",
    company: "Next BPO Solutions Inc.",
    type: "Work",
    description: "Gained hands-on experience in API creation and database management.",
    image: "intern1.jpg",
    images: ["intern1.jpg", "intern2.jpg", "intern3.jpg"],
  },
  {
    date: "2020-06", // Adjusted date for chronological flow
    month: "Oct",
    year: "2024",
    title: "BS in Information Technology",
    company: "University of Mindanao",
    type: "Education",
    description: "Focused on web/mobile dev, database systems, and software engineering.",
    image: "student1.jpg",
    images: ["student1.jpg", "student2.jpg", "student3.jpg"],
  },
].sort((a, b) => (a.date < b.date ? 1 : -1))

const interests = [
  "Web Development", "Mobile App Development", "API Development", 
  "Database Design", "Flutter & Firebase", "System Architecture"
]

export function About() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [modalState, setModalState] = useState({ open: false, images: [] as string[] })

  return (
    <section id="about" className="py-24 bg-background/50" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-6">
        
        {/* === HEADER SECTION === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="px-3 py-1 text-primary border-primary/30 uppercase tracking-widest">
              About me
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Designing systems, <br />
              <span className="text-muted-foreground">building experiences.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Developer specializing in web and mobile applications, focusing on creating efficient backend systems and polished frontend experiences.

I build practical tools for real-world use, including admin dashboards, assessment platforms, and team productivity solutions.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {interests.map((interest) => (
                <Badge key={interest} variant="secondary" className="bg-secondary/50 hover:bg-primary hover:text-white transition-all">
                  {interest}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 grid grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: MapPin, text: "Davao City, Philippines", label: "Location" },
              { icon: Calendar, text: "Available for projects", label: "Status", highlight: true },
              { icon: GraduationCap, text: "Bachelor of Science in Information Technology", label: "Education" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl border bg-card/30 hover:bg-card/80 transition-colors">
                <div className="p-2.5 bg-primary/10 rounded-xl">
                  <item.icon className={`h-5 w-5 ${item.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-semibold">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* === TIMELINE SECTION === */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold">Professional Journey</h3>
            <div className="h-[1px] flex-1 bg-border/60" />
          </div>

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
            {sortedTimeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 transform">
                  {item.type === "Work" ? <Briefcase size={16} className="text-primary" /> : <GraduationCap size={16} className="text-primary" />}
                </div>

                {/* Card */}
                <Card className="w-[calc(100%-3rem)] md:w-[45%] overflow-hidden border-border/50 hover:border-primary/30 transition-all shadow-sm hover:shadow-md">
                  <div 
                    className="relative h-40 cursor-zoom-in overflow-hidden" 
                    onClick={() => setModalState({ open: true, images: item.images })}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <Badge className="absolute top-3 right-3 z-20 bg-background/80 backdrop-blur text-foreground hover:bg-background">
                      {item.year}
                    </Badge>
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <div>
                      <div className="text-xs font-bold text-primary uppercase tracking-tight">{item.company}</div>
                      <h4 className="text-lg font-bold leading-tight">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-medium text-muted-foreground pt-2">
                        <Calendar size={12} /> {item.month} {item.year}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={modalState.open}
        onClose={() => setModalState({ ...modalState, open: false })}
        images={modalState.images}
        currentImageIndex={0}
        onImageClick={() => {}}
      />
    </section>
  )
}