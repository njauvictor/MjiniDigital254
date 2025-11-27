import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContentSection3() {
    return (
        <section className="py-16 md:py-32 px-6 sm:px-8 md:px-12 lg:px-20 ">
            <div className="mx-auto max-w-7xl space-y-8 ">
                <Image
                    className="rounded-(--radius) grayscale"
                    src="/admin.jpg"
                    alt="team image"
                    height={1831}
                    width={2747}
                    loading="lazy"
                />

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-bold">AI Powered Business <span className="text-primary">Website & Applications</span> in Nairobi, Kenya</h2>
                    <div className="space-y-6">
                        <p>At Mjini Digital, we specialize in custom website design that reflects your brand identity and helps your business stand out. Our expert designers use modern UI/UX principles to craft websites that are visually stunning, fast, and conversion-focused.</p>

                        <p className="">Every website we design is built with SEO optimizationin mind, ensuring your business ranks higher on Google. We combine creativity, functionality, and strategy to deliver measurable results.</p>
                        <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Learn More</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
