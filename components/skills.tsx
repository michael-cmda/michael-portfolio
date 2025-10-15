"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Database, Shield, Smartphone } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      skills: ["PHP", "Laravel", "Yii2 Framework", "Node.js"],
    },
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React/Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "Firebase", "Mobile UI/UX"],
    },
    {
      title: "Database & Systems",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "System Administration"],
    },
    {
      title: "Network & Security",
      icon: Shield,
      skills: ["Network Security", "Computer Systems Servicing", "Network Configuration", "IT Support"],
    },
  ]

  const certifications = [
    "Network Security Specialist (IT Specialist)",
    "Networking Specialist (IT Specialist)",
    "TESDA NC II - Computer Systems Servicing",
    "Complete Web Development Bootcamp",
    "Master Laravel & PHP Development",
    "Modern PHP Developer Certification",
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A comprehensive overview of my technical skills backed by professional certifications and hands-on
            experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Key Certifications</h3>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">What I Bring to the Table</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">Full-Stack Development</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Expertise in web and mobile technologies with strong PHP/Laravel foundation and modern frameworks like
                React and Flutter
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">Network & Security</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Certified in network security and systems administration with hands-on experience in IT infrastructure
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">Cross-Platform Solutions</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building responsive web applications and native mobile apps using Flutter, Firebase, and modern
                development practices
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
