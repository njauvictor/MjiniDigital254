import { wisp } from "@/lib/wisp";
import CardList from "@/components/CardList";

export default async function BlogPage() {
  const result = await wisp.getPosts({ limit: 6, tags: ["blog"] });
  return (
    <div className="relative pt-12 md:pt-24  lg:pt-36">
      <div className="justify-center items-center mb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-600 dark:text-gray-200 mt-12">Read Our Blogs</h1>
        
      </div>
      <CardList posts={result.posts} basePath="/blog" />
    </div>
  );
}
