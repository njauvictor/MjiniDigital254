import { MainSidebar } from "@/components/BlogSidebar";
import HomeTextSEO from "@/components/HomeText";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyUs";
import { wisp } from "@/lib/wisp";
import { Metadata } from "next";
import Script from "next/script";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Params {
  slug: string;
}

// Generate metadata for projects pages
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await wisp.getPost(slug);
  
  if (!result.post) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const { title, description, image, author, tags, createdAt, updatedAt } = result.post;
  const siteUrl = "https://mjini.co.ke";
  const projectUrl = `${siteUrl}/projects/${slug}`;
  const projectImage = image || "/mjini3.webp";
  const projectDescription = description || `${title} - Professional web development project by Mjini Digital.`;
  const authorName = author?.name || "Mjini Digital Team";
  const tagNames = tags.map(tag => tag.name).join(", ");
  const publishedTime = new Date(createdAt).toISOString();
  const modifiedTime = new Date(updatedAt).toISOString();

  return {
    title: `${title} | Mjini Digital Projects`,
    description: projectDescription,
    keywords: tagNames,
    authors: [{ name: authorName }],
    creator: authorName,
    publisher: "Mjini Digital",
    robots: "index, follow",
    openGraph: {
      type: "website",
      title: title,
      description: projectDescription,
      url: projectUrl,
      siteName: "Mjini Digital",
      images: [
        {
          url: projectImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: projectDescription,
      creator: "@mjini_digital",
      images: [projectImage],
    },
    alternates: {
      canonical: projectUrl,
    },
    other: {
      "og:type": "website",
      "article:published_time": publishedTime,
      "article:modified_time": modifiedTime,
      "article:author": authorName,
    },
  };
}

export default async function OurProjects({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const result = await wisp.getPost(slug);
  if (!result.post) return null;

  const { title, publishedAt, createdAt, content, tags, description, image, author, updatedAt } = result.post;
  const siteUrl = "https://mjini.co.ke";
  const projectUrl = `${siteUrl}/projects/${slug}`;
  const projectImage = image || "/mjini3.webp";
  const authorName = author?.name || "Mjini Digital Team";
  const publishedTime = new Date(publishedAt || createdAt).toISOString();
  const modifiedTime = new Date(updatedAt).toISOString();

  // Format date for display
  const formatDate = (dateString: string | Date) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Date not available';
    }
  };

  // JSON-LD structured data for project page
  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": title,
    "description": description || `${title} - Professional web development project by Mjini Digital.`,
    "creator": {
      "@type": "Organization",
      "name": "Mjini Digital",
      "url": siteUrl,
      "logo": `${siteUrl}/mjini3.webp`,
      "description": "Nairobi's leading web developers, building modern, powerful websites and applications that drive business growth in the digital era."
    },
    "areaServed": "Nairobi, Kenya",
    "keywords": tags.map(tag => tag.name).join(", "),
    "url": projectUrl,
    "image": projectImage,
    "datePublished": publishedTime,
    "dateModified": modifiedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": projectUrl
    }
  };

  return (
    <section className="relative">
      {/* JSON-LD Structured Data */}
      <Script
        id="project-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectStructuredData) }}
      />

      {/* Hero Section */}
      <div className="bg-background pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-6">
              <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                <li><ArrowRight className="w-4 h-4" /></li>
                <li><Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link></li>
                <li><ArrowRight className="w-4 h-4" /></li>
                <li className="text-gray-900 dark:text-white font-medium">{title}</li>
              </ol>
            </nav>

            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                {description}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {authorName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Published {formatDate(publishedAt || createdAt)}</span>
              </div>
              {updatedAt && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Updated {formatDate(updatedAt)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      {projectImage && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20 -mt-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={projectImage}
                alt={title}
                width={1280}
                height={720}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      )}

      {/* Main Content Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column - Scrollable Content */}
          <div className="flex-1 min-w-0">
            <div className="max-w-4xl mx-auto">
              
              {/* Content */}
              <article className="bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-8 lg:p-12">
                  {/* Custom Content Wrapper with Guaranteed Spacing */}
                  <div className="custom-prose-spacing">
                    <div
                      className="prose prose-lg max-w-none prose-headings:font-bold
                        /* Reset all prose spacing first */
                        prose-p:my-0 prose-headings:my-0 prose-ul:my-0 
                        prose-ol:my-0 prose-blockquote:my-0 prose-img:my-0
                        prose-pre:my-0 prose-table:my-0 prose-hr:my-0
                        
                        /* Apply custom spacing */
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
                        
                        /* Paragraph spacing */
                        [&_p]:my-0 [&_p]:mb-8 [&_p]:text-gray-700 dark:[&_p]:text-gray-300
                        [&_p]:leading-relaxed [&_p]:text-lg
                        
                        /* List spacing */
                        [&_ul]:my-0 [&_ul]:mb-8 [&_li]:my-0 [&_li]:mb-2
                        [&_ol]:my-0 [&_ol]:mb-8 [&_li]:text-gray-700 dark:[&_li]:text-gray-300
                        [&_li]:leading-relaxed
                        
                        /* Links */
                        [&_a]:text-blue-600 dark:[&_a]:text-blue-400
                        [&_a]:no-underline hover:[&_a]:underline
                        [&_a]:font-medium [&_a]:transition-all [&_a]:duration-200
                        
                        /* Blockquotes */
                        [&_blockquote]:my-0 [&_blockquote]:my-8
                        [&_blockquote]:border-l-4 [&_blockquote]:border-l-blue-500
                        [&_blockquote]:bg-blue-50 dark:[&_blockquote]:bg-blue-900/20
                        [&_blockquote]:px-6 [&_blockquote]:py-4
                        [&_blockquote]:rounded-r-lg [&_blockquote]:italic
                        [&_blockquote]:text-gray-700 dark:[&_blockquote]:text-gray-300
                        
                        /* Images */
                        [&_img]:my-0 [&_img]:mb-12 [&_img]:mx-auto
                        [&_img]:rounded-xl [&_img]:shadow-lg
                        [&_img]:border [&_img]:border-gray-200 dark:[&_img]:border-gray-700
                        
                        /* Code */
                        [&_code]:text-gray-800 dark:[&_code]:text-gray-200
                        [&_code]:bg-gray-100 dark:[&_code]:bg-gray-800
                        [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-lg
                        [&_code]:font-mono [&_code]:text-sm
                        
                        [&_pre]:my-0 [&_pre]:my-8 [&_pre]:bg-gray-900 
                        [&_pre]:text-gray-100 [&_pre]:border [&_pre]:border-gray-700
                        [&_pre]:rounded-xl [&_pre]:p-6 [&_pre]:overflow-x-auto
                        
                        /* Tables */
                        [&_table]:my-0 [&_table]:my-8 [&_table]:w-full
                        [&_th]:bg-gray-100 dark:[&_th]:bg-gray-800
                        [&_th]:text-gray-900 dark:[&_th]:text-white
                        [&_th]:font-semibold [&_th]:p-4
                        [&_td]:border-t [&_td]:border-gray-200 dark:[&_td]:border-gray-700
                        [&_td]:p-4 [&_td]:text-gray-700 dark:[&_td]:text-gray-300
                        
                        /* Horizontal rules */
                        [&_hr]:my-0 [&_hr]:my-12 
                        [&_hr]:border-gray-300 dark:[&_hr]:border-gray-600
                        
                        /* Strong and emphasis */
                        [&_strong]:text-gray-900 dark:[&_strong]:text-white
                        [&_strong]:font-bold
                        [&_em]:text-gray-800 dark:[&_em]:text-gray-200
                        [&_em]:italic"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </div>

                  {/* Tags with perfect spacing */}
                  {tags.length > 0 && (
                    <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Tags:
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {tags.map((tag) => (
                          <span
                            key={tag.id}
                            className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 
                                       text-blue-700 dark:text-blue-300 text-sm font-medium 
                                       border border-blue-200 dark:border-blue-800
                                       hover:bg-blue-200 dark:hover:bg-blue-800/40 
                                       transition-colors duration-200 cursor-default"
                          >
                            #{tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </div>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
              <MainSidebar />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="bg-gray-50 dark:bg-gray-900/50">
        <WhyChooseUs />
        <Services />
        <HomeTextSEO />
      </div>
    </section>
  );
}

// Generate Static Params
export async function generateStaticParams() {
  const { posts } = await wisp.getPosts();
  
  // Only generate static params for posts with "projects" tag
  const projectPosts = posts.filter(post => 
    post.tags.some(tag => tag.name.toLowerCase() === 'projects')
  );
  
  return projectPosts.map((post) => ({
    slug: post.slug,
  }));
}
