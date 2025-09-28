import { MetadataRoute } from 'next';

// Force static generation for robots.txt
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.chad-yao.com/sitemap.xml',
  };
}
