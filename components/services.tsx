"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Building2, Rocket, ShoppingCart, Wrench, ArrowRight } from "lucide-react"

const WHATSAPP_NUMBER = "<WHATSAPP_NUMBER>"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Building2,
      title: t.services.corporate.title,
      description: t.services.corporate.description,
    },
    {
      icon: Rocket,
      title: t.services.landing.title,
      description: t.services.landing.description,
    },
    {
      icon: ShoppingCart,
      title: t.services.ecommerce.title,
      description: t.services.ecommerce.description,
    },
    {
      icon: Wrench,
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
    },
  ]

  return (
    <section id="services" className="scroll-mt-20 bg-secondary/50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t.services.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-foreground/20 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-foreground">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-muted-foreground">{service.description}</p>
              <Button asChild variant="link" className="mt-4 p-0">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                  {t.services.getQuote}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
