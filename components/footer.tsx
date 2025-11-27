import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ChevronsUpDown, Facebook, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    group: "Company",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Portfolio", href: "/portfolio" },
      { title: "Testimonials", href: "/testimonials" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    group: "Services",
    items: [
      { title: "Web Design", href: "/services/web-design" },
      { title: "Web Development", href: "/services/web-development" },
      { title: "SEO & Ranking", href: "/services/seo" },
      { title: "Software Solutions", href: "/services/software" },
      { title: "E-Commerce Websites", href: "/services/ecommerce" },
      { title: "Branding & Graphics", href: "/services/branding" },
    ],
  },
  {
    group: "Resources",
    items: [
      { title: "Blog", href: "/blog" },
      { title: "Free Tools", href: "/tools" },
      { title: "FAQs", href: "/faqs" },
      { title: "Pricing", href: "/pricing" },
    ],
  },
  {
    group: "Legal",
    items: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer className="border-b bg-background pt-20 ">
      <div className="mb-8 border-b md:mb-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-6 px-6 md:px-12 lg:px-20 pb-6">
          <Link href="/" aria-label="home" className="flex items-start space-x-2">
            <Image
              src="/mjini-logo.webp"
              width={160}
              height={40}
              alt="mjini-digital-logo"
            />
          </Link>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="https://x.com/mjinidigital"
              target="_blank"
              aria-label="X/Twitter"
              className="text-primary hover:text-primary/80 block"
            >
             <X />
            </a>

            <a
              href="https://linkedin.com/company/mjini-digital"
              target="_blank"
              aria-label="LinkedIn"
              className="text-primary hover:text-primary/80 block"
            >
             <Linkedin />
            </a>

            <a
              href="https://facebook.com/mjinidigital"
              target="_blank"
              aria-label="Facebook"
              className="text-primary hover:text-primary/80 block"
            >
              <Facebook />
            </a>

            <a
              href="https://instagram.com/mjinidigital"
              target="_blank"
              aria-label="Instagram"
              className="text-primary hover:text-primary/80 block"
            >
              <Instagram />
            </a>

          
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-5 lg:grid-cols-4">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-5 lg:col-span-3">
            {links.map((linkGroup, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium">{linkGroup.group}</span>
                {linkGroup.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="hover:text-primary block"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <form className="border-b pb-8 text-sm md:col-span-2 lg:col-span-1 md:border-none">
            <Label htmlFor="mail" className="block font-medium">
              Newsletter
            </Label>
            <div className="flex gap-2 mt-4">
              <Input
                type="email"
                id="mail"
                placeholder="Your email"
                className="h-8 text-sm"
              />
              <Button size="sm">Submit</Button>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Get updates on new services & offers.
            </p>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <small className="text-muted-foreground text-sm text-center block">
            © {new Date().getFullYear()} Mjini Digital. All Rights Reserved.
          </small>

          <form>
            <div className="relative">
              <ChevronsUpDown className="pointer-events-none absolute right-2 inset-y-0 my-auto opacity-75" />
              <select
                className={cn(
                  "border-input shadow-xs flex h-9 w-full min-w-32 appearance-none rounded-md border bg-transparent px-3 py-1 text-base outline-none md:text-sm",
                  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                )}
              >
                <option>English</option>
                <option>Swahili</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
