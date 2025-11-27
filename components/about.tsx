"use client";

import { Globe2, Search, Code, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="mx-auto w-full bg-secondary/20 py-16 md:py-32 px-6 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-3xl font-bold text-foreground/90 md:text-4xl mb-4">
                About - <span className="text-primary">Mjini Digital</span>
              </h2>
             
              <h3 className="mt-2 text-lg font-light text-secondary-foreground/80">
                Premier Website Development Agency in Nairobi
              </h3>
               <hr className="my-2 border-t border-border/80" />
              <p className="mt-2 text-base leading-normal text-foreground/80">
               We are a premier website development agency based in Nairobi, Kenya.
               We specialize in designing and building fast, powerful & SEO-perfect websites and applications tailored for businesses.
               Our team is made up of the best website developers in Nairobi.
               We combine creativity and latest tech to deliver project optimized for performance, visibility, and conversion.
              </p>
            
            </div>

            <ul className="mt-4 divide-y border-y border-border/50 *:flex *:items-center *:gap-2 *:py-2 text-xs">
              <motion.li
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Globe2 className="size-4 text-primary" />
                Custom Website Design & Development
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Search className="size-4 text-primary" />
                SEO Optimization & Performance Analytics
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Code className="size-4 text-primary" />
                Modern Web Applications
              </motion.li>
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link href="/about">
                <Button
                  variant="default"
                  className="text-medium text-white hover:scale-105 transition-transform duration-300"
                >
                  Learn More
                </Button>
              </Link>

              <Link href="/projects">
                <Button
                  variant="ghost"
                  className="text-medium hover:text-primary transition-colors duration-300"
                >
                  Our Projects
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full border border-border/50 rounded-3xl p-3 lg:col-span-3"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative  w-full rounded-2xl bg-background p-px dark:from-zinc-700 overflow-hidden"
            >
              <Image
                src="/dev.webp"
                alt="Team at Mjini Digital working on web design project"
                className="hidden w-full h-full rounded-[15px] object-cover dark:block"
                width={1800}
                height={1280}
              />
              <Image
                src="/about1.webp"
                alt="Mjini Digital workspace and web design mockups"
                className="w-full h-full rounded-[15px] object-cover shadow dark:hidden"
                width={1207}
                height={929}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
