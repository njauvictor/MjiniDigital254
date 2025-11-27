import { wisp } from "@/lib/wisp";
import CardList from "@/components/CardList";

export default async function BlogPage() {
  const result = await wisp.getPosts({ limit: 6, tags: ["projects"] });
  return (
    <div className="relative pt-12 md:pt-24  lg:pt-36">
      <CardList posts={result.posts} basePath="/projects" />
    </div>
  );
}
