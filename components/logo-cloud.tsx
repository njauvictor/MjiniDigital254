"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";
import Link from "next/link";

export default function LogoCloud() {
  return (
    <section className="bg-background/5 overflow-hidden md:py-8 mt-8 md:mt-16 shadow-md">
      <div className="group relative m-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center md:flex-row">
          {/* Title Section */}
          <div className="md:max-w-44 md:border-r md:pr-6 mt-6 md:mb-6">
            <p className="text-end text-lg text-secondary-foreground/90 dark:text-secondary-foreground/90 md:mb-0 md:text-lg font-semibold">
              Our Website Development Tech Stack
            </p>
          </div>

          {/* Logos Section */}
          <div className="relative py-4 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={80}>
              {logos.map((logo, index) => (
                <Link
                  key={index}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center mb-2 group cursor-pointer"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      className="mx-auto h-12 md:h-16 w-auto object-contain dark:brightness-90 transition-transform duration-500 group-hover:scale-110"
                      src={logo.src}
                      alt={logo.alt}
                      height={60}
                      width={160}
                      //cover fit
                      style={{ objectFit: "contain" }}
                      
                    />
                  </div>
                  <span className="mt-4 text-sm md:text-base font-semibold text-foreground/80 dark:text-secondary-foreground/90 hover:text-primary/70 group-hover:text-primary transition-colors duration-300">
                    {logo.name}
                  </span>
                </Link>
              ))}
            </InfiniteSlider>

            {/* Gradient Fades + Blur */}
            <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ Tech Stack Logos with Links
const logos = [
  {
    src: "/nextjs.jpeg",
    alt: "Next.js Logo",
    name: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    alt: "React Logo",
    name: "React",
    link: "https://react.dev/",
  },
  //convex
  {
    src: "/convex.svg",
    alt: "Convex Logo",
    name: "Convex",
    link: "https://convex.dev/",
  },

  {
    src: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg",
    alt: "Strapi Logo",
    name: "Strapi",
    link: "https://strapi.io/",
  },
  {
    src: "/icons8-supabase.svg",
    alt: "Supabase Logo",
    name: "Supabase",
    link: "https://supabase.com/",
  },
  {
    src: "/prisma-svgrepo-com.svg",
    alt: "Prisma Logo",
    name: "Prisma",
    link: "https://www.prisma.io/",
  },
  //neon
  {
    src: "/neon.jpeg",
    alt: "Neon Logo",
    name: "Neon",
    link: "https://neon.tech/",
  },

  {
    src: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    alt: "PostgreSQL Logo",
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  //openai
  {
    src: "/openai-svgrepo-com.svg",
    alt: "OpenAI Logo",
    name: "OpenAI",
    link: "https://openai.com/",
  },
  {
    src: "/wordpress-svgrepo-com.svg",
    alt: "WordPress Logo",
    name: "WordPress",
    link: "https://wordpress.org/",
  },


    {
    src: "/payload.svg",
    alt: "Payload CMS Logo",
    name: "Payload CMS",
    link: "https://payloadcms.com/",
  },



  {
    src: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
    alt: "WooCommerce Logo",
    name: "WooCommerce",
    link: "https://woocommerce.com/",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    alt: "Shopify Logo",
    name: "Shopify",
    link: "https://www.shopify.com/",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg",
    alt: "Cloudinary Logo",
    name: "Cloudinary",
    link: "https://cloudinary.com/",
  },
  {
    src: "/figma-svgrepo-com.svg",
    alt: "Figma Logo",
    name: "Figma",
    link: "https://www.figma.com/",
  },
  {
    src: "/neon.jpeg",
    alt: "Neon Logo",
    name: "Neon",
    link: "https://neon.tech/",
  },
  {
    src: "/convex.svg",
    alt: "Convex Logo",
    name: "Convex",
    link: "https://convex.dev/",
  },
];
