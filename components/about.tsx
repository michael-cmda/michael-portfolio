"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, GraduationCap } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { ImageModal } from "./image-modal" // new unified modal

// Timeline Data
const timeline = [
  {
    date: "2025-04",
    month: "April",
    year: "2025",
    title: "Web Developer",
    company: "SixEleven Global Services and Solutions",
    description:
      "Currently developing web applications with a Laravel API backend and React frontend, collaborating with cross-functional teams, and delivering scalable and maintainable solutions.",
  },
  {
    date: "2024-06",
    month: "May",
    year: "2024",
    title: "Backend Developer",
    company: "Next BPO Solutions Inc.",
    description:
      "Built internal systems including admin dashboards, examination platforms, and team communication tools using PHP, Laravel, and JavaScript.",
    image: "backend-nbpo.jpg",
    images: ["backend-nbpo.jpg"],
  },
  {
    date: "2023-11",
    month: "November",
    year: "2023",
    title: "Backend Developer Intern",
    company: "Next BPO Solutions Inc.",
    description:
      "Gained hands-on experience in backend development, API creation, and database management while working on real-world projects.",
    image: "intern1.jpg",
    images: ["intern1.jpg", "intern2.jpg", "intern3.jpg"],
  },
  {
    date: "2024-10",
    month: "October",
    year: "2024",
    title: "Bachelor of Information Technology",
    company: "University of Mindanao – Davao City",
    description:
      "Completed degree with focus on web development, mobile applications, database systems, and software engineering principles.",
    image: "student1.jpg",
    images: ["student1.jpg", "student2.jpg", "student3.jpg"],
  },
]

// Sort newest first
const sortedTimeline = [...timeline].sort((a, b) =>
  a.date < b.date ? 1 : -1
)

const interests = [
  "Web Development",
  "Mobile App Development",
  "API Development",
  "Database Design",
  "Flutter & Firebase",
  "System Architecture",
  "Team Collaboration",
  "Continuous Learning",
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Unified modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

  const openGallery = (imgs: string[]) => {
    setImages(imgs)
    setCurrentImageIndex(null) // start in gallery view
    setIsModalOpen(true)
  }

  const openImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentImageIndex(null)
  }

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Web and mobile developer with experience in backend, frontend, and
            cross-platform development, specializing in scalable systems and
            intuitive user experiences.
          </p>
          <p className="text-muted-foreground mb-6">
            I’m a web and mobile developer with hands-on experience building
            internal systems such as admin dashboards, examination platforms,
            and team communication tools.
          </p>

          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Davao City, Philippines</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Available for new opportunities</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span>Bachelor of Information Technology Graduate</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Areas of Focus</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {interests.map((interest) => (
              <Badge key={interest} variant="secondary">
                {interest}
              </Badge>
            ))}
          </div>
        </motion.div>
<h3 className="text-2xl font-bold mb-6 text-center">
 Experience
</h3>

        {/* TIMELINE */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {sortedTimeline.map((item, index) => (
            <Card key={index} className="overflow-hidden mx-auto">
          {item.image && item.images?.length > 0 && (
  <div
    className="relative group cursor-pointer"
    onClick={() => openGallery(item.images)}
  >
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-medium">
    
    </div>
  </div>
)}
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-center px-1">
                    <span className="text-foreground font-extrabold text-xs leading-tight">
                      {item.month} <br /> {item.year}
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-lg">{item.title}</h4>

                      {item.images?.length > 0 && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openGallery(item.images)}
                        >
                          View Images
                        </Button>
                      )}
                    </div>

                    <p className="text-primary font-medium">{item.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Unified Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
        currentImageIndex={currentImageIndex}
        onImageClick={openImage}
      />
    </section>
  )
}
