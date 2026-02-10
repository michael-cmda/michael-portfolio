"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Database, Shield, Smartphone, CheckCircle2 } from "lucide-react"
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
    <section id="skills" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
         
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive overview of my technical skills backed by professional certifications and hands-on experience.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-none bg-muted/30 shadow-none hover:bg-muted/50 transition-colors group">
                  <CardHeader className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center shadow-sm group-hover:text-primary transition-colors">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl font-semibold tracking-tight">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-3 py-1 bg-background rounded-full text-xs font-medium border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications & "What I Bring" Split Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary rounded-full" />
              Key Certifications
            </h3>
            <div className="grid sm:grid-cols-1 gap-3">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-all"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium leading-tight">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Value Prop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8 lg:pl-8"
          >
            <h3 className="text-2xl font-bold mb-8">What I Bring to the Table</h3>
            
            <div className="space-y-6">
              {[
                {
                  title: "Full-Stack Development",
                  desc: "Expertise in web and mobile technologies with strong PHP/Laravel foundation and modern frameworks like React and Flutter.",
                  icon: Code
                },
                {
                  title: "Network & Security",
                  desc: "Certified in network security and systems administration with hands-on experience in IT infrastructure.",
                  icon: Shield
                },
                {
                  title: "Cross-Platform Solutions",
                  desc: "Building responsive web applications and native mobile apps using Flutter, Firebase, and modern development practices.",
                  icon: Smartphone
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="mt-1">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}