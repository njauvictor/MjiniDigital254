"use client";

import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ContentSection4() {
  return (
    <section className="py-16  overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid gap-10 md:grid-cols-2 md:gap-16 items-center md:items-start"
        >
          {/* Left Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="space-y-6 items-start text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Top <span className="text-primary">5 reasons</span> why your business needs a professional website
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              In today’s digital-first world, a professional website is no longer optional —
              it’s the foundation of visibility, trust, and growth for every business.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              According to a <a href="https://www.hubspot.com" className=" text-primary">HubSpot 2023 study</a>, 
              businesses with well-designed websites are <a href="https://www.hubspot.com/marketing-statistics" className="text-primary">70% more likely</a> 
              to attract new customers than those without. Your website works as your 24/7 storefront —
              always open, always selling.
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
            }}
            className="space-y-4 bg-secondary/30 p-6 rounded-2xl border border-border"
          >
            <p className="flex items-center gap-4 text-base font-semibold text-zinc-500">🚀 <span>24/7 visibility – customers can find you anytime, anywhere</span></p>
            <hr className="border-muted/30" />
            <p className="flex items-center gap-4 text-base font-semibold text-zinc-500">🤝 <span>Builds trust & credibility with a professional look</span></p>
            <hr className="border-muted/30" />
            <p className="flex items-center gap-4 text-base font-semibold text-zinc-500">📈 <span>Better local reach through SEO optimization</span></p>
            <hr className="border-muted/30" />
            <p className="flex items-center gap-4 text-base font-semibold text-zinc-500">📱 <span>Converts social media followers into real leads</span></p>
            <hr className="border-muted/30" />
            <p className="flex items-center gap-4 text-base font-semibold text-zinc-500">💡 <span>Cost-effective marketing vs. traditional ads</span></p>
            <hr className="border-muted/30" />

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.4 } },
              }}
              className="py-4 "
            >
              <Button
                asChild
                variant="default"
                size="lg"
                className="gap-1 pr-1.5 rounded-md shadow-sm "
              >
                <Link href="https://www.mjinidigital.co.ke/blog/why-your-business-needs-a-website">
                  <span>Learn More</span>
                  <ChevronRight className="size-3" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
