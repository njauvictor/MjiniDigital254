import Link from "next/link";
import { 
  ArrowLeft, 
  Palette, 
  Video, 
  BookOpen, 
  Sparkles, 
  Wrench,
  Zap,
  Layout,
  Type,
  Palette as ColorPalette,
  Library,
  Gauge,
  Mail,
  Phone,
  MessageCircle,
  FileText,
  Users,
  ShoppingCart,
  Star,
  TrendingUp,
  HelpCircle,
  Calendar,
  Code2,
  ChevronRight,
  Home,
  PenTool,
  Smartphone,
  Globe
} from "lucide-react";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  badge?: string;
  isActive?: boolean;
}

function SidebarLink({ href, icon, children, badge, isActive }: SidebarLinkProps) {
  return (
    <li>
      <Link 
        href={href} 
        className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 group border
          ${isActive 
            ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg shadow-[var(--primary)]/20 border-[var(--primary)]' 
            : 'bg-transparent text-[var(--foreground)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] border-transparent hover:border-[var(--primary)]/20 hover:shadow-md'
          }`}
      >
        <div className="flex items-center gap-3">
          <span className={`transition-colors ${isActive ? 'text-[var(--primary-foreground)]' : 'text-[var(--muted-foreground)] group-hover:text-[var(--primary)]'}`}>
            {icon}
          </span>
          <span className="font-medium text-sm">{children}</span>
        </div>
        <div className="flex items-center gap-2">
          {badge && (
            <span className={`text-xs px-2 py-1 rounded-full font-medium transition-colors
              ${isActive 
                ? 'bg-[var(--primary-foreground)] text-[var(--primary)]' 
                : 'bg-[var(--primary)] text-[var(--primary-foreground)]'
              }`}>
              {badge}
            </span>
          )}
          <ChevronRight className={`w-3 h-3 transition-all duration-300 ${
            isActive 
              ? 'text-[var(--primary-foreground)]' 
              : 'text-[var(--muted-foreground)] group-hover:text-[var(--primary)] group-hover:translate-x-1'
          }`} />
        </div>
      </Link>
    </li>
  );
}

function SectionHeader({ icon, title, description }: { icon: React.ReactNode; title: string; description?: string }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1.5 rounded-lg bg-gradient-to-br from-[var(--primary)] to-purple-500 text-[var(--primary-foreground)]">
          {icon}
        </div>
        <h3 className="text-base font-semibold text-[var(--foreground)]">{title}</h3>
      </div>
      {description && (
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{description}</p>
      )}
    </div>
  );
}

function FeaturePill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 py-2 px-3 bg-[var(--card)] rounded-lg border border-[var(--border)] shadow-xs group hover:shadow-sm hover:border-[var(--primary)]/30 transition-all duration-300">
      <span className="text-[var(--primary)]">{icon}</span>
      <span className="text-xs font-medium text-[var(--foreground)]">{text}</span>
    </div>
  );
}

export function MainSidebar() {
  return (
    <div className="lg:w-80 flex-shrink-0">
      <div className="space-y-6 sticky top-32">
        
        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-[var(--secondary)] to-blue-100 dark:from-[var(--sidebar)] dark:to-blue-900/20 rounded-2xl p-6 border border-[var(--border)] shadow-sm">
          <SectionHeader 
            icon={<Zap className="w-3 h-3" />}
            title="Quick Actions"
            description="Navigate through our content"
          />
          
          <ul className="space-y-2">
            <SidebarLink 
              href="/"
              icon={<Home className="w-3 h-3" />}
            >
              Home
            </SidebarLink>
            <SidebarLink 
              href="/blog" 
              icon={<ArrowLeft className="w-3 h-3" />}
              badge="Back"
            >
              Back to Blog
            </SidebarLink>
            <SidebarLink 
              href="/design-system" 
              icon={<Palette className="w-3 h-3" />}
              badge="New"
              isActive={true}
            >
              Design System
            </SidebarLink>
            <SidebarLink 
              href="/tutorials" 
              icon={<Video className="w-3 h-3" />}
            >
              Video Tutorials
            </SidebarLink>
          </ul>
        </div>

        {/* Design Services */}
        <div className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)] shadow-sm">
          <SectionHeader 
            icon={<PenTool className="w-3 h-3" />}
            title="Design Services"
            description="Professional design solutions"
          />
          
          <ul className="space-y-2">
            <SidebarLink 
              href="/services/web-design" 
              icon={<Globe className="w-3 h-3" />}
            >
              Web Design
            </SidebarLink>
            <SidebarLink 
              href="/services/ui-ux" 
              icon={<Layout className="w-3 h-3" />}
              badge="Popular"
            >
              UI/UX Design
            </SidebarLink>
            <SidebarLink 
              href="/services/mobile" 
              icon={<Smartphone className="w-3 h-3" />}
            >
              Mobile Apps
            </SidebarLink>
            <SidebarLink 
              href="/services/branding" 
              icon={<Sparkles className="w-3 h-3" />}
            >
              Brand Identity
            </SidebarLink>
            <SidebarLink 
              href="/services/development" 
              icon={<Code2 className="w-3 h-3" />}
            >
              Development
            </SidebarLink>
          </ul>
        </div>

        {/* Pro Features */}
        <div className="bg-gradient-to-br from-[var(--sidebar)] to-[var(--muted)] rounded-2xl p-6 border border-[var(--border)]">
          <SectionHeader 
            icon={<Star className="w-3 h-3" />}
            title="Pro Features"
            description="What makes our designs exceptional"
          />
          
          <div className="grid gap-2">
            {[
              { icon: <Layout className="w-3 h-3" />, text: "Responsive Design" },
              { icon: <Type className="w-3 h-3" />, text: "Modern Typography" },
              { icon: <ColorPalette className="w-3 h-3" />, text: "Color Systems" },
              { icon: <Gauge className="w-3 h-3" />, text: "Performance" },
              { icon: <Library className="w-3 h-3" />, text: "Component Library" },
              { icon: <Sparkles className="w-3 h-3" />, text: "Animations" },
            ].map((feature, index) => (
              <FeaturePill key={index} icon={feature.icon} text={feature.text} />
            ))}
          </div>
        </div>

        {/* Popular Resources */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800 shadow-sm">
          <SectionHeader 
            icon={<TrendingUp className="w-3 h-3" />}
            title="Popular Resources"
            description="Most read articles & guides"
          />
          
          <ul className="space-y-2">
            {[
              { href: "/blog/web-design-trends-2024", text: "Web Design Trends 2024" },
              { href: "/blog/color-psychology-guide", text: "Color Psychology Guide" },
              { href: "/blog/typography-best-practices", text: "Typography Best Practices" },
              { href: "/blog/mobile-first-design", text: "Mobile-First Design" },
              { href: "/blog/performance-optimization", text: "Performance Optimization" },
            ].map((resource, index) => (
              <li key={index}>
                <Link 
                  href={resource.href}
                  className="flex items-center gap-3 py-2 px-3 text-[var(--foreground)] hover:bg-white dark:hover:bg-purple-900/30 hover:text-[var(--primary)] rounded-lg transition-all duration-200 group border border-transparent hover:border-[var(--primary)]/20"
                >
                  <div className="flex items-center justify-center w-5 h-5 bg-gradient-to-br from-[var(--primary)] to-purple-500 rounded text-[var(--primary-foreground)] text-xs font-bold shadow-xs">
                    {index + 1}
                  </div>
                  <span className="text-xs font-medium flex-1">{resource.text}</span>
                  <ChevronRight className="w-3 h-3 text-[var(--muted-foreground)] group-hover:text-[var(--primary)] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)] shadow-sm">
          <SectionHeader 
            icon={<MessageCircle className="w-3 h-3" />}
            title="Get In Touch"
            description="Let's create something amazing"
          />
          
          <ul className="space-y-2">
            <SidebarLink 
              href="/contact" 
              icon={<Mail className="w-3 h-3" />}
            >
              Contact Us
            </SidebarLink>
            <SidebarLink 
              href="/consultation" 
              icon={<Calendar className="w-3 h-3" />}
              badge="Free"
            >
              Free Consultation
            </SidebarLink>
            <SidebarLink 
              href="/support" 
              icon={<HelpCircle className="w-3 h-3" />}
            >
              Support Center
            </SidebarLink>
          </ul>

          {/* Contact Info */}
          <div className="mt-4 p-3 bg-[var(--muted)] rounded-lg border border-[var(--border)]">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                <Mail className="w-3 h-3" />
                <span>hello@mjini.co.ke</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                <Phone className="w-3 h-3" />
                <span>+254 7XX XXX XXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[var(--primary)] to-purple-600 rounded-2xl p-6 text-center shadow-lg">
          <div className="space-y-3">
            <Sparkles className="w-6 h-6 mx-auto text-[var(--primary-foreground)]" />
            <h3 className="text-sm font-semibold text-[var(--primary-foreground)]">
              Ready to Start?
            </h3>
            <p className="text-xs text-[var(--primary-foreground)]/80">
              Let&apos;s transform your ideas into exceptional digital experiences
            </p>
            <Link 
              href="/get-started"
              className="inline-block bg-[var(--primary-foreground)] text-[var(--primary)] text-xs font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}