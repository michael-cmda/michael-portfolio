"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectModal } from "./project-modal"
import { Award, Calendar, Clock } from "lucide-react"
import { motion, useInView } from "framer-motion"

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [selectedCert, setSelectedCert] = useState<any>(null)

  const certifications = [
    {
      title: "Network Security Specialist",
      issuer: "Information Technology Specialist",
      date: "July 12, 2023",
      type: "Professional Certification",
      image: "/certifications/network-security-cert.png",
      description: "Certified in network security fundamentals and best practices",
    },
    {
      title: "Networking Specialist",
      issuer: "Information Technology Specialist",
      date: "December 17, 2022",
      type: "Professional Certification",
      image: "/certifications/networking-cert.png",
      description: "Comprehensive networking certification covering protocols and infrastructure",
    },
    {
      title: "National Certificate II - Computer Systems Servicing",
      issuer: "TESDA Philippines",
      date: "October 27, 2023",
      type: "National Certification",
      image: "/certifications/tesda-cert.png",
      description: "Government-issued certification for computer systems servicing competency",
    },
    {
      title: "On-The-Job Training Certificate",
      issuer: "Next BPO Solutions",
      date: "May 24, 2024",
      duration: "486 hours",
      type: "Training Certificate",
      image: "/certifications/bpo-training-cert.png",
      description: "Completed comprehensive IT department training program",
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      issuer: "Udemy",
      date: "October 15, 2024",
      duration: "61.5 hours",
      type: "Course Completion",
      image: "/certifications/web-dev-bootcamp-cert.jpg",
      description: "Comprehensive web development bootcamp covering full-stack technologies",
    },
    {
      title: "Master Laravel & PHP: From Beginner to Advanced",
      issuer: "Udemy",
      date: "October 15, 2024",
      duration: "30.5 hours",
      type: "Course Completion",
      image: "/certifications/laravel-php-cert.jpg",
      description: "Advanced Laravel framework and PHP development course",
    },
    {
      title: "PHP for Beginners - Become a PHP Master - CMS Project",
      issuer: "Udemy",
      date: "August 14, 2024",
      duration: "37 hours",
      type: "Course Completion",
      image: "/certifications/php-beginners-cert.jpg",
      description: "PHP fundamentals with hands-on CMS project development",
    },
    {
      title: "Yii 2: From Beginner to Expert",
      issuer: "Udemy",
      date: "August 2, 2024",
      duration: "10 hours",
      type: "Course Completion",
      image: "/certifications/yii2-cert.jpg",
      description: "Yii2 PHP framework development from basics to advanced features",
    },
  ]

  const getCertTypeColor = (type: string) => {
    switch (type) {
      case "Professional Certification":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "National Certification":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Training Certificate":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Course Completion":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <section id="certifications" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Certifications & Training</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Professional certifications and completed training programs that validate my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={`text-xs ${getCertTypeColor(cert.type)}`}>{cert.type}</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight text-balance">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                    {cert.duration && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{cert.duration}</span>
                      </div>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 bg-transparent"
                    onClick={() => setSelectedCert(cert)}
                  >
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <ProjectModal
          project={{
            title: selectedCert.title,
            images: [selectedCert.image],
          }}
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  )
}
