import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: string;
  coverImage: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  // Use import.meta.glob to load all markdown files in content/blog
  const mdFiles = import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default', eager: true });
  
  const posts = Object.entries(mdFiles).map(([path, rawContent]) => {
    const slug = path.split('/').pop()?.replace(/\.md$/, '') || '';
    const { data, content } = matter(rawContent as string);
    
    return {
      slug,
      title: data.title || '',
      subtitle: data.subtitle || '',
      date: data.date || '',
      readTime: data.readTime || '',
      author: data.author || 'Filipe Chicarino',
      coverImage: data.coverImage || '',
      seoTitle: data.seoTitle || '',
      seoDescription: data.seoDescription || '',
      excerpt: data.excerpt || content.substring(0, 150) + '...', // Fallback to content snippet
      content: content
    };
  });
  
  // Sort by date descending (assuming dates are in a parsable format or can just be sorted string-wise. Wait, dates are like "22 Mar 2026", parsing might need custom logic.
  // Actually they are just strings like "22 Mar 2026", string sort might not work well for dates.
  // For simplicity, we can rely on standard Date.parse if needed.
  // Let's implement a simple descending sort by parsing Date.
  const monthMap: Record<string, number> = {
    'jan': 0, 'fev': 1, 'mar': 2, 'abr': 3, 'mai': 4, 'jun': 5,
    'jul': 6, 'ago': 7, 'set': 8, 'out': 9, 'nov': 10, 'dez': 11
  };

  posts.sort((a, b) => {
    const parseDate = (dStr: string) => {
      const parts = dStr.toLowerCase().split(' ');
      if (parts.length >= 3) {
        const day = parseInt(parts[0], 10);
        const month = monthMap[parts[1]] ?? 0;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day).getTime();
      }
      return 0;
    };
    
    return parseDate(b.date) - parseDate(a.date);
  });
  
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
