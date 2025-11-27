import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

// ✅ Define pricing plans
export const PRICING_PLANS = [
  {
    title: "Landing Page",
    price: "Ksh. 15,000",
    description: "Perfect for startups & personal brands",
    features: [
      "1 Page Website Design & Development",
      "Modern Responsive Layout (Mobile-First)",
      "Basic SEO Setup & Google Indexing",
      "Contact Form Integration",
      "Delivery: 3–5 Days",
      "Free Hosting (1 Month)",
      "Ongoing Support (7 Days)",
    ],
    relatedServices: [
      "Web Design Services",
      "Website Development",
      "SEO Services Kenya",
    ],
    highlight: false,
  },
  {
    title: "Static Website",
    price: "Ksh. 25,000",
    description: "Best for small businesses & service brands",
    features: [
      "Up to 5 Custom Pages (Home, About, Services, Contact)",
      "Professional, Responsive Design",
      "Basic SEO Optimization & Speed Enhancements",
      "Photo Gallery or Services Showcase",
      "Contact Form + Google Map Integration",
      "Free Hosting (1 Month)",
      "Delivery: 5–7 Days",
    ],
    relatedServices: [
      "Web Design Services",
      "Website Development",
      "Website Maintenance",
    ],
    highlight: false,
  },
  {
    title: "Dynamic Website",
    price: "Ksh. 40,000",
    description: "Blogs, CMS & Editable Websites",
    features: [
      "Integrated Blog / CMS Dashboard",
      "Medium-Level SEO Optimization",
      "Database Integration (Supabase / MySQL)",
      "Basic AI Chatbot Integration",
      "Modern Responsive UI (Next.js / WordPress)",
      "Admin Panel for Easy Updates",
      "Delivery: 7–10 Days",
    ],
    relatedServices: [
      "Website Development",
      "AI Integration & Automation",
      "SEO Services Kenya",
    ],
    highlight: true,
  },
  {
    title: "Advanced Website",
    price: "Ksh. 80,000",
    description: "For established brands & growing companies",
    features: [
      "Advanced SEO Strategy (Keywords + Analytics)",
      "CMS + Blogs + Database Management",
      "AI Chatbot & Workflow Automation",
      "Analytics Dashboard & CRM Integration",
      "Handles up to 1M Monthly Users",
      "Performance & Security Optimization",
      "Dedicated Support (30 Days)",
    ],
    relatedServices: [
      "AI Integration & Automation",
      "Website Development",
      "Digital Marketing",
    ],
    highlight: false,
  },
  {
    title: "Enterprise Solutions",
    price: "Ksh. 100,000+",
    description: "Custom Web & Mobile App Solutions",
    features: [
      "Custom Web Applications (E-commerce, MIS, Analytics)",
      "Mobile App Development (Android & iOS)",
      "Scalable Cloud Architecture & Deployment",
      "AI-Powered Data Analysis & Automation",
      "Dedicated Support & Maintenance Contract",
      "Enterprise-Level Security & Hosting Setup",
      "Full Branding, Design & Marketing Integration",
    ],
    relatedServices: [
      "Mobile & Web App Development",
      "Ecommerce Solutions",
      "Digital Marketing",
    ],
    highlight: false,
  },
]

// ✅ Pricing component
export default function Pricing() {
  return (
    <section className="bg-secondary/50 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-left md:text-center space-y-6">
          <h1 className="text-4xl font-bold">Affordable <span className="text-primary">Plans </span>for Every Business</h1>
          <p className="text-muted-foreground">
            Choose a plan that fits your needs and budget. Our transparent pricing ensures you get the best value for your investment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-10 grid gap-6 md:mt-20 md:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <Card
              key={index}
              className={`flex p-4 flex-col relative transition-all hover:shadow-lg ${
                plan.highlight ? 'border-primary/50 shadow-lg ring-1 ring-primary/20' : ''
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white shadow-md">
                  Most Popular
                </span>
              )}

              <CardHeader>
                <CardTitle className="mt-8 font-semibold text-2xl text-secondary-foreground/90">{plan.title}</CardTitle>
                <hr />
                <span className="my-2 block text-xl font-bold text-primary">{plan.price} /=</span>
                <CardDescription className="text-sm font-semibold text-secondary-foreground/80">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-2">
                <hr className="border-dashed" />
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <Check className="size-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button asChild variant={plan.highlight ? 'default' : 'outline'} className="w-full">
                  <Link href="/contact">Start Project</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
