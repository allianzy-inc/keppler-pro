"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Quote } from "lucide-react"

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="bg-secondary/50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.testimonials.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {t.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <Quote className="h-8 w-8 text-muted-foreground/30" />
              <p className="mt-4 text-muted-foreground">{testimonial.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-secondary">
                  <img
                    src={`/professional-headshot.png?height=40&width=40&query=professional headshot ${testimonial.name}`}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
