'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import DynamicIcon, { type IconName } from '@/components/DynamicIcon'
import Link from 'next/link'

type FAQItem = {
  id: string
  icon: IconName
  question: string
  answer: string
}

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: 'item-1',
      icon: 'credit-card',
      question: 'How much does website development in Nairobi cost?',
      answer:
        'The cost depends on the type of website you need. At Mjini Digital, we offer flexible packages starting from basic business websites to advanced e-commerce platforms. Every project is customized to fit your budget and goals. Contact us for a free quote.',
    },
    {
      id: 'item-2',
      icon: 'clock',
      question: 'How long does it take to build a website?',
      answer:
        'Most small business websites take 2–4 weeks to complete, depending on the features and content required. Complex websites like e-commerce stores or custom systems may take 6–8 weeks. We always work with you to meet deadlines without compromising quality.',
    },
    {
      id: 'item-3',
      icon: 'search',
      question: 'Do you design SEO-friendly websites?',
      answer:
        'Yes, all our websites are built with SEO best practices in mind. We ensure fast loading speeds, proper meta tags, mobile responsiveness, and clean code structures to help your site rank higher on Google.',
    },
    {
      id: 'item-4',
      icon: 'smartphone',
      question: 'Will my website work on mobile phones?',
      answer:
        'Absolutely. Every website we create at Mjini Digital is fully responsive, meaning it looks and works perfectly across desktops, tablets, and smartphones to ensure a smooth user experience for your customers.',
    },
    {
      id: 'item-5',
      icon: 'wrench',
      question: 'Do you provide website maintenance and support?',
      answer:
        'Yes, we offer ongoing website maintenance, security updates, and technical support to keep your website running smoothly. Our support plans are flexible and designed to match your business needs.',
    },
    {
      id: 'item-6',
      icon: 'shopping-cart',
      question: 'Can you build e-commerce websites with MPESA integration?',
      answer:
        'Definitely! We specialize in e-commerce development with secure payment gateways. We integrate MPESA, Visa, Mastercard, and PayPal so your customers can shop and pay online with ease.',
    },
    {
      id: 'item-7',
      icon: 'palette',
      question: 'Do you create custom website designs?',
      answer:
        'Yes. We don’t just use templates — we design unique websites tailored to your brand identity, industry, and target audience. Our goal is to give your business a professional online presence that stands out in Nairobi’s competitive market.',
    },
    {
      id: 'item-8',
      icon: 'cloud',
      question: 'Do you provide website hosting and domain registration?',
      answer:
        'Yes, Mjini Digital offers reliable hosting and domain registration services. We provide free hosting for the first year with all our website development packages to ensure your business is online quickly and hassle-free.',
    },
    {
      id: 'item-9',
      icon: 'refresh-ccw',
      question: 'Can you redesign my existing website?',
      answer:
        'Of course! If your current website looks outdated, is slow, or isn’t mobile-friendly, we can redesign it to match modern standards. We focus on improving design, performance, and SEO to help your business grow.',
    },
    {
      id: 'item-10',
      icon: 'headphones',
      question: 'Do you offer training after the website is delivered?',
      answer:
        'Yes, we provide training sessions to help you or your team manage and update your website easily. You’ll learn how to add new content, update products, and monitor performance with confidence.',
    },
  ]

  return (
    <section className="bg-gradient-to-br from-muted/30 to-background/70 dark:from-background/80 dark:to-muted/20 py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-2/5">
            <div className="sticky top-24">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <DynamicIcon name="help-circle" className="mr-2 size-4" />
                Support Center
              </div>
              <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Find answers to common questions about our services, shipping, payments, and more.
              </p>
              <div className="mt-8 rounded-xl bg-primary/5 p-6 border border-border/50">
                <h3 className="font-semibold text-lg flex items-center">
                  <DynamicIcon name="star" className="mr-2 size-5 text-amber-500" />
                  Popular Questions
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <DynamicIcon name="chevron-right" className="mr-2 size-4 text-primary" />
                    <Link href="#item-2" className="hover:underline">
                      Payment methods
                    </Link>
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <DynamicIcon name="chevron-right" className="mr-2 size-4 text-primary" />
                    <Link href="#item-3" className="hover:underline">
                      Shipping options
                    </Link>
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <DynamicIcon name="chevron-right" className="mr-2 size-4 text-primary" />
                    <Link href="#item-5" className="hover:underline">
                      Order tracking
                    </Link>
                  </li>
                </ul>
              </div>
              <p className="text-muted-foreground mt-8">
                Cant find what youre looking for? Contact our{' '}
                <Link
                  href="#"
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  customer support team
                  <DynamicIcon name="arrow-up-right" className="ml-1 size-4" />
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-3/5">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <AccordionTrigger className="cursor-pointer py-6 px-6 hover:no-underline hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <DynamicIcon name={item.icon} className="size-4" />
                      </div>
                      <span className="text-base font-medium">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 px-6">
                    <div className="pl-16">
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}