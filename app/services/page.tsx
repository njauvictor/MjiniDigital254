import { wisp } from "@/lib/wisp";
import CardList from "@/components/CardList";

export default async function BlogPage() {
  const result = await wisp.getPosts({ limit: 6, tags: ["services"] });
  return (
    <>

    
    
    <div className="relative pt-12 md:pt-24 lg:pt-36 scrollbar-none pb-24">
      <div className="justify-center items-center mb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-600 dark:text-gray-200 mt-12">Our Web Development Services</h1>
        <p className="px-8 max-w-5xl mx-auto text-center mt-8 text-gray-500 dark:text-gray-300">
          We offer a wide range of web development services to help businesses of all sizes succeed in the digital world. 
          From custom web applications to e-commerce solutions, we have the expertise and experience to meet your unique needs. 
          Contact us today to learn more about how we can help you achieve your web development goals.



        </p>
      </div>

           <CardList posts={result.posts} basePath="/services" />
    </div>
    
    
    
    
    
    </>
    
  );
}
