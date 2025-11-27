import AboutSection from "@/components/about";
import CallToAction from "@/components/call-to-action";
import ContactSection from "@/components/contact";
import ContentSection3 from "@/components/content-3";
import ContentSection4 from "@/components/content-4";
import FAQsThree from "@/components/FAQs";
import HeroSection from "@/components/hero-section";
import HomeText from "@/components/HomeText";
import IntegrationsSection1 from "@/components/integrations-1";
import Pricing from "@/components/pricing";
import Services from "@/components/Services";
import Websites from "@/components/websites";
import WhyChooseUs from "@/components/WhyUs";

export default function Home() {
  return (
   <>
   <HeroSection/> 
   <AboutSection/> 
   <Services/>
   <ContentSection4/>
   <Pricing/>
   <IntegrationsSection1/>  
   <Websites />
   <ContentSection3/>
     
   <CallToAction/>
    <WhyChooseUs/> 
   <FAQsThree/> 
   <HomeText /> 
   <ContactSection/> 
   </>
  );
}
