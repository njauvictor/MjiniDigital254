import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <main className="overflow-hidden pt-12 md:pt-0 min-h-[80vh] md:min-h-[120vh]">
      {/* Background gradients */}
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <section>
        <div className="relative pt-24 md:pt-36">
         

          {/* Background overlay */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_70%_100%,transparent_20%,var(--color-background)_75%)]"
          />

          {/* MAIN CONTENT */}
          <div className="mx-auto max-w-7xl px-6 flex flex-col items-start text-left md:items-center md:text-center mt-12">
            {/* Badge */}
            <Link
              href="#link"
              className="bg-secondary bg-muted group flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
            >
              <span className="text-primary text-xs md:text-sm">
                Nairobi&apos;s Gold Standard in Web Development
              </span>
              <span className="block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" />
              <div className="bg-background size-6 overflow-hidden rounded-full">
                <div className="flex w-12 -translate-x-1/2">
                  <span className="flex size-6">
                    <ArrowRight className="m-auto size-3" />
                  </span>
                  <span className="flex size-6">
                    <ArrowRight className="m-auto size-3" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Heading */}
            <h1 className="my-8 md:my-8 max-w-5xl text-2xl font-bold md:text-5xl leading-normal md:leading-tight">
              AI Powered<span className="text-primary"> Websites & Applications</span> from the Top Website Developers in Nairobi
            </h1>

            {/* Subtitle */}
            <p className="md:mt-0 max-w-4xl text-lg md:text-base leading-tight text-muted-foreground">
              We leverage the latest tech to deliver fast, powerful &
              SEO-optimized websites & applications. Over 80% of websites we
              build rank on Google’s first page and generate consistent organic
              traffic and leads for our clients.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex items-start md:items-center justify-start md:justify-center gap-2 flex-row">
              <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                <Button asChild size="lg" className="rounded-xl px-5">
                  <Link href="/contact">
                    <span className="text-nowrap">Get a Quote</span>
                  </Link>
                </Button>
              </div>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-10.5 rounded-xl px-5"
              >
                <Link href="/projects">
                  <span className="text-nowrap">Our Projects</span>
                </Link>
              </Button>
            </div>
          </div>

  
        </div>
      </section>
    </main>
  );
}
