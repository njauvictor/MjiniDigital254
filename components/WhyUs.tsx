'use client'

import {
  Rocket,
  Zap,
  TrendingUp,
  Code2,
  Settings2,
  MapPin,
} from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'SEO-First Approach',
    description:
      'We build every website with search engine optimization as a foundation, ensuring your business ranks higher and attracts targeted traffic.',
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    description:
      'Our websites are fast and lightweight, optimized to load quickly across all devices — essential for user experience and Google rankings.',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimized',
    description:
      'Our designs are not only beautiful, but built to convert — with persuasive content, clear CTAs, and seamless user journeys.',
  },
  {
    icon: Code2,
    title: 'Latest Tech Stack',
    description:
      'We use modern frameworks and technologies (Next.js, PayloadCMS, etc.) to ensure your site is fast, secure, scalable, and future-ready.',
  },
  {
    icon: Settings2,
    title: 'Custom Solutions',
    description:
      'From startups to SMEs, we build highly curated web design and development solutions that match your business goals & operational needs.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description:
      'Based in Nairobi, we understand Kenya’s market and local consumer behavior — giving your business a homegrown competitive edge.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-32  backdrop-blur-lg transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-16 lg:px-20">
        {/* Section Header */}
        <div className="md:text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 ">
              Why Mjini is the Top Web Developer in Nairobi
          </h2>
          <h3 className="text-xl text-primary mb-4 ">
            Learn what makes us different and why we’re the best in the website development business
          </h3>

          <p className="max-w-4xl mx-auto ">
            We design and develop fast, high-performance, SEO-optimized websites & apps tailored for
            business growth. Our commitment to delivering the best websites by
            leveraging the latest and most effective tech like{' '}
            <a
              href="https://nextjs.org/blog/next-15"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js 15
            </a>{' '}
            and{' '}
            <a
              href="https://payloadcms.com/"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              PayloadCMS
            </a>{' '}
           is what sets us apart from the competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl 
              bg-background border border-border/50 
              shadow-md hover:shadow-xl 
              transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl transition-opacity"></div>

              <div className="flex gap-2 items-start relative z-10">
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full 
                bg-secondary/30 text-primary border border-secondary/40 shadow-inner">
                  <feature.icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold mt-2 ">
                    {feature.title}
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}