import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Get site URL from environment or use default
const siteUrl = import.meta.env.SITE?.replace(/\/$/, '') || 'https://yoursite.com';

// Escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async () => {
  // Get all blog posts
  const posts = await getCollection('posts');

  // Static pages with their priorities
  const staticPages = [
    { path: '', changefreq: 'daily', priority: '1.0' },
    { path: '/about', changefreq: 'weekly', priority: '0.8' },
    { path: '/contact', changefreq: 'weekly', priority: '0.8' },
    { path: '/privacy', changefreq: 'weekly', priority: '0.8' },
    { path: '/terms', changefreq: 'weekly', priority: '0.8' },
    { path: '/posts', changefreq: 'weekly', priority: '0.8' },
  ];

  // Get unique categories
  const categories = [...new Set(posts.map((post) => post.data.category).filter(Boolean))];
  const categoryPages = categories.map((category) => {
    return {
      path: `/category/${category?.toLowerCase().replace(/\s+/g, '-')}`,
      changefreq: 'weekly',
      priority: '0.7',
    };
  });

  // Build URL entries
  const urls: string[] = [];

  // Add static pages
  for (const page of staticPages) {
    const url = `${siteUrl}${page.path}`;
    urls.push(`  <url>
    <loc>${escapeXml(url)}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
  }

  // Add category pages
  for (const page of categoryPages) {
    const url = `${siteUrl}${page.path}`;
    urls.push(`  <url>
    <loc>${escapeXml(url)}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
  }

  // Add blog posts
  const sortedPosts = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  for (const post of sortedPosts) {
    const url = `${siteUrl}/posts/${post.slug}`;
    const lastmod = post.data.date.toISOString();
    urls.push(`  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`);
  }

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

