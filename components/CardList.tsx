import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/wisp";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Button } from "./ui/button";

interface CardListProps {
  posts: Post[];
  basePath: string;
}

export default function CardList({ posts, basePath }: CardListProps) {
  // Helper function to format date safely
  const formatDate = (dateString: string | Date) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return 'Invalid date';
    }
  };

  // Helper to get the display date
  const getDisplayDate = (post: Post) => {
    const dateStr = post.publishedAt || post.updatedAt;
    return formatDate(dateStr);
  };

  return (
    <>

     
    
    
        <div className="px-6 sm:px-8 md:px-12 lg:px-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">

      
      {posts.map((post) => (
        <article 
          key={post.id} 
          className="group relative bg-background rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 ease-out border border-gray-100 dark:border-gray-800 overflow-hidden hover:-translate-y-2"
        >
          {/* Image Container */}
          <div className="relative overflow-hidden aspect-[16/9]">
            <Link href={`${basePath}/${post.slug}`}>
              <div className="relative w-full h-full">
                {post.image ? (
                  <Image
                    alt={post.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    src={post.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                    <div className="text-4xl">📄</div>
                  </div>
                )}
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
            
            {/* Date Badge */}
            {/* <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium text-gray-700 dark:text-gray-300">
              <Calendar className="w-3 h-3" />
              <span>{getDisplayDate(post)}</span>
            </div> */}
          </div>

          {/* Content Container */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <h2 className="font-sans font-bold text-xl leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              <Link href={`${basePath}/${post.slug}`} className="hover:no-underline">
                {post.title}
              </Link>
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 text-sm">
              {post.description}
            </p>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                <Tag className="w-3 h-3 text-primary mt-1" />
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag.id}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-blue-100 dark:border-primary/50"
                  >
                    #{tag.name}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    +{post.tags.length - 3}
                  </span>
                )}
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-2">
              <Link 
                href={`${basePath}/${post.slug}`}
                
                className="inline-flex items-center justify-center gap-2 py-2 font-medium rounded-lg text-sm transition-all duration-200 transform  hover:shadow-lg "
              >
                <Button>
                Read More
                <ArrowRight className="w-4 h-4 pl-1 transition-transform group-hover:translate-x-0.5" />

                </Button>
              </Link>
            </div>
          </div>

          {/* Hover Border Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 dark:group-hover:border-primary/90 transition-colors duration-300 pointer-events-none" />
        </article>
      ))}
    </div>
    </>
  );
}