

'use client';

import { 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Link2, 
  MessageCircle 
} from "lucide-react";

interface SocialShareProps {
  title: string;
  url: string;
}

export function SocialShareClient({ title, url }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=mjini_digital`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Share2 className="w-5 h-5 text-[var(--primary)]" />
        <h3 className="font-semibold text-gray-900 dark:text-white">Share this article</h3>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex flex-col items-center justify-center p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200 group"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Facebook</span>
        </a>

        {/* Twitter */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex flex-col items-center justify-center p-3 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 rounded-xl hover:bg-sky-100 dark:hover:bg-sky-900/30 transition-all duration-200 group"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Twitter</span>
        </a>

        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex flex-col items-center justify-center p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200 group"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">LinkedIn</span>
        </a>

        {/* WhatsApp */}
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex flex-col items-center justify-center p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-200 group"
          aria-label="Share on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
      </div>

      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className="w-full mt-4 flex items-center justify-center gap-2 py-2 px-4 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        aria-label="Copy article link to clipboard"
      >
        <Link2 className="w-4 h-4" />
        <span className="text-sm font-medium">Copy Link</span>
      </button>
    </div>
  );
}