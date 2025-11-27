"use client";

import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutContent1() {
  return (
    <section className="py-16 overflow-hidden bg-background mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center max-w-5xl mb-8 md:mb-16">
              Top <span className="text-primary">10 Reasons</span> Why Mjini is Nairobi&apos;s Premier Website Developer
            </h2>
      <div className="">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid gap-10 md:grid-cols-2 md:gap-16 items-start"
        >
          
          {/* Left Section - Fixed */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="space-y-6 sticky top-24"
          >
             <h3 className="text-xl font-medium text-primary">
              Nairobi&apos;s Gold Standard in Web Development
              
              </h3>
        

            <p className="text-muted-foreground text-base leading-relaxed">

              In Kenya&apos;s competitive digital landscape, choosing the right web development partner can make or break your online success. 
              Here&apos;s why forward-thinking businesses trust Mjini for their digital transformation.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              Research from <a href="https://www.sweor.com/firstimpressions" className="text-primary underline hover:no-underline">Sweor</a> shows that 
              <strong> 94% of first impressions</strong> are design-related, and <a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" className="text-primary underline hover:no-underline">Google studies</a> reveal that 
              pages taking <strong>over 3 seconds to load</strong> see 32% higher bounce rates. Your website&apos;s performance directly impacts your bottom line.
            </p>

            <div className="pt-4">
              <Button
                asChild
                variant="default"
                size="lg"
                className="gap-2 pr-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href="/portfolio">
                  <span>See Our Success Stories</span>
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Section - Scrollable */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
            }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-secondary/30 to-background p-8 rounded-2xl border border-border shadow-sm max-h-[400px] overflow-y-auto custom-scrollbar">
              {/* Scrollable Content */}
              <div className="space-y-6">
                {/* Reason 1 */}
                <div className="group p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 border border-transparent hover:border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Lightning-Fast Performance</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Websites that load in under 2 seconds, reducing bounce rates by up to 32% and improving conversion rates significantly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 2 */}
                <div className="group p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 border border-transparent hover:border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg">🎨</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Professional Design That Builds Instant Trust</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        94% of first impressions are design-related. We create visually stunning interfaces that establish immediate credibility.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 3 */}
                <div className="group p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 border border-transparent hover:border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg">💰</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Cost-Effective Solutions Delivering Maximum ROI</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Competitive pricing without compromising quality, ensuring your investment delivers tangible business results.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 4 */}
                <div className="group p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 border border-transparent hover:border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg">🔧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Fully Customized Solutions</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Tailored to your specific business needs, goals, and target audience for maximum effectiveness.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 5 */}
                <div className="group p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 border border-transparent hover:border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg">🤖</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Modern AI Integration</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Smart chatbots, personalized experiences, and AI-powered features that enhance user engagement and automation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 6 */}
                <div className="group p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 border border-transparent hover:border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg">📊</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Top-Tier SEO Optimization</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Dominating local search results with proven SEO strategies that drive organic traffic and qualified leads.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 7 */}
                <div className="group p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 border border-transparent hover:border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg">🚀</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Latest Technology Stack</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Future-proof solutions built with cutting-edge technologies that scale with your business growth.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 8 */}
                <div className="group p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 border border-transparent hover:border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">AI-Powered Websites & Apps</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Intelligent platforms that learn from user behavior and adapt to provide increasingly relevant experiences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 9 */}
                <div className="group p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 border border-transparent hover:border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg">🛡️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Robust Security Protection</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Enterprise-grade security measures protecting your business data and customer information from threats.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 10 */}
                <div className="group p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 border border-transparent hover:border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg">🌟</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Proven Track Record</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Trusted by Nairobi&apos;s leading businesses with documented success stories and measurable results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </section>
  )
}