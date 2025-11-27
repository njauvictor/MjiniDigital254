"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function HomeTextSEO() {
  const [activeTab, setActiveTab] = useState("ai");
 const [openAccordions, setOpenAccordions] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };


  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-20 lg:py-32 mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="mx-auto text-4xl font-bold mb-4 max-w-5xl leading-normal">
          Comprehensive Website Development & SEO Guide for Kenyan Businesses
        </h1>
        <p className="text-xl  max-w-3xl mx-auto">
          Deep insights into AI, design, frameworks, cybersecurity, SEO, and social media, everything Kenyan businesses need to build high‑performance, search‑optimized websites.
        </p>
      </div>

      {/* Tabs */}
      <div className="mx-auto bg-backround rounded-xl shadow-lg p-8 mb-8 max-w-5xl">
        <div className="flex flex-wrap gap-2 mb-6 border-b pb-4">
          {[
            { id: "ai", label: "AI & Modern Development" },
            { id: "design", label: "Design Principles" },
            { id: "frameworks", label: "Development Frameworks" },
            { id: "cyber", label: "Cybersecurity & AI" },
            { id: "seo", label: "SEO Strategy" },
            { id: "social", label: "Social Media Integration" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-gray-200  hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content for each tab */}
        <div className="space-y-6 leading-relaxed p-8 ">
          {activeTab === "ai" && (
            <div>
              <h2 className="text-3xl font-bold mb-4">AI & Modern Development</h2>
                <hr className="my-4"></hr>
              <p>
                In today’s rapidly evolving digital landscape, Artificial Intelligence (AI) is not just
                a buzzword — it’s a key driver for innovation in website development. For Kenyan businesses aiming
                to scale globally, integrating AI into web development workflows provides massive competitive advantage.
              </p>
              <h3 className="text-xl font-semibold mt-4 mb-2">How AI Transforms Web Development</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Code Generation & Automation:</strong> Tools like GitHub Copilot, OpenAI’s Codex, and
                  AI pair-programming assistants can generate boilerplate code, suggest architecture improvements,
                  and automate repetitive tasks. According to a 2023 GitHub survey, ~ 40% of developers reported
                  using AI-assisted coding tools. <br />
                  <a href="https://github.blog/2023/03/29/github-copilot-for-business-ai-assistant-for-developers/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub Copilot for Business</a>
                </li>
                    <hr className="my-4"></hr>
                <li>
                  <strong>Personalized UX & Content:</strong> AI-driven personalization (e.g., recommendation engines)
                  helps tailor content to visitor behavior, boosting engagement and conversion. According to McKinsey,
                  personalization can increase revenue by 5–15% and marketing ROI by 10–30%. <br />
                  <a href="https://www.mckinsey.com/business-functions/marketing-and-sales/our-insights/the-future-of-personalization-and-how-to-get-ready-for-it" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">McKinsey – The future of personalization</a>
                </li>
                       <hr className="my-4"></hr>
                <li>
                  <strong>Chatbots & Virtual Assistants:</strong> Chatbots powered by LLMs (large language models)
                  like GPT-4 provide 24/7 customer support, handle queries, qualify leads, and reduce support costs.
                  According to a report by IBM, chatbots can cut customer service costs by up to 30%. <br />
                  <a href="https://www.ibm.com/cloud/blog/chatbots-explained" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">IBM – Chatbots explained</a>
                </li>
                  <hr className="my-4"></hr>
                <li>
                  <strong>AI Analytics & Predictive Insights:</strong> Machine-learning models analyze user behavior,
                  predict churn, forecast growth, and recommend optimizations. For example, predictive analytics can
                  improve customer retention by 10–15%. <br />
                  <a href="https://hbr.org/2022/11/how-ai-can-improve-customer-retention" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Harvard Business Review – How AI can improve customer retention</a>
                </li>
              </ul>
                 <hr className="my-4"></hr>

              <h3 className="text-xl font-semibold mt-8 mb-2">Benefits for Kenyan Businesses</h3>
              <p>
                For businesses in Nairobi or across Kenya, AI‑enabled website development offers:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cost Efficiency:</strong> Automating development tasks reduces hours of manual coding.</li>
                <li><strong>Scalability:</strong> AI tools scale to generate code, content, and insights without proportionally scaling manpower.</li>
                <li><strong>Improved User Engagement:</strong> Personalized experiences mean better retention and conversion.</li>
                <li><strong>Competitive Edge:</strong> Early AI adoption positions Kenyan companies ahead of slower adopters.</li>
              </ul>

              <hr className="my-8"></hr>

              <h3 className="text-xl font-semibold mt-4 mb-2">Risks & Considerations</h3>
              <p>
                While AI offers powerful advantages, there are important risks to manage:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Bias & Fairness:</strong> AI models trained on non‑diverse data may yield biased outputs.</li>
                <li><strong>Security Vulnerabilities:</strong> AI-generated code or content may contain mistakes or exploitable logic.</li>
                <li><strong>Cost of AI Licensing:</strong> Using enterprise AI tools (LLMs, analytics) may become expensive.</li>
                <li><strong>Ethical Implications:</strong> Use of user data for predictive modeling must respect privacy regulations.</li>
              </ul>
              <hr className="my-8"></hr>

              <h3 className="text-xl font-semibold mt-4 mb-2">Best Practices for Implementation</h3>
              <p>
                To successfully leverage AI in website development:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Start with a pilot: Test AI tools on a small project before scaling.</li>
                <li>Use diverse data: Ensure your training or input data reflects your target demographic.</li>
                <li>Maintain human oversight: Always review AI-generated code or content for quality and correctness.</li>
                <li>Monitor performance: Use analytics to measure the impact of AI features on engagement and conversion.</li>
                <li>Respect privacy: Be transparent with users about how their data is used and protected.</li>
              </ol>

                <hr className="my-8"></hr>

              <h3 className="text-xl font-semibold mt-4 mb-2">Useful Tools & Resources</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a href="https://openai.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    OpenAI
                  </a> – for large language models, Codex, and API-based tools.
                </li>
                <li>
                  <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    GitHub Copilot
                  </a> – AI-assisted code completion.
                </li>
                <li>
                  <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    TensorFlow
                  </a> – for building custom machine-learning models.
                </li>
              </ul>

              <p className="mt-8 ">
                In summary, AI-driven modern development is not just a trend — it&apos;s a transformative approach
                that empowers Kenyan businesses to build smarter, more efficient, and highly personalised websites.
              </p>
            </div>
          )}

          {activeTab === "design" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Design Principles & UX</h2>

                <hr className="my-8"></hr>

              <p>
                Good design is more than aesthetics — it’s about creating intuitive, accessible and emotionally resonant experiences.
                For Kenyan businesses looking to stand out, adopting modern design principles ensures your website feels both local and world-class.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">Key Design Principles</h3>
                <hr className="my-4"></hr>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Minimalism:</strong> Clean layouts, minimal distractions, focus on content. As Dieter Rams famously said, “Less, but better.”
                </li>
                <li>
                  <strong>Glassmorphism:</strong> A contemporary design style that uses frosted-glass effects, transparency, and blurred backgrounds
                  — often paired with vivid colors and smooth shadows. It gives UI a sense of depth and modernity.
                </li>
                <li>
                  <strong>Neumorphism:</strong> Soft, extruded plastic-like UI elements that appear tactile; however, it has accessibility limitations (low contrast).
                </li>
                <li>
                  <strong>Material Design:</strong> Developed by Google, it emphasizes meaningful motion, surfaces, and shadows. It combines physical metaphors (like paper, ink) with bold color and adaptive UI.
                </li>
                <li>
                  <strong>Typography Hierarchy:</strong> Proper use of headings (H1, H2, H3), body text, and spacing ensures readability and guides the user’s attention.
                </li>
                <li>
                  <strong>Color Theory:</strong> Use contrast, complementary palettes, and brand‑reinforcing colors to create visual coherence and accessibility.
                </li>
                <li>
                  <strong>Responsive Design:</strong> Ensures your site works on all devices — mobile, tablet, desktop — important for Kenya where mobile usage is very high.
                </li>
                <li>
                  <strong>Accessibility:</strong> Design for all users: use ARIA labels, high contrast, keyboard navigation, and readable fonts. According to WebAIM, over 98% of home pages have accessibility errors.
                  <br />
                  <a
                    href="https://webaim.org/projects/million/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    WebAIM Million report
                  </a>
                </li>
              </ul>

                <hr className="my-8"></hr>

              <h3 className="text-xl font-semibold mt-4 mb-2">Why These Principles Matter for Kenyan Businesses</h3>
  <hr className="my-4"></hr>
              <p>
                - <strong>Mobile-first is essential:</strong> In Kenya, a large portion of web usage is mobile-based. Clean, responsive design ensures fast-loading pages and good UX on low-bandwidth connections.<br />
                - <strong>Brand trust:</strong> A well-designed site builds trust. According to Stanford, 75% of users judge a company’s credibility based on its website design. <br />
                - <strong>Conversion optimization:</strong> Simple, clear design paths lead visitors to conversion (signup, purchase). <br />
                - <strong>User retention:</strong> Accessibility and readability make your site usable by more people, reducing bounce rate and improving engagement.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">Modern UI Trends in 2024–2025</h3>
  <hr className="my-8"></hr>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Glassmorphism + Frosted Glass:</strong> Interfaces use translucent cards with background blur and soft shadows — this trend has been popular in mobile OS UI designs and web dashboards.
                </li>
                <li>
                  <strong>Dark Mode / Theme Switching:</strong> Many users prefer dark or system-adaptive themes. Providing a light/dark toggle improves usability and matches modern expectations.
                </li>
                <li>
                  <strong>Micro-Interactions & Motion:</strong> Small animations (hover effects, button transformations, subtle parallax) enhance delight and usability without hurting performance.
                </li>
                <li>
                  <strong>3D Elements & Depth:</strong> Use of WebGL, CSS transforms, or simple shadow layering to create immersive experiences.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Best Practices & Guidelines</h3>
  <hr className="my-8"></hr>
              <p>To implement great design:</p>

              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Use a mobile-first grid and layout system (e.g., Tailwind, Bootstrap).</li>
                <li>Set up a design system / style guide: define palettes, typography, spacing.</li>
                <li>Test designs with real users — consider Kenyan users’ device types, screen sizes, and data constraints.</li>
                <li>Use performance-optimized assets: SVGs for icons, compressed images, lazy loading.</li>
                <li>Ensure color contrast meets WCAG standards: use tools like <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">WebAIM Contrast Checker</a>.</li>
                <li>Implement accessible navigation: ARIA labels, keyboard focus states, skip links.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-4 mb-2">Useful Tools & Resources</h3>
  <hr className="my-8"></hr>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Figma
                  </a> — collaborative UI design tool, ideal for prototyping and design systems.
                </li>
                <li>
                  <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Tailwind CSS
                  </a> — utility-first CSS framework for responsive, scalable design.
                </li>
                <li>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    MDN Web Accessibility Documentation
                  </a> — important guide to making accessible web experiences.
                </li>
              </ul>
  <hr className="my-8"></hr>
              <p className="mt-4">
                In conclusion, modern design is not just about being “pretty.” By combining proven principles like minimalism,
                glassmorphism, and accessibility, Kenyan businesses can build digital experiences that are not only beautiful, but also powerful and inclusive.
              </p>
            </div>
          )}

          {activeTab === "frameworks" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Development Frameworks</h2>
  <hr className="my-8"></hr>
              <p>
                Choosing the right development framework is a cornerstone decision for any web project. The
                framework determines how quickly you can deliver features, how maintainable your codebase
                remains, and how well your site scales. For Kenyan businesses — whether startups in Nairobi or
                enterprises — selecting a modern, proven framework can significantly affect long-term success.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">Popular Web Frameworks & Their Advantages</h3>
  <hr className="my-8"></hr>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>React:</strong> Maintained by Facebook, React uses a virtual DOM for fast rendering. Its component-based architecture simplifies complex UI development.
                </li>
                <li>
                  <strong>Next.js:</strong> Built on React, Next.js enables Server-Side Rendering (SSR), Static Site Generation (SSG), and hybrid modes — great for SEO, performance, and dynamic content.
                </li>
                <li>
                  <strong>Vue.js:</strong> Lightweight, flexible, and easy to learn. Vue’s reactivity system and component-based design make it great for both small and large scale apps.
                </li>
                <li>
                  <strong>Nuxt.js:</strong> A higher-level framework for Vue that offers SSR, SSG, and powerful routing. Ideal for SEO‑friendly websites and content-heavy apps.
                </li>
                <li>
                  <strong>Svelte / SvelteKit:</strong> Compiles to highly optimized vanilla JS — minimal runtime overhead, super fast, great for performance-critical and SEO‑sensitive applications.
                </li>
                <li>
                  <strong>Django + Django REST Framework:</strong> If you prefer a Python backend, Django offers a mature framework, built‑in admin, and strong security. DRF enables REST APIs.
                </li>
                <li>
                  <strong>Ruby on Rails:</strong> A convention-over-configuration framework that accelerates development. Excellent for MVPs, ease of use, and fast prototyping.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-2">Framework Comparison: Performance & SEO</h3>
  <hr className="my-8"></hr>
              <p>
                - According to <a href="https://nextjs.org/blog/next-13" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Next.js documentation</a>, SSR can
                improve time-to-first-byte (TTFB) significantly, which helps with SEO.<br />
                - SvelteKit’s compiled output is extremely lightweight — SvelteKit apps often have smaller JS bundles than React, leading to faster performance. <br />
                - Vue + Nuxt provides meta tag management out-of-the-box, offering great SEO flexibility without manual setup. <br />
                - Django + Django REST: Great for API-driven apps, but front-end framework choice still matters for SEO speed; pairing with modern frontend frameworks yields powerful full-stack apps.
              </p>
                <hr className="my-8"></hr>

              <h3 className="text-xl font-semibold mt-4 mb-2">Why Kenyan Businesses Should Care About Framework Choice</h3>
  <hr className="my-8"></hr>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>SEO Impact:</strong> Using SSR/SSG frameworks (Next.js, Nuxt.js) gives you better control over metadata, performance, and SEO optimization out-of-the-box.
                </li>
                <li>
                  <strong>Faster Time to Market:</strong> Frameworks with strong ecosystems (React, Rails, Django) speed up development of MVPs and validated learning cycles.
                </li>
                <li>
                  <strong>Scalability:</strong> Component-based frameworks (React, Vue) make it easier to grow your codebase without reorganizing everything.
                </li>
                <li>
                  <strong>Developer Talent:</strong> React, Vue, and Python are taught in universities and bootcamps in Kenya — there’s a growing local developer pool.
                </li>
                <li>
                  <strong>Maintainability:</strong> Mature frameworks like Django, Rails, and Next.js have strong conventions, community support, and long-term stability.
                </li>
              </ul>
  <hr className="my-8"></hr>
              <h3 className="text-xl font-semibold mt-4 mb-2">Best Practices for Using Frameworks</h3>
  <hr className="my-8"></hr>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Use SSR or SSG where SEO matters: For blog sites, landing pages, and content-heavy sites, prefer SSG (Next.js, Nuxt) or SSR.</li>
                <li>Use lazy loading: Dynamically load components to reduce initial load time.</li>
                <li>Implement code splitting and tree-shaking: Reduce bundle size for faster performance.</li>
                <li>Maintain a component library: Build reusable UI components to reduce duplication.</li>
                <li>Use TypeScript or PropTypes: Improve code quality and catch bugs early.</li>
                <li>Monitor performance metrics: Use tools like Lighthouse, WebPageTest, or Google PageSpeed Insights.</li>
              </ol>
                <hr className="my-8"></hr>

              <h3 className="text-xl font-semibold mt-4 mb-2">Useful Tools & Resources</h3>
  <hr className="my-8"></hr>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Next.js
                  </a> – React framework for production, SSR, and SSG.
                </li>
                <li>
                  <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Vue.js
                  </a> – Progressive JavaScript framework.
                </li>
                <li>
                  <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Svelte
                  </a> – Compiler-based framework for very fast apps.
                </li>
                <li>
                  <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Django
                  </a> – High-level Python web framework.
                </li>
                <li>
                  <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" className="text-blue‑600 underline">
                    Ruby on Rails
                  </a> – Productive web application framework.
                </li>
              </ul>
  <hr className="my-8"></hr>
              <p className="mt-4">
                Selecting the right development framework is crucial. The best choice for your Kenyan business
                depends on your goals: whether you want SEO-optimized content, rapid MVP launch, or long-term
                maintainability. By using modern frameworks, you lay a solid foundation for scalable and search‑friendly web growth.
              </p>
            </div>
          )}

          {activeTab === "cyber" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Cybersecurity & AI</h2>
                <hr className="my-8"></hr>

              <p>
                As web technologies advance, cybersecurity is no longer optional — it’s a critical part of every
                website’s architecture. When you combine cybersecurity with artificial intelligence (AI), you
                unlock powerful threat detection and proactive defense mechanisms. Kenyan businesses must
                prioritize these to protect user data, maintain trust, and comply with global standards.
              </p>
              <hr className="my-8"></hr>

              <h3 className="text-xl font-semibold mt-4 mb-2">Cyber Threat Landscape</h3>
  
              <p>
                The cyber threat landscape is growing fast. According to the 2024 <a href="https://www.accenture.com/us-en/insights/security/cost-cybercrime-study" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Accenture Cost of Cybercrime Study</a>, the average cost of cybercrime
                per organization globally rose to US$13.0 million, an increase of 15% compared to previous years.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">How AI Enhances Cybersecurity</h3>
<hr className="my-8"></hr>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Threat Detection & Anomaly Detection:</strong> AI/ML models can learn normal user behavior and detect anomalies in real-time, such as unusual login locations or behavior, helping prevent breaches.
                </li>
                <li>
                  <strong>Automated Incident Response:</strong> When an AI system detects a threat, it can instantly trigger incident response workflows (e.g., block an IP, isolate a session), reducing the reaction time from hours to seconds.
                </li>
                <li>
                  <strong>Phishing Prevention:</strong> Natural Language Processing (NLP) can analyze emails, detect phishing language patterns, and warn users before they click malicious links.
                </li>
                <li>
                  <strong>Behavioral Biometrics:</strong> AI can analyze typing patterns, mouse movements, and device characteristics to continuously authenticate users, making credential theft harder.
                </li>
                <li>
                  <strong>Predictive Risk Modeling:</strong> By forecasting which assets or systems are most likely to be targeted based on historical data, AI helps prioritize defenses and resource allocation.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Security Best Practices for Kenyan Websites</h3>
<hr className="my-8"></hr>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Use HTTPS by default with TLS 1.2+ for all pages.</li>
                <li>Implement secure headers (CSP, HSTS, X-Frame-Options) to guard against common attacks.</li>
                <li>Regularly update and patch your dependencies (frontend & backend).</li>
                <li>Use web application firewalls (WAF) and DDoS protection.</li>
                <li>Encrypt sensitive data at rest and in transit.</li>
                <li>Implement multi-factor authentication (MFA) for user/admin logins.</li>
                <li>Use AI-based tools (e.g., SIEM, EDR) to constantly monitor and respond to threats.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-4 mb-2">Challenges & Risks with AI in Security</h3>
<hr className="my-8"></hr>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>False Positives:</strong> AI systems may incorrectly flag benign behavior as threats, causing workflow interruptions.</li>
                <li><strong>Adversarial Attacks:</strong> Attackers may deliberately feed malicious inputs to poison AI models.</li>
                <li><strong>Model Drift:</strong> As user behavior changes, models may become less accurate over time unless retrained.</li>
                <li><strong>Privacy Concerns:</strong> Behavioral biometrics and monitoring can raise data-privacy issues if not transparently handled.</li>
              </ul>
<hr className="my-8"></hr>
              <h3 className="text-xl font-semibold mt-4 mb-2">Useful Tools & Platforms</h3>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a href="https://www.microsoft.com/security/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Microsoft Security
                  </a> — Includes Azure Sentinel (cloud-native SIEM) with AI‑driven threat detection.
                </li>
                <li>
                  <a href="https://www.crowdstrike.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    CrowdStrike
                  </a> — Endpoint Detection & Response (EDR) solution that uses AI to identify threats.
                </li>
                <li>
                  <a href="https://www.paloaltonetworks.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Palo Alto Networks
                  </a> — Next-gen firewalls, cloud security, and AI-based prevention.
                </li>
              </ul>
<hr className="my-8"></hr>
              <p className="mt-4">
                In summary, integrating AI into your cybersecurity architecture empowers Kenyan businesses
                with proactive, intelligent, and scalable defense mechanisms. As cyber threats evolve,
                the combination of AI-driven detection and strong security hygiene becomes critical to safeguarding your digital presence.
              </p>
            </div>
          )}

          {activeTab === "seo" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">SEO Strategy</h2>
              <p>
                Search Engine Optimization (SEO) is one of the most important pillars for web success — especially for
                Kenyan businesses, where online discovery can make or break growth. A well-executed SEO strategy ensures
                that your website ranks high in Google, attracts quality traffic, and converts visitors into customers.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">On‑Page SEO Fundamentals</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Keyword Research:</strong> Use tools like <a href="https://ahrefs.com/keyword-generator" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Ahrefs Keyword Generator</a>,
                  <a href="https://moz.com/explorer" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Moz Explorer</a>, or
                  <a href="https://keywordtool.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">KeywordTool.io</a> to find terms your customers search for.
                </li>
                <li>
                  <strong>Title Tags & Meta Descriptions:</strong> Write compelling and optimized title tags (~ 50–60 characters)
                  and meta descriptions (~ 150–160 characters) that include primary keywords.
                </li>
                <li>
                  <strong>Header Tags (H1, H2, H3):</strong> Structure your content using heading tags to improve readability and SEO.
                </li>
                <li>
                  <strong>URL Structure:</strong> Use clean, readable URLs. For example: <code>/services/web-development-kenya</code>
                  instead of <code>/p?id=123</code>.
                </li>
                <li>
                  <strong>Internal Linking:</strong> Link related pages on your site to spread link equity and help users navigate.
                </li>
                <li>
                  <strong>Image SEO:</strong> Optimize image alt text, file names, and compress images. Use modern formats like WebP.
                </li>
                <li>
                  <strong>Mobile Optimization:</strong> Having a mobile-friendly site is critical: Google uses mobile-first indexing.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Technical SEO & Performance</h3>
              <p>
                Technical SEO ensures that your website is crawlable, fast, and comprehensible to search engines:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Page Speed & Core Web Vitals:</strong> Core Web Vitals (LCP, FID, CLS) are part of Google’s ranking algorithm.
                  According to Google, improving Largest Contentful Paint (LCP) by just 0.1s can lead to a 5–10% increase in clicks.
                  <br />
                  <a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google Web Vitals</a>
                </li>
                <li>
                  <strong>Sitemap & Robots.txt:</strong> Submit an XML sitemap and use a robots.txt file to guide crawlers.
                </li>
                <li>
                  <strong>Schema Markup (Structured Data):</strong> Use JSON-LD or Microdata to markup product, article, FAQ, and review data.
                  This helps rich results in SERPs. <br />
                  <a href="https://schema.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Schema.org</a>
                </li>
                <li>
                  <strong>HTTPS Security:</strong> Secure your site with SSL/TLS. HTTPS is also a ranking factor.
                </li>
                <li>
                  <strong>Canonical Tags:</strong> Use canonical tags to avoid duplicate content issues.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Off‑Page SEO & Link Building</h3>
              <p>
                Off-page SEO is all about building authority and trust:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Backlinks:</strong> Acquire high-quality backlinks from relevant, authoritative Kenyan and international websites.
                  Use strategies like guest blogging, partnerships, and content marketing.
                </li>
                <li>
                  <strong>Local SEO:</strong> Optimize for “web development Nairobi” or “website developers Kenya” by claiming your Google Business Profile, getting local citations, and collecting reviews.
                </li>
                <li>
                  <strong>Social Signals:</strong> While not a direct ranking factor, strong social media engagement can drive traffic and amplify content reach.
                </li>
                <li>
                  <strong>Content Marketing:</strong> Publish long-form, value-driven content (blogs, case studies) to attract and retain backlinks.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Measuring & Tracking SEO Performance</h3>
              <p>
                To ensure your SEO efforts pay off, monitor key metrics:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Organic Traffic:</strong> Use Google Analytics 4 (GA4) to see how much traffic comes from search.
                </li>
                <li>
                  <strong>Keyword Rankings:</strong> Track your target keywords using tools like Ahrefs, SEMrush, or Moz.
                </li>
                <li>
                  <strong>Backlinks & Referring Domains:</strong> Monitor link growth and quality with Ahrefs or Majestic.
                </li>
                <li>
                  <strong>Core Web Vitals:</strong> Use Google Search Console’s Core Web Vitals report and PageSpeed Insights.
                </li>
                <li>
                  <strong>Conversion Rates:</strong> Measure how well SEO landing pages convert to leads, sales, or other goals.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">SEO Challenges & How to Overcome Them</h3>
              <p>
                Some common SEO challenges and strategic solutions:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>High Competition Keywords:</strong> Focus on long-tail, localized keywords such as “web design Nairobi Kenya” to reduce PPC and SEO competition.
                </li>
                <li>
                  <strong>Slow Page Speed:</strong> Optimize images, defer non-critical JS, and implement caching.
                </li>
                <li>
                  <strong>Poor Content Quality:</strong> Invest in professional content writers, or use AI-assisted content creation (with human editing) to maintain quality.
                </li>
                <li>
                  <strong>Lack of Local Citations:</strong> Build profiles on Kenyan directories, local blogs, and business platforms to improve local SEO.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Useful SEO Tools & Resources</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Google Analytics 4 (GA4)
                  </a> — For tracking user behavior and conversions.
                </li>
                <li>
                  <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Google Search Console
                  </a> — For indexing, Core Web Vitals, and performance metrics.
                </li>
                <li>
                  <a href="https://ahrefs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Ahrefs
                  </a> — For backlinks, keyword research, and competitor insights.
                </li>
                <li>
                  <a href="https://www.semrush.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    SEMrush
                  </a> — All-in-one SEO and content marketing tool.
                </li>
                <li>
                  <a href="https://yoast.com/wordpress/plugins/seo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Yoast SEO
                  </a> — Popular plugin for WordPress SEO.
                </li>
              </ul>

              <p className="mt-4">
                In summary, a strong SEO strategy for Kenyan websites involves combining technical optimization,
                content excellence, and local relevance. By investing in on-page SEO, link-building, and performance
                metrics, your site can compete globally and convert locally.
              </p>
            </div>
          )}

          {activeTab === "social" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Social Media Integration</h2>

              <p>
                Social media is a powerful channel for generating traffic, building brand awareness,
                and engaging with customers. For Kenyan businesses, integrating social media with your website
                strategy is vital to driving growth in local and global markets.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">Why Social Media Matters</h3>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>High Reach:</strong> Platforms like Facebook, Instagram, TikTok, and LinkedIn have millions
                  of Kenyan users. According to We Are Social, Kenya had over 11 million social media users as of 2024.
                  <br />
                  <a href="https://datareportal.com/reports/digital-2024-kenya" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Digital 2024 Kenya Report</a>
                </li>
                <li>
                  <strong>Traffic Driver:</strong> Social channels are among the top sources of referral traffic for websites.
                </li>
                <li>
                  <strong>Brand Engagement:</strong> Through consistent posting, community engagement, and user-generated content,
                  social media helps build trust and loyalty.
                </li>
                <li>
                  <strong>Lead Generation:</strong> Social ads, lead magnets, and integrated campaigns can funnel users to your site.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Best Practices for Social Media & Website Integration</h3>

              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Social Share Buttons:</strong> Include easily accessible share buttons on blog posts, articles, and key landing pages.
                </li>
                <li>
                  <strong>Open Graph & Meta Tags:</strong> Use <code>og:title</code>, <code>og:description</code>, <code>og:image</code>,
                  and Twitter cards to ensure your content looks great when shared. This also helps with appearance and click-through.
                </li>
                <li>
                  <strong>User‑Generated Content (UGC):</strong> Embed social feeds (Instagram grid, Twitter threads) on your website
                  to showcase community engagement.
                </li>
                <li>
                  <strong>Social Login:</strong> Enable users to register or log in using social accounts (e.g., Facebook, Google) to improve signup rates.
                </li>
                <li>
                  <strong>Retargeting & Pixel Tracking:</strong> Implement Facebook Pixel, LinkedIn Insight Tag, or Google Analytics to retarget website visitors on social platforms.
                </li>
                <li>
                  <strong>Social Content Calendar:</strong> Plan regular content around blog posts, product launches, and events to drive traffic back to your website.
                </li>
              </ol>

              <h3 className="text-xl font-semibold mt-4 mb-2">Measuring Social Integration Success</h3>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Social Referrals:</strong> Use Google Analytics to see which social platforms drive the most traffic.</li>
                <li><strong>Conversion from Social:</strong> Track how many website conversions (signups, sales) came through social campaigns.</li>
                <li><strong>Engagement:</strong> Measure likes, shares, comments, and UGC submitted via your website.</li>
                <li><strong>ROI of Ads:</strong> For paid social, compare ad spend vs conversions or revenue generated.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Tools & Resources</h3>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a href="https://business.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Facebook Business Suite
                  </a> — for managing Facebook Page, Instagram, ads, and insights.
                </li>
                <li>
                  <a href="https://ads.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Twitter Ads
                  </a> — for promoting content and driving traffic back to your site.
                </li>
                <li>
                  <a href="https://ads.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    LinkedIn Marketing Solutions
                  </a> — ideal for B2B lead generation.
                </li>
                <li>
                  <a href="https://buffer.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Buffer
                  </a> — scheduling and analytics for social content.
                </li>
                <li>
                  <a href="https://hootsuite.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Hootsuite
                  </a> — comprehensive social media management.
                </li>
              </ul>

              <p className="mt-4">
                Social media integration is not just an add-on — it’s an essential part of your
                website’s growth engine. By aligning your website strategy with social engagement,
                Kenyan businesses can amplify reach, foster community, and drive meaningful conversions.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Accordion (optional) */}
      <div className="max-w-5xl mx-auto space-y-4 mb-8">
        {[
          {
            title: "Why Website Performance Matters for SEO",
            content: (
              <div className="space-y-4 ">
                <p>
                  Page performance is directly tied to SEO. Google’s Core Web Vitals — including
                  Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) —
                  are part of the ranking algorithm. Slow-loading pages lose visibility and user trust.
                </p>
                <p>
                  Tools like <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google PageSpeed Insights</a> and <a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google Web Vitals</a> can help analyze and improve web performance.
                </p>
              </div>
            ),
          },
          {
            title: "The Role of Content in Conversion Optimization",
            content: (
              <div className="space-y-4 ">
                <p>
                  High-quality content serves two purposes: SEO and conversion. SEO-focused content draws in organic traffic, while persuasive content turns visitors into leads or customers.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use content pillars and clusters to structure your blog strategy.</li>
                  <li>Incorporate case studies that highlight your success with previous clients.</li>
                  <li>Include clear calls-to-action (CTAs) in blog posts and landing pages.</li>
                </ul>
              </div>
            ),
          },
        ].map((item, idx) => {
          const isOpen = openAccordions.includes(idx);
          return (
            <div key={idx} className="accordion-item bg-background rounded-lg shadow-md border border-gray-50 dark:border-primary/30 overflow-hidden">
              <button
                onClick={() => toggleAccordion(idx)}
                className="accordion-header w-full text-left p-6 font-semibold text-lg  flex justify-between items-center hover:bg-primary transition-colors"
              >
                <span>{item.title}</span>
                <span className="text-xl">{isOpen ? "−" : "+"}</span>
              </button>
              <div
                className={`accordion-content transition-max-height duration-300 ease-in-out overflow-hidden`}
                style={{ maxHeight: isOpen ? "1000px" : "0px" }}
              >
                <div className="p-6 pt-0 text-gray-500 dark:text-gray-200">{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-background rounded-xl p-8 border border-gray-200 dark:border-primary/50 space-y-8 mx-auto max-w-5xl py-12 mt-12 md:mt-24">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className=" mb-6 max-w-2xl mx-auto">
          Whether you want to build a cutting-edge, AI-powered website, strengthen your SEO, or integrate your social media — we can help you build a future-ready digital brand.
        </p>
        <Button className="transition-colors">
          Let&apos;s Start Your Project
        </Button>
      </div>
    </div>
  );
}
