import { wisp } from "@/lib/wisp";
import CardList from "./CardList";


export default  async function ServicesCardList() {
    const result = await wisp.getPosts({ limit: 6, tags: ["services"] });

    <>

     <CardList posts={result.posts} basePath="/services" /> 
    
    </>

}