import { MetadataRoute } from 'next'
import { wisp } from '@/lib/wisp'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mjinidigital.co.ke'
  
  // Fetch all posts from Wisp CMS
  const { posts } = await wisp.getPosts()
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  // Dynamic pages from Wisp CMS
  const dynamicPages = posts.map((post) => {
    // Determine the route based on post tags
    let route = '/blog'
    if (post.tags.some(tag => tag.name.toLowerCase() === 'services')) {
      route = '/services'
    } else if (post.tags.some(tag => tag.name.toLowerCase() === 'projects')) {
      route = '/projects'
    } else if (post.tags.some(tag => tag.name.toLowerCase() === 'templates')) {
      route = '/templates'
    }

    return {
      url: `${baseUrl}${route}/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.createdAt),
      changeFrequency: 'weekly' as const,
      priority: route === '/services' ? 0.8 : 0.6,
    }
  })

  return [...staticPages, ...dynamicPages]
}
