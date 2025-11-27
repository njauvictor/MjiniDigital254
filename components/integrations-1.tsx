"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TechStackSection() {
  return (
    <section className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="text-left md:text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">
            Our Website Development & AI-Powered Tech Stack
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            We build high-performance, scalable, and secure applications using
            the most trusted and innovative technologies in the industry.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TechCard {...tech} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TechCard = ({
  name,
  description,
  logo,
  link,
}: {
  name: string;
  description: string;
  logo: string;
  link: string;
}) => {
  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card ">
      <div className="flex flex-col md:items-center md:text-center">
        <div className="h-12 w-12 relative mb-4">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain rounded"
            objectFit="cover"
          />
        </div>

        <h3 className="text-base font-medium">{name}</h3>
        <p className="text-muted-foreground text-sm mt-2 mb-6 line-clamp-3">
          {description}
        </p>

        <Button
          asChild
          variant="secondary"
          size="sm"
          className="gap-1 pr-2 shadow-none"
        >
          <Link href={link} target="_blank" rel="noopener noreferrer">
            Learn More
            <ChevronRight className="ml-0 size-3.5 opacity-50" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};

 const techStack = [
    // Frontend Frameworks & Libraries
    {
        name: "Next.js",
        description: "Advanced React framework with built-in SEO optimization, hybrid SSR/SSG, and lightning-fast performance. Ideal for production-grade applications with optimal core web vitals.",
        logo: "/nextjs.jpeg",
        link: "https://nextjs.org/",
        category: "Frontend"
    },
    {
        name: "React",
        description: "Powerful UI library for building dynamic and interactive interfaces with reusable components. Extensive ecosystem with hooks for state management and side effects.",
        logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        link: "https://react.dev/",
        category: "Frontend"
    },
    {
        name: "TypeScript",
        description: "Strongly typed programming language that builds on JavaScript, providing better tooling and catching errors at compile time for more robust applications.",
        logo: "/typescript.svg",
        link: "https://www.typescriptlang.org/",
        category: "Frontend"
    },
    {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapidly building custom designs without ever leaving your HTML.",
        logo: "/tailwind.svg",
        link: "https://tailwindcss.com/",
        category: "Frontend"
    },

    // Backend & CMS
    {
        name: "Payload CMS",
        description: "A modern headless CMS built for developers and content teams, offering rich customization and scalability with full TypeScript support.",
        logo: "/payload.svg",
        link: "https://payloadcms.com/",
        category: "Backend & CMS"
    },
    {
        name: "WordPress",
        description: "The world's most popular CMS, powering over 40% of all websites with extensive themes and plugins for complete content management.",
        logo: "/wordpress-svgrepo-com.svg",
        link: "https://wordpress.org/",
        category: "Backend & CMS"
    },
    {
        name: "Strapi",
        description: "Open-source headless CMS enabling flexible content structures and API-driven content delivery.",
        logo: "/strapi.svg",
        link: "https://strapi.io/",
        category: "Backend & CMS"
    },
    {
        name: "Node.js",
        description: "JavaScript runtime built on Chrome's V8 engine for building scalable server-side applications.",
        logo: "/nodejs.png",
        link: "https://nodejs.org/",
        category: "Backend & CMS"
    },

    // Databases & ORMs
    {
        name: "Supabase",
        description: "An open-source Firebase alternative offering real-time database, authentication, and file storage with Postgres foundation.",
        logo: "/icons8-supabase.svg",
        link: "https://supabase.com/",
        category: "Database & ORM"
    },
    {
        name: "Prisma ORM",
        description: "Next-generation ORM for Node.js and TypeScript ensuring data accuracy, performance, and scalability with intuitive data modeling.",
        logo: "/prisma-svgrepo-com.svg",
        link: "https://www.prisma.io/",
        category: "Database & ORM"
    },
    {
        name: "PostgreSQL",
        description: "Reliable, open-source relational database known for strong ACID compliance and enterprise-grade stability with JSON support.",
        logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        link: "https://www.postgresql.org/",
        category: "Database & ORM"
    },
    {
        name: "MongoDB",
        description: "Document-based NoSQL database program for modern applications requiring flexible schema design.",
        logo: "/MongoDB.svg",
        link: "https://www.mongodb.com/",
        category: "Database & ORM"
    },
    {
        name: "Neon",
        description: "Serverless Postgres with instant branching, autoscaling, and high performance for modern web apps with separation of storage and compute.",
        logo: "/neon.jpeg",
        link: "https://neon.tech/",
        category: "Database & ORM"
    },
    {
        name: "Convex",
        description: "A backend-as-a-service platform that simplifies data management and real-time functionality for web apps with built-in reactivity.",
        logo: "/convex.svg",
        link: "https://convex.dev/",
        category: "Database & ORM"
    },

    // E-commerce
    {
        name: "Shopify",
        description: "Leading e-commerce platform for high-converting online stores with integrated analytics, payment solutions, and inventory management.",
        logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
        link: "https://www.shopify.com/",
        category: "E-commerce"
    },
    {
        name: "WooCommerce",
        description: "Flexible WordPress plugin transforming any site into a fully functional e-commerce store with extensive payment gateway support.",
        logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
        link: "https://woocommerce.com/",
        category: "E-commerce"
    },

    // Media & Assets
    {
        name: "Cloudinary",
        description: "Optimized media delivery and transformation platform for fast, responsive images and videos with AI-powered optimization.",
        logo: "https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg",
        link: "https://cloudinary.com/",
        category: "Media & Assets"
    },
    {
        name: "Vercel",
        description: "Cloud platform for static sites and serverless functions with global CDN, automatic deployments, and excellent developer experience.",
        logo: "/vercel.png",
        link: "https://vercel.com/",
        category: "Deployment & Infrastructure"
    },
    {
        name: "Netlify",
        description: "All-in-one platform for automating modern web projects with continuous deployment, serverless functions, and edge computing.",
        logo: "/netlify.svg",
        link: "https://www.netlify.com/",
        category: "Deployment & Infrastructure"
    },

    // Design & Tools
    {
        name: "Figma",
        description: "Collaborative UI/UX design tool ensuring seamless communication between design and development teams with prototyping capabilities.",
        logo: "/figma-svgrepo-com.svg",
        link: "https://www.figma.com/",
        category: "Design & Tools"
    },


    // AI & Machine Learning
    {
        name: "OpenAI",
        description: "AI powerhouse providing tools for text generation, chatbots, image enhancement, and intelligent automation with GPT models.",
        logo: "/openai-svgrepo-com.svg",
        link: "https://openai.com/",
        category: "AI & ML"
    },
  

    // // Authentication & Security
    // {
    //     name: "Auth.js",
    //     description: "Complete authentication solution for web applications with support for multiple providers and secure session management.",
    //     logo: "/authjs-svgrepo-com.svg",
    //     link: "https://authjs.dev/",
    //     category: "Authentication & Security"
    // },
    // {
    //     name: "Clerk",
    //     description: "User management platform providing seamless authentication, user profiles, and organization management.",
    //     logo: "/clerk-svgrepo-com.svg",
    //     link: "https://clerk.com/",
    //     category: "Authentication & Security"
    // },

    // // Testing
    // {
    //     name: "Jest",
    //     description: "Delightful JavaScript testing framework with focus on simplicity and support for large web applications.",
    //     logo: "/jest-svgrepo-com.svg",
    //     link: "https://jestjs.io/",
    //     category: "Testing"
    // },
    // {
    //     name: "Cypress",
    //     description: "End-to-end testing framework for web applications with real-time reloading and time travel debugging.",
    //     logo: "/cypress-svgrepo-com.svg",
    //     link: "https://www.cypress.io/",
    //     category: "Testing"
    // }
];
