'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SendHorizonal } from 'lucide-react'

// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut', // Using built-in easing function
    },
  },
}

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut', // Using built-in easing function
    },
  },
}

export default function AboutHero() {
  return (
    <>
      <section className="lg:pt-32 flex md:min-h-screen items-center justify-center overflow-x-hidden px-8 md:px-12 lg:px-20">
        <div className="mt-24 md:mt-12 gap-8  mx-auto  flex w-full max-w-7xl flex-col md:items-center md:text-center lg:flex-row lg:items-center lg:text-left">
          {/* Text content */}
          <motion.div
            className="z-10 max-w-xl lg:w-1/2 pb-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            {/* Heading */}
            <motion.h1
              className="mt-24 md:mt-0 text-balance text-4xl md:text-5xl font-bold leading-tight"
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              About: Nairobi&apos;s Top<span className="text-primary"> Website Developers</span>
              
            </motion.h1>

            <motion.hr
              className="mt-4 border-border/50"
              variants={fadeUp}
              transition={{ delay: 0.6 }}
            />

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap justify-start gap-4 text-xs text-muted-foreground lg:justify-start"
              variants={fadeUp}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                <span>Fast & Powerful</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>SEO Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                <span>Mobile First</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                <span>Converts Visitors into Customers</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="mt-6 text-base "
              variants={fadeUp}
              transition={{ delay: 1.0 }}
            >
             Mjini is a Nairobi-based tech company specializing in full-stack web development, web design, mobile app development, and digital marketing. We build high-quality websites and apps for businesses of all sizes. 
             Our consistency in delivering innovative solutions to our clients is what makes us the leading web developers in Nairobi, Kenya.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="rounded-md mt-8 flex flex-row md:items-center justify-start gap-4 sm:flex-row lg:justify-start"
              variants={fadeUp}
              transition={{ delay: 1.2 }}
            >
              <Button className="py-5" asChild variant="default">
                <Link href="/contact">
                  <span className=" text-sm px-4 py-5">Get Started</span>
                  <SendHorizonal className="relative mx-auto size-5 " strokeWidth={2} />
                </Link>
              </Button>

              <Button className="py-5" asChild variant="outline">
                <Link href="/projects">
                  <span className=" text-sm px-4 py-5">Our Projects</span>
                  <SendHorizonal className="relative mx-auto size-5 " strokeWidth={2} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            className="relative w-full rounded-lg overflow-hidden lg:w-1/2 p-4"
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
          >
            <Image
              src="/admin.jpg"
              alt="Website Developers and Web Designers from Mjini Digital in Nairobi Kenya"
              width={1000}
              height={900}
              className="h-auto w-full object-contain dark:mix-blend-lighten rounded-xl"
              priority
            />
          </motion.div>
        </div>
      </section>

   
    </>
  )
}