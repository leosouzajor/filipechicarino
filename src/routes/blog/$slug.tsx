import { createFileRoute, Link } from '@tanstack/react-router';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PullQuote from '@/components/site/PullQuote';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '@/lib/blog';
import { images } from '@/lib/assets';

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        { title: loaderData.seoTitle },
        { name: "description", content: loaderData.seoDescription },
        { property: "og:title", content: loaderData.seoTitle },
        { property: "og:description", content: loaderData.seoDescription },
        { property: "og:url", content: `https://filipechicarino.com.br/blog/${loaderData.slug}` },
        { property: "og:image", content: loaderData.coverImage },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: loaderData.coverImage },
      ],
      links: [
        { rel: "canonical", href: `https://filipechicarino.com.br/blog/${loaderData.slug}` }
      ]
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Header />
      
      <article className="pt-40 pb-24 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-4xl bg-white p-8 md:p-16 rounded-2xl shadow-sm">
          <Link to="/blog" className="inline-flex items-center text-[#C85A3A] font-semibold mb-8 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Blog
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium uppercase tracking-wide">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] font-serif mb-6 leading-tight">
            {post.title}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 font-light mb-10 leading-relaxed border-l-4 border-[#C85A3A] pl-6">
            {post.subtitle}
          </h2>

          <div className="flex items-center gap-3 mb-12 pb-12 border-b border-gray-100">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              <img src={images.autorAvatar} alt={post.author} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="block font-bold text-[#001F3F]">{post.author}</span>
              <span className="text-sm text-gray-500">Facilitador de Comunicação</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-[1.8] font-light">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-6">{children}</p>,
                h2: ({ children }) => <h2 className="text-2xl font-bold text-[#001F3F] mt-10 mb-4 font-serif">{children}</h2>,
                ul: ({ children }) => <ul className="list-disc pl-6 space-y-4 mb-6">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 space-y-4 mb-6">{children}</ol>,
                li: ({ children }) => <li>{children}</li>,
                strong: ({ children }) => <strong>{children}</strong>,
                em: ({ children }) => <em>{children}</em>,
                a: ({ href, children }) => <a href={href} className="text-[#C85A3A] hover:underline" target="_blank" rel="noreferrer">{children}</a>,
                blockquote: ({ children }) => {
                  // In ReactMarkdown, children of blockquote often come wrapped in <p> if they are standard paragraphs.
                  // PullQuote styling assumes plain text or internal elements.
                  // To keep exact fidelity, we can pass children directly into PullQuote.
                  return <PullQuote>{children}</PullQuote>;
                },
                img: ({ src, alt }) => <img src={src} alt={alt} className="w-full h-auto rounded-lg mb-6 shadow-sm" />
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
