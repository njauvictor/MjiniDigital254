import WhyChooseUs from "@/components/WhyUs";
import { wisp } from "@/lib/wisp";
import { Metadata } from "next";
import Script from "next/script";
import { 
  Calendar, 
  User, 
  Clock, 
  Eye,
  ArrowRight,
  Home,
  Tag,
  Facebook,
  X,
  Linkedin,
  Instagram
} from "lucide-react";
import { SocialShareClient } from "@/components/SocialShareClient";
import Link from "next/link";
import Image from "next/image";

interface Params {
  slug: string;
}

// Generate metadata for blog pages
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await wisp.getPost(slug);
  
  if (!result.post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const { title, description, image, author, tags, createdAt, updatedAt } = result.post;
  const siteUrl = "https://mjini.co.ke";
  const postUrl = `${siteUrl}/blog/${slug}`;
  const postImage = image || "/mjini3.webp";
  const postDescription = description || `Read ${title} on Mjini Digital's blog. Expert insights on web development, design, and digital solutions.`;
  const authorName = author?.name || "Mjini Digital Team";
  const tagNames = tags.map(tag => tag.name).join(", ");
  const publishedTime = new Date(createdAt).toISOString();
  const modifiedTime = new Date(updatedAt).toISOString();

  return {
    title: `${title} | Mjini Digital Blog - Web Development & Design Insights`,
    description: postDescription,
    keywords: tagNames + ", web development, web design, digital solutions, Nairobi, Kenya",
    authors: [{ name: authorName }],
    creator: authorName,
    publisher: "Mjini Digital",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    openGraph: {
      type: "article",
      title: `${title} | Mjini Digital Blog`,
      description: postDescription,
      url: postUrl,
      siteName: "Mjini Digital",
      images: [
        {
          url: postImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: publishedTime,
      modifiedTime: modifiedTime,
      authors: [authorName],
      tags: tags.map(tag => tag.name),
      locale: "en_KE",
    },
    twitter: {
      card: "summary_large_image",
      site: "@mjini_digital",
      creator: "@mjini_digital",
      title: `${title} | Mjini Digital Blog`,
      description: postDescription,
      images: [postImage],
    },
    alternates: {
      canonical: postUrl,
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
    other: {
      "article:published_time": publishedTime,
      "article:modified_time": modifiedTime,
      "article:author": authorName,
      "article:section": "Technology",
      "article:tag": tags.map(tag => tag.name).join(", "),
      "og:locale": "en_KE",
      "og:site_name": "Mjini Digital",
      "twitter:label1": "Written by",
      "twitter:data1": authorName,
      "twitter:label2": "Est. reading time",
      "twitter:data2": "5 minutes",
      ...tags.reduce((acc, tag, index) => ({
        ...acc,
        [`article:tag:${index + 1}`]: tag.name,
      }), {}),
    },
  };
}

// Author Bio Component (Server Component)
function AuthorBio({ authorName, authorBio }: { authorName: string; authorBio?: string }) {
  return (
    <div className="bg-background rounded-2xl p-6 border border-[var(--border)] overflow-x-hidden">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          {authorName.charAt(0)}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white">Written by <a href="https://www.facebook.com/victor.maina.227884">{authorName}</a></h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {authorBio || "React NextJS Web Developer at Mjini Digital"}
          </p>
         
        </div>
        
      </div>
       <div className="flex gap-6 mt-8">

           <a href="https://www.facebook.com/victor.maina.227884"> <Facebook /></a>
            <a href="https://x.com/victornjaumaina"> <X /></a>
            <a href="https://www.linkedin.com/in/victor-maina-2a7013293/"> <Linkedin /></a>
            <a href="https://www.instagram.com/njau_maina/"> <Instagram /></a>
          </div>
    </div>
  );
}

// Breadcrumb Component with Schema.org (Server Component)
function Breadcrumb({ title }: { title: string }) {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mjini.co.ke"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://mjini.co.ke/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": "https://mjini.co.ke/blog/current-post" // This will be dynamic on client side
      }
    ]
  };

  return (
    <>
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <li>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" />
              Home
            </Link>
          </li>
          <li><ArrowRight className="w-3 h-3" /></li>
          <li>
            <Link href="/blog" className="hover:text-[var(--primary)] transition-colors">Blog</Link>
          </li>
          <li><ArrowRight className="w-3 h-3" /></li>
          <li className="text-gray-900 dark:text-white font-medium" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>
    </>
  );
}



export default async function BlogPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const result = await wisp.getPost(slug);
  if (!result.post) return null;

  const { title, publishedAt, createdAt, content, tags, description, image, author, updatedAt } = result.post;
  const siteUrl = "https://mjini.co.ke";
  const postUrl = `${siteUrl}/blog/${slug}`;
  const postImage = image || "/mjini3.webp";
  const authorName = author?.name || "Mjini Digital Team";
  const publishedTime = new Date(publishedAt || createdAt).toISOString();
  const modifiedTime = new Date(updatedAt).toISOString();


  // JSON-LD structured data for blog post
  const blogPostStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description || `Read ${title} on Mjini Digital's blog. Expert insights on web development, design, and digital solutions.`,
    "image": postImage,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mjini Digital",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/mjini3.webp`,
        "width": 180,
        "height": 60
      },
      "url": siteUrl,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "url": postUrl,
    "keywords": tags.map(tag => tag.name).join(", ") + ", web development, web design, Nairobi, Kenya",
    "articleSection": "Technology",
    "articleBody": content.replace(/<[^>]*>/g, '').substring(0, 5000), // First 5000 characters of clean text
    "wordCount": content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    "timeRequired": `PT5M`,
    "inLanguage": "en-KE"
  };

  // Organization structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mjini Digital",
    "url": siteUrl,
    "logo": `${siteUrl}/mjini3.webp`,
    "description": "Nairobi's leading web developers, building modern, powerful websites and applications that drive business growth in the digital era.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-XXX-XXXXXX",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://twitter.com/mjini_digital",
      "https://facebook.com/mjinidigital",
      "https://linkedin.com/company/mjini-digital"
    ]
  };

  return (
    <section className="relative">
      {/* JSON-LD Structured Data */}
      <Script
        id="blog-post-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostStructuredData) }}
      />
      
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />

      {/* Hero Section */}
    <div className="bg-background min-h-screen flex items-center justify-center pt-12">
  <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      {/* Breadcrumb */}
      <Breadcrumb title={title} />

      {/* Title */}
      <h1 className="text-4xl lg:text-5xl font-bold  leading-tight mb-6">
        {title}
      </h1>

      {/* Description */}
      {description && (
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
          {description}
        </p>
      )}

      {/* Meta Information */}
      <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-primary">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>By {authorName}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <time dateTime={publishedTime}>
            {new Date(publishedAt || createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>5 min read</span>
        </div>
        {tags.length > 0 && (
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>{tags.length} tags</span>
          </div>
        )}
      </div>
    </div>
  </div>
</div>
      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="max-w-4xl mx-auto">
              
              {/* Featured Image */}
              {postImage && (
                <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={postImage}
                    alt={title}
                    width={1200}
                    height={600}
                    className="w-full h-64 lg:h-96 object-cover"
                    loading="eager"
                  />
                </div>
              )}

              {/* Article Content */}
              <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-8 lg:p-12">
                  <div
                    className="prose prose-lg max-w-none prose-headings:font-bold
                      [&_h1]:mt-12 [&_h1]:mb-8 [&_h1]:text-3xl lg:[&_h1]:text-4xl
                      [&_h1]:text-gray-900 dark:[&_h1]:text-white
                      [&_h1]:border-b [&_h1]:border-gray-200 dark:[&_h1]:border-gray-700
                      [&_h1]:pb-4 [&_h1]:leading-tight
                      
                      [&_h2]:mt-10 [&_h2]:mb-6 [&_h2]:text-2xl lg:[&_h2]:text-3xl
                      [&_h2]:text-gray-800 dark:[&_h2]:text-gray-200
                      [&_h2]:leading-snug
                      
                      [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-xl lg:[&_h3]:text-2xl
                      [&_h3]:text-gray-800 dark:[&_h3]:text-gray-200
                      [&_h3]:font-semibold [&_h3]:leading-snug
                      
                      [&_p]:mb-8 [&_p]:text-gray-700 dark:[&_p]:text-gray-300
                      [&_p]:leading-relaxed [&_p]:text-lg
                      
                      [&_ul]:mb-8 [&_li]:mb-2 [&_li]:text-gray-700 dark:[&_li]:text-gray-300
                      [&_ol]:mb-8
                      
                      [&_a]:text-[var(--primary)] [&_a]:no-underline hover:[&_a]:underline
                      [&_a]:font-medium [&_a]:transition-all [&_a]:duration-200
                      
                      [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-l-[var(--primary)]
                      [&_blockquote]:bg-[var(--secondary)] [&_blockquote]:px-6 [&_blockquote]:py-4
                      [&_blockquote]:rounded-r-lg [&_blockquote]:italic
                      [&_blockquote]:text-gray-700 dark:[&_blockquote]:text-gray-300
                      
                      [&_img]:mb-12 [&_img]:rounded-xl [&_img]:shadow-lg
                      [&_img]:border [&_img]:border-gray-200 dark:[&_img]:border-gray-700
                      
                      [&_code]:text-gray-800 dark:[&_code]:text-gray-200
                      [&_code]:bg-gray-100 dark:[&_code]:bg-gray-800
                      [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-lg
                      [&_code]:font-mono [&_code]:text-sm
                      
                      [&_pre]:my-8 [&_pre]:bg-gray-900 [&_pre]:text-gray-100
                      [&_pre]:border [&_pre]:border-gray-700 [&_pre]:rounded-xl
                      [&_pre]:p-6 [&_pre]:overflow-x-auto
                      
                      [&_table]:my-8 [&_table]:w-full
                      [&_th]:bg-gray-100 dark:[&_th]:bg-gray-800
                      [&_th]:text-gray-900 dark:[&_th]:text-white
                      [&_th]:font-semibold [&_th]:p-4
                      [&_td]:border-t [&_td]:border-gray-200 dark:[&_td]:border-gray-700
                      [&_td]:p-4 [&_td]:text-gray-700 dark:[&_td]:text-gray-300
                      
                      [&_hr]:my-12 [&_hr]:border-gray-300 dark:[&_hr]:border-gray-600
                      
                      [&_strong]:text-gray-900 dark:[&_strong]:text-white
                      [&_strong]:font-bold
                      [&_em]:text-gray-800 dark:[&_em]:text-gray-200
                      [&_em]:italic"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />

                  {/* Tags */}
                  {tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-4">
                        <Tag className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Article Tags:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <a
                            key={tag.id}
                            href={`/blog/tag/${tag.name.toLowerCase()}`}
                            className="px-4 py-2 rounded-full bg-[var(--secondary)] text-[var(--primary)] text-sm font-medium border border-[var(--primary)]/20 hover:bg-[var(--primary)] hover:text-white transition-all duration-200"
                            rel="tag"
                          >
                            #{tag.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>

              {/* Social Share & Author Bio */}
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <SocialShareClient title={title} url={postUrl} />
                <AuthorBio authorName={authorName} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-32 space-y-6">
              {/* Reading Progress */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="w-4 h-4 text-[var(--primary)]" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Reading Progress</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-[var(--primary)] h-2 rounded-full w-3/4"></div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">75% completed</div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h3>
                <div className="space-y-2">
                  {['Introduction', 'Main Content', 'Key Takeaways', 'Conclusion'].map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="block text-sm text-gray-600 dark:text-gray-400 hover:text-[var(--primary)] transition-colors py-1"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="bg-gray-50 dark:bg-gray-900/50">
        <WhyChooseUs />
      </div>
    </section>
  );
}

// Generate Static Params
export async function generateStaticParams() {
  const { posts } = await wisp.getPosts();
  
  // Only generate static params for posts with "blog" tag
  const blogPosts = posts.filter(post => 
    post.tags.some(tag => tag.name.toLowerCase() === 'blog')
  );
  
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}