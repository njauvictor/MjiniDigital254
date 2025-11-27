'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './mode-toggle'
import {
  Menu,
  X,
  Code,
  Palette,
  Search,
  Zap,
  Globe,
  Smartphone,
  BarChart3,
  Cloud,
  Shield,
  ChevronDown,
} from 'lucide-react'

// 🌐 Menu Items
const menuItems = [
  { title: 'Home', isLink: true, href: '/' },
  { title: 'About', isLink: true, href: '/about' },
  { title: 'Services', isLink: true, href: '/services', hasDropdown: true, content: 'services' },
  { title: 'Projects', isLink: true, href: '/projects' },
  { title: 'Templates', isLink: true, href: '/templates' },
  { title: 'Blog', isLink: true, href: '/blog' },
]

// 🧠 Services dropdown items
const services = [
  {
    title: 'Website Development',
    href: '/services/web-development-services-in-nairobi',
    description: 'Custom websites and web applications built with modern technologies',
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: 'Web Design',
    href: '/services/web-design-services-in-nairobi',
    description: 'Beautiful, responsive web designs that convert visitors into customers',
    icon: <Palette className="h-4 w-4" />,
  },
  {
    title: 'SEO Optimization',
    href: '/services/seo-services-in-nairobi',
    description: 'Improve your search rankings with keywords your customers are searching for',
    icon: <Search className="h-4 w-4" />,
  },
  {
    title: 'AI Integration',
    href: '/services/ai-integration-services-in-kenya',
    description: 'Smart AI solutions to automate repetitive and complex business processes',
    icon: <Zap className="h-4 w-4" />,
  },
  {
    title: 'E-commerce Websites',
    href: '/services/e-commerce-websites-nairobi',
    description: 'Complete online stores with payment integration and inventory management',
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: 'Mobile App Development',
    href: '/services/mobile-app-development',
    description: 'We develop native and cross-platform mobile applications for iOS and Android',
    icon: <Smartphone className="h-4 w-4" />,
  },
  // {
  //   title: 'Digital Marketing',
  //   href: '/services/website-development',
  //   description: 'Comprehensive digital marketing strategies to grow your online presence',
  //   icon: <BarChart3 className="h-4 w-4" />,
  // },
  // {
  //   title: 'Cloud Solutions',
  //   href: '/services/website-development',
  //   description: 'Scalable cloud infrastructure and deployment solutions for your business',
  //   icon: <Cloud className="h-4 w-4" />,
  // },
  // {
  //   title: 'Website Security & Maintenance',
  //   href: '/services/website-development',
  //   description: 'Website security, updates, and ongoing maintenance services',
  //   icon: <Shield className="h-4 w-4" />,
  // },
]

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | false>(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest("nav")) setOpenDropdown(false)
  }
  document.addEventListener("click", handleClickOutside)
  return () => document.removeEventListener("click", handleClickOutside)
}, [])


  return (
    <header>
      <nav data-state={menuState && 'active'} className="fixed z-20 w-full px-2">
        <div
          className={cn(
            'mx-auto mt-2 max-w-7xl px-6 transition-all duration-300 lg:px-12',
            isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5',
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 ">
            {/* Logo + Mobile Menu Button */}
            <div className="flex w-full justify-between lg:w-auto  ">
              <Link href="/" aria-label="home" className="flex items-center space-x-2 p-4">
                <Image src="/mjini-logo.webp" width={160} height={40} alt="mjini-logo" />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

{/* 🖥️ Desktop Menu */}
<div className="relative hidden lg:block z-[100]">
  <ul className="flex gap-8 text-sm">
    {menuItems.map((item, index) => (
      <li key={index} className="relative">
        {item.hasDropdown ? (
          // Item with separate link and dropdown trigger
          <div className="flex items-center">
            {/* Main Services Link - routes to /services */}
            <Link
              href={item.href}
              className="text-muted-foreground hover:text-accent-foreground duration-150"
            >
              {item.title}
            </Link>
            
            {/* Separate Dropdown Icon */}
            <button
              onClick={() => setOpenDropdown(openDropdown === item.title ? false : item.title)}
              className="p-1 hover:text-accent-foreground duration-150"
            >
              <ChevronDown
                className={cn(
                  "h-3 w-3 transition-transform duration-200",
                  openDropdown === item.title && "rotate-180"
                )}
              />
            </button>
            
            {/* Dropdown */}
            {item.content === 'services' && openDropdown === item.title && (
              <div
                className="
                  absolute left-0 top-full mt-3 w-[600px] grid grid-cols-2 gap-4 rounded-xl border 
                  bg-background p-4 shadow-xl backdrop-blur-md z-[200]
                  animate-in fade-in slide-in-from-top-2
                "
              >
                {/* Individual Services */}
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    onClick={() => setOpenDropdown(false)} // close after click
                    className="flex items-start gap-3 rounded-lg p-2 hover:bg-muted/60 duration-200"
                  >
                    <div className="mt-1 text-primary">{service.icon}</div>
                    <div>
                      <p className="font-medium text-sm">{service.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          // Regular link item
          <Link
            href={item.href}
            className="text-muted-foreground hover:text-accent-foreground block duration-150"
          >
            {item.title}
          </Link>
        )}
      </li>
    ))}
  </ul>
</div>

            {/* 📱 Mobile Menu */}
            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.hasDropdown ? (
                        // Item with both link and dropdown
                        <div>
                          <div className="flex items-center gap-1">
                            <Link
                              href={item.href}
                              className="text-muted-foreground hover:text-accent-foreground duration-150"
                            >
                              {item.title}
                            </Link>
                            <button
                              onClick={() =>
                                setOpenDropdown(openDropdown === item.title ? false : item.title)
                              }
                              className="text-muted-foreground hover:text-accent-foreground duration-150"
                            >
                              <ChevronDown className="h-3 w-3 mt-0.5" />
                            </button>
                          </div>

                          {item.content === 'services' && openDropdown === item.title && (
                            <ul className="mt-2 space-y-2 pl-4 border-l border-muted">
                              {/* Individual Services */}
                              {services.map((service, sIndex) => (
                                <li key={sIndex}>
                                  <Link
                                    href={service.href}
                                    className="block text-sm text-muted-foreground hover:text-accent-foreground"
                                  >
                                    {service.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        // Regular link item
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(isScrolled && 'lg:hidden')}
                >
                  <Link href="#">Login</Link>
                </Button>
                <Button asChild size="sm" className={cn(isScrolled && 'lg:hidden')}>
                  <Link href="#">Sign Up</Link>
                </Button>
                <Button asChild size="sm" className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                  <Link href="#">Get Started</Link>
                </Button>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
