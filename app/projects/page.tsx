import { wisp } from "@/lib/wisp";
import CardList from "@/components/CardList";

export default async function BlogPage() {
  const result = await wisp.getPosts({ limit: 6, tags: ["projects"] });
  return (
    <div className="relative pt-12 md:pt-24  lg:pt-36">
      <h2
                  className="text-center text-4xl md:text-5xl py-8 font-bold bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent mb-12"
                 
                >
                  Our Website <span className="text-primary">Development</span> Projects
                </h2>
      
      <CardList posts={result.posts} basePath="/projects" />
    </div>
  );
}
