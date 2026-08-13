import { parse } from 'yaml';

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
  
  const ptMonths = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ];

  const formatPtDate = (isoDate: string | Date) => {
    // gray-matter can parse YAML dates as Date objects directly
    let dateStr = isoDate;
    if (isoDate instanceof Date) {
      dateStr = isoDate.toISOString().split('T')[0];
    } else if (typeof isoDate !== 'string') {
      return '';
    }
    
    // Expects YYYY-MM-DD
    const parts = (dateStr as string).split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const monthIdx = parseInt(parts[1], 10) - 1;
      const day = parts[2];
      return `${day} ${ptMonths[monthIdx]} ${year}`;
    }
    return dateStr as string; // fallback
  };
  
  const parseFrontmatter = (fileContent: string) => {
    const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) return { data: {}, content: fileContent };
    
    try {
      const data = parse(match[1]) || {};
      return { data, content: match[2] };
    } catch (e) {
      console.error("Error parsing frontmatter YAML:", e);
      return { data: {}, content: match[2] || fileContent };
    }
  };
  
  const posts = Object.entries(mdFiles).map(([path, rawContent]) => {
    const slug = path.split('/').pop()?.replace(/\.md$/, '') || '';
    const { data, content } = parseFrontmatter(rawContent as string);
    
    return {
      slug,
      title: data.title || '',
      subtitle: data.subtitle || '',
      date: formatPtDate(data.date),
      _rawDate: data.date instanceof Date ? data.date.toISOString() : (data.date || ''), // keep raw date for sorting
      readTime: data.readTime || '',
      author: data.author || 'Filipe Chicarino',
      coverImage: data.coverImage || '',
      seoTitle: data.seoTitle || '',
      seoDescription: data.seoDescription || '',
      excerpt: data.excerpt || content.substring(0, 150) + '...', // Fallback to content snippet
      content: content
    };
  });
  
  posts.sort((a, b) => {
    const timeA = new Date(a._rawDate).getTime();
    const timeB = new Date(b._rawDate).getTime();
    if (!isNaN(timeA) && !isNaN(timeB)) {
      return timeB - timeA;
    }
    return 0;
  });
  
  // Clean up _rawDate
  return posts.map(({ _rawDate, ...rest }) => rest) as BlogPost[];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
