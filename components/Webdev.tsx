import { Zap, Smartphone, Code, Database, Shield, Rocket } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'

export default function Development() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-background z-0 " />

     
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight ">
                Leading Website Developers in{' '}
                <span className="text-primary ">Nairobi</span>
              </h1>
              <div className="w-20 h-1 bg-primary" />
            </div>

            {/* Description */}
            <div className="space-y-2 text-base text-gray-700 dark:text-gray-300">
              <p>
                As the <strong><a href='https://www.mjinidigital.co.ke/' >best web developers in Nairobi</a></strong>, we build lightning-fast,
                scalable websites and web applications using cutting-edge technologies like{' '}
                <strong><a href='https://nextjs.org/' >Next.js 14 </a></strong>, <strong><a href='https://payloadcms.com/' >Payload CMS </a></strong>, and{' '}
                <strong>TypeScript</strong>. Our Nairobi-based team delivers enterprise-grade
                solutions that load in under 2 seconds and rank #1 on Google.
              </p>
              <p>
                We specialize in creating <strong>SEO-optimized websites</strong> that convert 3x
                more visitors into customers. With 100+ successful projects delivered across Kenya
                and internationally, we are trusted by businesses seeking the{' '}
                <strong><a href='https://www.mjinidigital.co.ke/' >top website development company in Nairobi </a></strong>.
              </p>
            </div>

            {/* Technology Stack */}
            {/* <div className="space-y-2">
                            <h3 className="font-semibold text-[#181152] dark:text-white text-xs">Our Technology Stack:</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-[#181152]/10 text-[#181152] dark:bg-white/10 dark:text-white rounded-full text-sm font-medium">Next.js 14</span>
                                <span className="px-3 py-1 bg-[#181152]/10 text-[#181152] dark:bg-white/10 dark:text-white rounded-full text-sm font-medium">Payload CMS</span>
                                <span className="px-3 py-1 bg-[#181152]/10 text-[#181152] dark:bg-white/10 dark:text-white rounded-full text-sm font-medium">TypeScript</span>
                                <span className="px-3 py-1 bg-[#181152]/10 text-[#181152] dark:bg-white/10 dark:text-white rounded-full text-sm font-medium">Tailwind CSS</span>
                                <span className="px-3 py-1 bg-[#181152]/10 text-[#181152] dark:bg-white/10 dark:text-white rounded-full text-sm font-medium">MongoDB</span>
                                <span className="px-3 py-1 bg-[#181152]/10 text-[#181152] dark:bg-white/10 dark:text-white rounded-full text-sm font-medium">Vercel</span>
                            </div>
                        </div> */}

            {/* Key Benefits */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3 ">
                <Rocket className="size-5 text-[#ED6605] dark:text-orange-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  90% faster loading than competitors
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="size-5 text-[#ED6605] dark:text-orange-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Enterprise-grade security & scalability
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="size-5 text-[#ED6605] dark:text-orange-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Clean, maintainable code architecture
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
             <Button >
                Get in Touch
                  </Button> 
             
                <Button 
                variant="outline"
                className='text-primary'
                
                >
               Our Portfolio
            </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ED6605]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#181152]/10 rounded-full blur-xl dark:bg-orange-400/20" />

              <div className="border-8 border-white rounded-2xl overflow-hidden dark:border-gray-800">
                <Image
                  src="/about1.webp"
                  className="w-full h-auto transition-transform duration-700 hover:scale-105 "
                  alt="Professional website developers in Nairobi Kenya - Mjini Digital builds fast, scalable web applications using Next.js and Payload CMS"
                  width={600}
                  height={400}
                  priority
                />
              </div>
            </div>

            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-2xl border dark:bg-gray-800 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#181152] dark:text-white">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Delivered</div>
              </div>
            </div>

            {/* Technology Badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-2xl border dark:bg-gray-800 dark:border-gray-700">
              <div className="text-center">
                <div className="flex items-center gap-2">
                  <Code className="size-4 text-[#ED6605]" />
                  <span className="text-sm font-semibold text-[#181152] dark:text-white">
                    Next.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-16 mt-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-sm hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-gray-700/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-[#ED6605]/10 rounded-lg">
              <Zap className="size-5 text-[#ED6605] dark:text-orange-400" />
            </div>
            <h3 className="font-semibold text-[#181152] dark:text-white">Lightning Fast</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Websites loading under 2 seconds with Next.js 14 optimization. 90+ Google PageSpeed
            scores guaranteed for better SEO rankings.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-sm hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800/80 dark:border-gray-700/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-[#ED6605]/10 rounded-lg">
              <Database className="size-5 text-[#ED6605] dark:text-orange-400" />
            </div>
            <h3 className="font-semibold text-[#181152] dark:text-white">Scalable Architecture</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Built with Payload CMS and MongoDB to handle millions of visitors. Perfect for growing
            businesses in Kenya and beyond.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-sm hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800/80 dark:border-gray-700/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-[#ED6605]/10 rounded-lg">
              <Shield className="size-5 text-[#ED6605] dark:text-orange-400" />
            </div>
            <h3 className="font-semibold text-[#181152] dark:text-white">SEO Optimized</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Server-side rendering, meta tags optimization, and schema markup. Get to page #1 on
            Google with our proven SEO strategies.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-sm hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800/80 dark:border-gray-700/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-[#ED6605]/10 rounded-lg">
              <Smartphone className="size-5 text-[#ED6605] dark:text-orange-400" />
            </div>
            <h3 className="font-semibold text-[#181152] dark:text-white">Mobile First</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            100% mobile-responsive designs. Perfect experience on all devices, essential for
            Kenya&apos;s 70% mobile internet usage.
          </p>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-16 mt-12">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Trusted by businesses across Kenya as the{' '}
            <strong><a href="https://www.mjinidigital.co.ke/" className="text-primary">best website developers in Nairobi</a></strong>. We deliver{' '}
            <strong>
                <a href="https://www.mjinidigital.co.ke/" className="text-primary">top-quality web development services</a></strong> with 24/7 support and 99.9% uptime
            guarantee.
          </p>
        </div>
      </div>
    </section>
  )
}