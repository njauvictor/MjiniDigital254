import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="mx-auto py-16 md:py-32 px-4 sm:px-6 lg:px-20 bg-background">
            <div className=" max-w-6xl rounded-3xl border px-6 lg:px-20 py-12 md:py-20 lg:py-32 bg-gradient-to-br from-primary-foreground/10 to-background/60 dark:primary text-foreground shadow-lg shadow-zinc-950/10 dark:shadow-black/20">
                <div className="text-center px-4">
                    <h2 className="text-balance text-4xl  font-bold lg:text-5xl leading-tight">Need a professional website for your business?</h2>
                    <p className="mx-auto mt-4 max-w-4xl text-center">Contact Mjini Digital, the Leading website developers in Nairobi, Kenya. We build powerful, fast & SEO-optimized websites and apps that drive results. 

</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4 ">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/projects">
                                <span>Explore Projects</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="/contact">
                                <span>Book Demo</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
