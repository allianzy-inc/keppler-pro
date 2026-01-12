"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Zap, Palette, Clock, Headphones } from "lucide-react"

export function ValueProps() {
  const { t } = useLanguage()

  const props = [
    {
      icon: Zap,
      title: t.valueProps.performance.title,
      description: t.valueProps.performance.description,
    },
    {
      icon: Palette,
      title: t.valueProps.design.title,
      description: t.valueProps.design.description,
    },
    {
      icon: Clock,
      title: t.valueProps.delivery.title,
      description: t.valueProps.delivery.description,
    },
    {
      icon: Headphones,
      title: t.valueProps.support.title,
      description: t.valueProps.support.description,
    },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.valueProps.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t.valueProps.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {props.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <prop.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{prop.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
