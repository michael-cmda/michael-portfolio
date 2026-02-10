"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectModal } from "./project-modal"
import { motion, useInView } from "framer-motion"

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: "Employee Assistance & Support System",
      description:
        "Development of a comprehensive internal support system at NextBPO Solutions for production employees to request assistance. Built scalable backend architecture with Laravel and MySQL to handle IT support tickets, administrative requests, utility management, and employee leave applications. Implemented role-based access control, automated workflow routing, and real-time status tracking that streamlined internal operations.",
      image: "/ticketing.jpg",
      images: ["/ticketing-system-login.png", "ticketing.jpg"],
      technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Role-Based Access Control"],
      featured: true,
    },
    {
      title: "Applicant Assessment Application",
      description:
        "Developed a comprehensive web-based assessment platform for HR recruitment processes. Built robust backend architecture using Laravel and MySQL to handle multiple exam types including MCQs, audio simulations, mock calls, and typing speed tests. Implemented complex scoring algorithms, weighted calculations, and automated grading systems with manual review capabilities for audio responses.",
      image: "/assesment_dashboard.jpg",
      images: [
        "/assesment_dashboard.jpg",
        "/assessment-exam-interface.png",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Laragon", "Audio Processing", "Data Privacy Compliance"],
      featured: true,
    },
    {
      title: "Team Collaboration Platform",
      description:
        "Developed an integrated team collaboration hub that brings together chat, meetings, file sharing, and project management in one unified workspace. Features include persistent team channels, real-time messaging, employee presence tracking, secure authentication, and administrative controls. Designed to streamline communication workflows and enhance team productivity across distributed workforces.",
      image: "/team-collaboration-chat2.png",
      images: ["/team-collaboration-login.png", "/team-collaboration-chat2.png"],
      technologies: ["React", "Laravel", "PHP", "JavaScript", "CSS", "Tailwind CSS"],
      featured: true,
    },
    {
      title: "VetInspect - Livestock Inspection System",
      description:
        "Developed a cross-platform mobile and web application for the Davao City Veterinarian Office to streamline livestock inspection processes. Built with Flutter for mobile and JavaScript for web, integrated with Firebase for real-time data synchronization. Features include inspection scheduling, data entry, establishment management, comprehensive reporting with charts and analytics, and audit logging. Successfully deployed and tested, improving efficiency in livestock inspection workflows.",
      image: "/vetinspect_client.jpg",
      images: ["/vetinspect_client.jpg", "/vetinspect-poster.jpg", "/vetinspect-dashboard.png", "/vetinspect-mobile.jpg"],
      technologies: ["Flutter", "JavaScript", "Firebase", "Mobile Development", "Data Analytics"],
      featured: true,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)

  const openModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="portfolio" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">My Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A collection of projects that showcase my skills and passion for creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded">View Image</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
