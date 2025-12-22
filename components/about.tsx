"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Timeline Data (unsorted)
const timeline = [
  {
    date: "2025-04", // YYYY-MM format
    month: "April",
    year: "2025",
    title: "Web Developer",
    company: "SixEleven Global Services and Solutions",
    description:
      "Currently developing web and mobile applications, collaborating with cross-functional teams, and delivering scalable solutions using React, Flutter, and Firebase.",
  },
  {
    date: "2024-06",
    month: "May",
    year: "2024",
    title: "Backend Developer",
    company: "Next BPO Solutions Inc.",
    description:
      "Built internal systems including admin dashboards, examination platforms, and team communication tools using PHP, Laravel, and JavaScript.",
  },
  {
    date: "2023-11",
    month: "November",
    year: "2023",
    title: "Backend Developer Intern",
    company: "Next BPO Solutions Inc.",
    description:
      "Gained hands-on experience in backend development, API creation, and database management while working on real-world projects.",
  },
  {
    date: "2024-10",
    month: "October",
    year: "2024",
    title: "Bachelor of Information Technology",
    company: "University of Mindanao – Davao City",
    description:
      "Completed degree with focus on web development, mobile applications, database systems, and software engineering principles.",
  },
]

// Sort timeline by date (descending so newest first)
const sortedTimeline = [...timeline].sort((a, b) => (a.date < b.date ? 1 : -1))

// Areas of Focus
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

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Web and mobile developer with experience in backend, frontend, and cross-platform development, specializing
            in scalable systems and intuitive user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I’m a web and mobile developer with hands-on experience building internal systems such as admin
              dashboards, examination platforms, and team communication tools. On the web side, I work with PHP,
              JavaScript, React, and SQL to design and develop scalable applications. On the mobile side, I use Flutter
              and Firebase to create cross-platform apps with real-time features and seamless integrations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I enjoy collaborating with teams and participating in cross-functional meetings to deliver solutions that
              improve workflows and operations. My passion lies in building efficient, user-friendly systems that make a
              real impact, whether on the web or mobile.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Davao City, Philippines</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Available for new opportunities</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span>Bachelor of Information Technology Graduate</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Areas of Focus</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8">My Journey</h3>
            <div className="space-y-6">
              {sortedTimeline.map((item, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-center px-1">
                        <span className="text-foreground font-extrabold text-xs leading-tight">
                          {item.month} <br /> {item.year}
                        </span>
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-primary font-medium mb-2">{item.company}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
