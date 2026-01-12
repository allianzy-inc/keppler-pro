"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Search, Palette, Code, Rocket, LineChart } from "lucide-react"

export function Process() {
  const { t } = useLanguage()

  const icons = [Search, Palette, Code, Rocket, LineChart]

  return (
    <section id="process" className="scroll-mt-20 bg-secondary/50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.process.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t.process.subtitle}</p>
        </motion.div>

        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {t.process.steps.map((step, index) => {
              const Icon = icons[index]
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col items-center gap-4 lg:flex-row lg:gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div
                      className={`rounded-xl border border-border bg-card p-6 ${
                        isEven ? "lg:ml-auto lg:mr-8" : "lg:ml-8 lg:mr-auto"
                      } max-w-md`}
                    >
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden flex-1 lg:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
