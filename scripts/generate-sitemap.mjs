import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const blogDir = 'content/blog';
const sitemapPath = 'public/sitemap.xml';
const baseUrl = 'https://filipechicarino.com.br';

const coreRoutes = [
  { loc: '/', priority: '1.0' },
  { loc: '/quem-sou', priority: '0.8' },
  { loc: '/solucoes', priority: '0.8' },
  { loc: '/blog/', priority: '0.8' },
  { loc: '/contato', priority: '0.8' },
];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const route of coreRoutes) {
  sitemapXml += `  <url>\n    <loc>${baseUrl}${route.loc}</loc>\n    <priority>${route.priority}</priority>\n  </url>\n`;
}

// Read blog posts dynamically
try {
  const files = readdirSync(blogDir);
  const mdFiles = files.filter(f => f.endsWith('.md'));
  
  for (const file of mdFiles) {
    const slug = file.replace('.md', '');
    sitemapXml += `  <url>\n    <loc>${baseUrl}/blog/${slug}</loc>\n    <priority>0.6</priority>\n  </url>\n`;
  }
} catch (e) {
  console.warn("Could not read blog directory or it is empty.");
}

sitemapXml += `</urlset>\n`;

writeFileSync(sitemapPath, sitemapXml, 'utf-8');
console.log(`Successfully generated ${sitemapPath}`);
