import { MetadataRoute } from 'next';

// Force static generation for sitemap
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: 'https://www.chad-yao.com',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.chad-yao.com/blog',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.chad-yao.com/wbc2policy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://www.chad-yao.com/som_sambody3d',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];
}
