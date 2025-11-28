import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ChevronsUpDown, Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react";

const links = [
  {
    group: "Company",
    items: [
      { title: "Home", href: "/" },
      { title: "About Us", href: "/about" },
      { title: "Projects", href: "/projects" },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    group: "Services",
    items: [
      { title: "Website Development", href: "/services/web-development-services-in-nairobi" },
      { title: "Web Design", href: "/services/web-design-services-in-nairobi" },
      { title: "SEO Optimization", href: "/services/seo-services-in-nairobi" },
      { title: "AI Integration", href: "/services/ai-integration-services-in-kenya" },
      { title: "E-commerce Websites", href: "/services/e-commerce-websites-nairobi" },
      { title: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
  },
  {
    group: "Resources",
    items: [
      { title: "Blog", href: "/blog" },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer className="bg-background border-t border-muted-foreground/10 pt-20">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between gap-12 border-b pb-12">
        {/* Logo + Contact */}
        <div className="flex flex-col gap-4">
          <Link href="/" aria-label="Mjini Digital Home" className="flex items-center">
            <Image src="/mjini-logo.webp" width={160} height={40} alt="Mjini Digital Logo" />
          </Link>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div>
              Email:{" "}
              <a href="mailto:info@mjinidigital.co.ke" className="hover:text-primary">
                info@mjinidigital.co.ke,
              </a>
              <br />
                 <a href="mailto:mjinidigital@gmail.com" className="hover:text-primary">
                     mjinidigital@gmail.com
              </a>

         
            </div>
            <div>
              Phone:{" "}
              <a href="tel:+254768495336" className="hover:text-primary">
                +254 768 495336
              </a>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-primary">
            <a href="https://x.com/mjinidigital" target="_blank" aria-label="X/Twitter">
              <X className="w-5 h-5 hover:text-primary/80 transition" />
            </a>
            <a href="https://www.linkedin.com/in/victor-maina-2a7013293/" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-primary/80 transition" />
            </a>
            <a href="https://facebook.com/mjinidigital" target="_blank" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-primary/80 transition" />
            </a>
            <a href="https://www.instagram.com/mjinidigital/" target="_blank" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-primary/80 transition" />
            </a>
            <a href="https://www.youtube.com/@mjinidigital" target="_blank" aria-label="YouTube">
              <Youtube className="w-5 h-5 hover:text-primary/80 transition" />
            </a>

             <a href="https://www.tiktok.com/@mjinidigital" target="_blank" aria-label="YouTube">
             
                <svg  xmlns="http://www.w3.org/2000/svg" width={22} height={22} 
fill={"currentColor"} viewBox="0 0 24 24">
{/* Boxicons v3.0.5 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 3 3 0 0 1 .88.13V9.4a7 7 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5 5 0 0 1-1-.1z"></path>
</svg>
            </a>

         
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-1">
          {links.map((group, i) => (
            <div key={i} className="space-y-4">
              <h4 className="font-semibold text-sm">{group.group}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {group.items.map((item, j) => (
                  <li key={j}>
                    <Link href={item.href} className="hover:text-primary transition">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <Label htmlFor="newsletter" className="font-medium text-sm">Newsletter</Label>
          <div className="flex gap-2">
            <Input
              id="newsletter"
              type="email"
              placeholder="Your email"
              className="h-10 text-sm"
            />
            <Button size="sm">Subscribe</Button>
          </div>
          <p className="text-muted-foreground text-sm mt-2">
            Get updates on new services & offers from <br></br>
            <span className="text-primary">Mjini Digital</span> <br /> <a href="https://www.mjinidigital.co.ke/">The best website developers in Nairobi</a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-muted-foreground/10 py-6 px-6 md:px-12 lg:px-20 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Mjini Digital. All Rights Reserved.</p>
        <div className="relative w-32 md:w-40">
          <ChevronsUpDown className="absolute right-2 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
          <select className={cn(
            "w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm outline-none",
            "focus:ring-2 focus:ring-primary/50"
          )}>
            <option>English</option>
            <option>Swahili</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
