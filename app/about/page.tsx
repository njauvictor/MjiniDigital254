import AboutContent1 from "@/components/aboutcontent1";
import CardList from "@/components/CardList";
import ContentSection2 from "@/components/content-2";
import AboutHero from "@/components/hero-about";
import LogoCloud from "@/components/logo-cloud";
import ServicesCardList from "@/components/ServicesCardList";
import StatsSection2 from "@/components/stats-2";
import Development from "@/components/Webdev";
import { wisp } from "@/lib/wisp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Mjini Digital | Nairobi's Top Web Developers",
  description:
    "Nairobi’s leading web developers specializing in modern, powerful, SEO-optimized websites and AI-powered applications that drive business growth. Proudly ranked as the #1 web development agency in Nairobi, Kenya.",

  // Canonical URL
  alternates: {
    canonical: "https://mjinidigital.co.ke/about",
  },

  // OpenGraph SEO
  openGraph: {
    title: "About Mjini Digital | Nairobi's Top Web Developers",
    description:
      "Learn about Mjini Digital, Nairobi’s leading web development agency delivering fast, scalable, AI-powered websites and apps that grow your business.",
    url: "https://mjinidigital.co.ke/about",
    siteName: "Mjini Digital",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "https://mjinidigital.co.ke/og/og-about.jpg", // replace with your image
        width: 1200,
        height: 630,
        alt: "About Mjini Digital – Nairobi’s Leading Web Developers",
      },
    ],
  },

  // Twitter Card SEO
  twitter: {
    card: "summary_large_image",
    title: "About Mjini Digital | Nairobi's Top Web Developers",
    description:
      "Discover why Mjini Digital is Nairobi’s #1 agency for powerful, modern, SEO-friendly websites and AI-driven applications.",
    images: ["https://mjinidigital.co.ke/og/og-about.jpg"],
    creator: "@mjinidigital", // optional
  },

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default async function AboutPage() {
    const result = await wisp.getPosts({ limit: 6, tags: ["services"] });
  return (
    <>
      <AboutHero />      
      <LogoCloud />     
      
      <StatsSection2 />
      <AboutContent1 />      
      <ContentSection2 />
      <Development />
      <div className="justify-center items-center mb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-600 dark:text-gray-200 mt-12">Our Web Development Services</h1>
        <p className="px-8 max-w-5xl mx-auto text-center mt-8 text-gray-500 dark:text-gray-300">
          We offer a wide range of web development services to help businesses of all sizes succeed in the digital world. 
          From custom web applications to e-commerce solutions, we have the expertise and experience to meet your unique needs. 
          Contact us today to learn more about how we can help you achieve your web development goals.



        </p>
      </div>
      <CardList posts={result.posts} basePath="/services" /> 

      
          </>
  );
}
