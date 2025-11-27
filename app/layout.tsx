import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Website Developers in Nairobi | Mjini Digital | Nairobi's Top Web Developers",
    template: "%s | Mjini Digital"
  },
  description: "Nairobi's leading web developers, building modern, powerful websites and applications that drive business growth in the digital era. We are proudly ranked as the #1 web development agency in Nairobi",
  keywords: [
    "web development Nairobi",
    "website developers Kenya",
    "Nairobi web developers",
    "web design Nairobi",
    "custom web applications",
    "responsive web design",
    "e-commerce websites",
    "SEO optimization Nairobi",
    "digital agency Kenya"
  ],
  authors: [{ name: "Mjini Digital" }],
  creator: "Mjini Digital",
  publisher: "Mjini Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mjinidigital.co.ke'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://mjinidigital.co.ke',
    siteName: 'Mjini Digital',
    title: "Website Developers in Nairobi | Mjini Digital | Nairobi's Top Web Developers",
    description: "Nairobi's leading web developers, building modern, powerful websites and applications that drive business growth in the digital era.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mjini Digital - Web Developers in Nairobi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Website Developers in Nairobi | Mjini Digital",
    description: "Nairobi's leading web developers, building modern, powerful websites and applications.",
    images: ['/og-image.png'],
    creator: '@mjinidigital',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/mjini-logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/mjini-logo.webp" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mjini Digital" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full scrollbar-none`}
      >

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
                 <HeroHeader />
        {children}
        <FooterSection />
        </ThemeProvider>

      </body>
    </html>
  );
}
