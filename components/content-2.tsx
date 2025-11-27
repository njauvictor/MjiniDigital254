import { Cpu, Zap } from "lucide-react";
import Image from "next/image";

export default function ContentSection2() {
  return (
    <section className="bg:background  py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-6 px-6 md:px-12 lg:px-20 md:space-y-12">
        <h2 className="relative z-10 max-w-5xl text-4xl md:text-5xl font-bold leading-tight mb-8 md:mb-12">
          Our Mission, Vision & Values: Powering Digital Growth Across Nairobi & Kenya
        </h2>

        <div className="relative">
          {/* LEFT TEXT */}
          <div className="relative z-10 space-y-6 md:w-1/2">
            <p className="text-muted-foreground">
              At <span className="font-semibold">Mjini Digital</span>, our mission
              is to help businesses grow using modern, intelligent, and
              AI-powered digital solutions. According to Google Africa,{" "}
              <span className="font-semibold">over 70% of customer interactions
              now happen online</span>, and companies that invest in powerful
              digital platforms record up to{" "}
              <span className="font-semibold">40% higher revenue growth</span>.
            </p>

            <p className=" text-muted-foreground">
              Our vision is to become{" "}
              <span className="font-semibold">
                East Africa’s leading digital innovation company
              </span>
              — building tools that help brands compete globally. Research from
              IFC and Google shows that{" "}
              <span className="font-semibold">
                Africa’s digital economy will reach $180 billion by 2025
              </span>
              . We are committed to being part of that transformation through
              world-class web development, mobile apps, SEO, UI/UX, and
              automation.
            </p>

         
          </div>

          {/* IMAGE */}
          <div className="lg:pl-4 md:mask-l-from-35% md:mask-l-to-55% mt-12 h-cover md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
            <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
              <Image
                src="/web2.jpg"
                className="hidden rounded-[12px] dark:block"
                alt="AI-powered web development illustration in dark mode"
                width={1207}
                height={829}
              />
              <Image
                src="/web2.jpg"
                className="rounded-[12px] shadow dark:hidden"
                alt="Modern web design illustration in light mode"
                width={1207}
                height={829}
              />
            </div>
          </div>
        </div>
           {/* VALUES GRID */}
            <div className="grid grid-cols-2 gap-3 pt-8 md:pt-16 lg:pt-24  sm:gap-4">
              {/* Innovation */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className=" font-semibold">Innovation</h3>
                </div>
                <p className="text-muted-foreground ">
                  We build the future using AI, automation, and modern
                  technologies—helping businesses stay ahead of their market.
                </p>
              </div>

              {/* Integrity */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className=" font-semibold">Integrity</h3>
                </div>
                <p className="text-muted-foreground ">
                  We believe in honest communication, clear timelines, and
                  delivering exactly what we promise.
                </p>
              </div>

              {/* Client-Centered */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className=" font-semibold">Client-Centric</h3>
                </div>
                <p className="text-muted-foreground ">
                  Every solution we create is tailored to your business goals,
                  which is why over 80% of clients return or refer others.
                </p>
              </div>

              {/* Learning */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className=" font-semibold">Continuous Learning</h3>
                </div>
                <p className="text-muted-foreground ">
                  We stay updated with the latest design systems, AI tools, and
                  security standards to keep your business future-ready.
                </p>
              </div>
            </div>
      </div>
    </section>
  );
}
