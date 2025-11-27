import { MainSidebar } from "@/components/BlogSidebar";
import { wisp } from "@/lib/wisp";
import { Metadata } from "next";
import Script from "next/script";

  interface Params {
    slug: string;
  }

  // Generate metadata for services pages
  export async function generateMetadata({
    params,
  }: {
    params: Promise<Params>;
  }): Promise<Metadata> {
    const { slug } = await params;
    const result = await wisp.getPost(slug);
    
    if (!result.post) {
      return {
        title: "Service Not Found",
        description: "The requested service could not be found.",
      };
    }

    const { title, description, image, author, tags, createdAt, updatedAt } = result.post;
    const siteUrl = "https://mjini.co.ke";
    const serviceUrl = `${siteUrl}/services/${slug}`;
    const serviceImage = image || "/mjini3.webp";
    const serviceDescription = description || `${title} - Professional web development services by Mjini Digital.`;
    const authorName = author?.name || "Mjini Digital Team";
    const tagNames = tags.map(tag => tag.name).join(", ");
    const publishedTime = new Date(createdAt).toISOString();
    const modifiedTime = new Date(updatedAt).toISOString();

    return {
      title: `${title} | Mjini Digital Services`,
      description: serviceDescription,
      keywords: tagNames,
      authors: [{ name: authorName }],
      creator: authorName,
      publisher: "Mjini Digital",
      robots: "index, follow",
      openGraph: {
        type: "website",
        title: title,
        description: serviceDescription,
        url: serviceUrl,
        siteName: "Mjini Digital",
        images: [
          {
            url: serviceImage,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        description: serviceDescription,
        creator: "@mjini_digital",
        images: [serviceImage],
      },
      alternates: {
        canonical: serviceUrl,
      },
      other: {
        "og:type": "website",
        "article:published_time": publishedTime,
        "article:modified_time": modifiedTime,
        "article:author": authorName,
      },
    };
  }

  export default async function OurServices({
    params,
  }: {
    params: Promise<Params>;
  }) {
    const { slug } = await params;
    const result = await wisp.getPost(slug);
    if (!result.post) return null;

    const { title, publishedAt, createdAt, content, tags, description, image } = result.post;
    const siteUrl = "https://mjini.co.ke";
    const serviceUrl = `${siteUrl}/services/${slug}`;
    const serviceImage = image || "/mjini3.webp";
    const publishedTime = new Date(publishedAt || createdAt).toISOString();
    const modifiedTime = new Date(result.post.updatedAt).toISOString();

    // JSON-LD structured data for service page
    const serviceStructuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": title,
      "description": description || `${title} - Professional web development services by Mjini Digital.`,
      "provider": {
        "@type": "Organization",
        "name": "Mjini Digital",
        "url": siteUrl,
        "logo": `${siteUrl}/mjini3.webp`,
        "description": "Nairobi's leading web developers, building modern, powerful websites and applications that drive business growth in the digital era."
      },
      "areaServed": "Nairobi, Kenya",
      "serviceType": tags.map(tag => tag.name).join(", "),
      "url": serviceUrl,
      "image": serviceImage,
      "datePublished": publishedTime,
      "dateModified": modifiedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": serviceUrl
      }
    };

    return (
      <section className="relative pt-12">
        {/* JSON-LD Structured Data */}
        <Script
          id="service-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
        />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-20 mt-24">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
                    {title}
                  </h1>
                               
    
          {/* Main content grid */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Column - Scrollable Blog Content */}
            <div className="flex-1 min-w-0 min-h-screen overflow-y-auto"> {/* min-w-0 prevents flex overflow */}
              
              <div className="max-w-4xl mx-auto"> {/* Constrains content width for optimal reading */}
                
                {/* Blog Header */}
                <div className="mb-8">
                
                </div>

                {/* Blog Content */}
                <div className="blog-content sticky overflow-y-auto">
                  <div
                    className="prose prose-lg max-w-none
                      prose-h1:text-3xl lg:prose-h1:text-4xl 
                      prose-h2:text-2xl lg:prose-h2:text-3xl 
                      prose-h3:text-xl lg:prose-h3:text-2xl 
                      prose-p:text-gray-700 prose-p:leading-relaxed
                      prose-li:text-gray-700
                      prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                      prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50
                      prose-img:rounded-lg prose-img:shadow-md"
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  />

              
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-12">
                    {result.post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    #{tag.name}
                  </span>
                ))}
                  </div>
                  
              
                </div>
              </div>
            </div>

            {/* Right Column - Fixed Sidebar */}
            <div className="lg:w-80 flex-shrink-0 sticky  min-h-screen overflow-y-auto">
              <MainSidebar />
            </div>
          </div>
        </div>
      
      </section>
    );
  }

// Generate Static Params
export async function generateStaticParams() {
  const { posts } = await wisp.getPosts();
  
  // Only generate static params for posts with "services" tag
  const servicesPosts = posts.filter(post => 
    post.tags.some(tag => tag.name.toLowerCase() === 'services')
  );
  
  return servicesPosts.map((post) => ({
    slug: post.slug,
  }));
}
