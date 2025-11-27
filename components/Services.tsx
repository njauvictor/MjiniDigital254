"use client";

import {
  Search,
  Layout,
  Code,
  Bot,
  ShoppingCart,
  Server,
  Wrench,
  BarChart3,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <Search className="size-5" aria-hidden />,
      title: "SEO Services Kenya",
      desc: "Rank #1 on Google with our modern AI powered SEO strategies. We leverage AI to boost traffic, site speed and conversions for long-term growth.",
      link: "/services/seo-services-in-nairobi",
    },
    {
      icon: <Layout className="size-5" aria-hidden />,
      title: "Web Design Services",
      desc: "We deliver professional, stunning & responsive web designs that reflect your brand identity and inspire trust among your customers.",
      link: "/services/web-design-services-in-nairobi",
    },
    {
      icon: <Code className="size-5" aria-hidden />,
      title: "Website Development",
      desc: "We build fast, scalable & SEO-optimized websites & apps built with the latest technologies e.g. Next.js, WordPress, Shopify, Webflow etc.",
      link: "/services/web-development-services-in-nairobi",
    },
    {
      icon: <Bot className="size-5" aria-hidden />,
      title: "AI Integration & Automation",
      desc: "We integrate AI chatbots, automation and AI powered data analysis tools to enhance business operations, customer engagement and efficiency.",
      link: "/services/ai-integration-and-automation",
    },
    {
      icon: <ShoppingCart className="size-5" aria-hidden />,
      title: "Ecommerce Solutions",
      desc: "We build powerful AI powered ecommerce platforms with secure mpesa integration, product management and analytics to drive sales.",
      link: "/services/e-commerce-websites-nairobi",
    },
    {
      icon: <Server className="size-5" aria-hidden />,
      title: "Mobile App Development",
      desc: "We build custom mobile and web applications tailored to your business needs, ensuring seamless performance across all devices.",
      link: "/services/mobile-app-development",
    },
    {
      icon: <Wrench className="size-5" aria-hidden />,
      title: "Website Maintenance",
      desc: "We provide regular updates, backups, and performance optimizations to keep your site secure and reliable and fully SEO-optimized.",
      link: "/services/web-development-services-in-nairobi",
    },
    {
      icon: <BarChart3 className="size-5" aria-hidden />,
      title: "Digital Marketing",
      desc: "We deliver tailored digital marketing solutions combining SEO, design, development and social media marketing to grow your brand.",
      link: "/services/web-development-services-in-nairobi",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="bg-background lg:py-32 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-20">
        {/* ✅ Header Section with left for mobile, center for md+ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-start text-left md:items-center md:text-center max-w-4xl mx-auto mb-16 lg:mb-24"
        >
          <motion.h2
            className="text-2xl md:text-4xl font-bold bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Website <span className="text-primary">Development</span> Services
          </motion.h2>

          <motion.p
            className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We build custom powerful websites and applications tailored to your unique business goals. 
            We don&apos;t just design and develop, we ensure your investment drives measurable growth. 
            From SEO to performance optimization and AI integration, our full-service approach covers every aspect of your online digital strategies.
            This is why we are considered Nairobi&apos;s top web development agency.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <Card className="group relative h-full bg-background backdrop-blur-md border-zinc-200/80 dark:border-zinc-800/80 hover:border-primary/30 dark:hover:border-primary/40 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-zinc-50/50 dark:to-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="relative size-12 p-4 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:from-primary group-hover:to-primary/90"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 pb-6">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>

                <CardFooter className="relative z-10 pt-0">
                  {service.link && (
                    <Link
                      href={service.link}
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-all duration-300"
                    >
                      Learn More
                      <motion.div
                        className="w-0 group-hover/link:w-4 h-px bg-primary transition-all duration-300"
                        whileHover={{ width: 16 }}
                      />
                      <svg
                        className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ CTA Section with left for mobile, center for md+ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 rounded-xl shadow-md bg-background flex flex-col items-center text-center py-20 border-t border-zinc-200/60 dark:border-zinc-800/60 shadow-lg"
        >
          <motion.p
            className="mb-8 text-3xl md:text-3xl font-bold max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Looking for a reliable website developer in Nairobi? Let&apos;s build something amazing together.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 items-center justify-start justify-center px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600" />
              <span className="relative">Contact Us</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-foreground font-medium rounded-xl hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-lg"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
