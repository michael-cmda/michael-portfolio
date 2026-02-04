"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowUpRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const nameControls = useAnimation()
  const bottomControls = useAnimation()
  const imageControls = useAnimation()

  useEffect(() => {
    async function sequence() {
      // 1️⃣ Animate name and image in together
      await Promise.all([
        nameControls.start({ opacity: 1, x: 0, y: 0, transition: { duration: 1 } }),
        imageControls.start({ opacity: 1, x: 0, transition: { duration: 1 } }),
      ])

      // 2️⃣ Move name away
      await nameControls.start({
        x: -200,
        y: -100,
        opacity: 0.1,
        transition: { duration: 1, ease: "easeInOut" },
      })

      // 3️⃣ Show bottom hero content
      await bottomControls.start({ opacity: 1, y: 0, transition: { duration: 1 } })
    }

    sequence()
  }, [])

  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#fbfafa]"
    >
      {/* 1. NAME */}
      <motion.div
        animate={nameControls}
        initial={{ opacity: 0, x: -100, y: 0 }}
        className="absolute inset-y-0 left-0 w-full flex items-center z-0 select-none px-8 md:px-20 pointer-events-none"
      >
        <h1 className="text-[14vw] font-[950] leading-[0.75] uppercase tracking-tighter text-black/[0.16] text-left">
          MICHAEL<br />
          JAN<br />
          ARIETA
        </h1>
      </motion.div>

      {/* 2. IMAGE */}
      <div className="absolute inset-0 flex items-end justify-end z-10 pointer-events-none">
        <motion.div
          animate={imageControls}
          initial={{ opacity: 0, x: 100 }}
          className="relative h-[90vh] w-auto right-0 pr-4 lg:pr-20"
        >
          <img
            src="/profile.png"
            alt="Michael Jan Arieta"
            className="h-full w-auto object-contain drop-shadow-[-40px_0_60px_rgba(0,0,0,0.07)]"
          />
        </motion.div>
      </div>

      {/* 3. SCROLL HINT stays untouched */}
      <div className="absolute inset-y-0 left-0 w-full flex items-center z-20 pointer-events-none select-none px-8 md:px-20">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}
          className="text-[12vw] font-[950] leading-[0.75] uppercase tracking-tighter text-transparent text-left"
        >
          MICHAEL<br />
          JAN<br />
          ARIETA
        </motion.h1>
      </div>

      {/* 4. BOTTOM HERO */}
      <div className="relative z-30 w-full h-full max-w-[1440px] flex flex-col justify-between p-8 md:p-16">
        <div className="flex justify-between items-start">
          <p className="text-primary font-bold text-[10px] tracking-[0.5em] uppercase">
            Based in Philippines
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            animate={bottomControls}
            initial={{ opacity: 0, y: 40 }}
            className="lg:col-span-5 p-8 border border-black/5 shadow-[20px_20px_60px_rgba(0,0,0,0.03)]"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-[0.3em] uppercase mb-6">
              Core Expertise
            </h2>
            <p className="text-black text-3xl md:text-5xl font-bold leading-tight mb-8 tracking-tight">
              Building <span className="text-primary underline decoration-2 underline-offset-4">scalable</span> backend systems, resilient APIs, and high-performance architectures.
            </p>

            <div className="flex items-center gap-6">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="rounded-none bg-black text-white hover:bg-primary px-8 h-14 font-black transition-all flex gap-3 group"
              >
                PROJECTS
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <div className="flex gap-5 items-center">
                <a href="#" className="hover:text-primary transition-colors text-black/40"><Github size={20} /></a>
                <a href="#" className="hover:text-primary transition-colors text-black/40"><Linkedin size={20} /></a>
              </div>
            </div>
          </motion.div>

          {/* Scroll to Explore */}
          <div className="hidden lg:flex lg:col-span-7 justify-end">
            <div className="flex items-center gap-4 rotate-90 origin-right translate-y-[-100px]">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-20">Scroll to Explore</span>
              <div className="w-12 h-[1px] bg-black/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
