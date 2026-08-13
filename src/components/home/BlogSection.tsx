import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { images } from "@/lib/assets";
import { Link } from "@tanstack/react-router";
import { getAllPosts } from "@/lib/blog";

const BlogSection = () => {
  const posts = getAllPosts().slice(0, 3);
  const recentArticles = posts.map((post, index) => ({
    id: index,
    title: post.title,
    excerpt: post.excerpt,
    category: "ARTIGO",
    date: post.date,
    readTime: post.readTime,
    author: post.author,
    link: `/blog/${post.slug}`,
    image: post.coverImage,
    authorImage: images.autorAvatar,
  }));

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-[#F5F3EF]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[#C85A3A] font-bold tracking-widest text-sm uppercase mb-4 block">
              Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] font-serif leading-tight">
              Blog & Artigos
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center text-[#001F3F] font-semibold hover:text-[#C85A3A] transition-colors gap-2"
          >
            Ver todos os artigos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <Link to={article.link} className="relative overflow-hidden h-56 block">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-[#C85A3A] uppercase tracking-wider shadow-sm">
                  {article.category}
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium uppercase tracking-wide">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>

                <Link to={article.link}>
                  <h3 className="text-xl font-bold text-[#001F3F] font-serif mb-3 group-hover:text-[#C85A3A] transition-colors leading-tight">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow font-light">
                  {article.excerpt}
                </p>

                <div className="pt-5 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src={article.authorImage}
                        alt={article.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs font-bold text-[#001F3F]">{article.author}</span>
                  </div>

                  <Link
                    to={article.link}
                    className="inline-flex items-center text-[#C85A3A] font-semibold text-sm group-hover:gap-2 gap-1 transition-all duration-300"
                  >
                    Ler artigo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
