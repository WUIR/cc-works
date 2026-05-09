"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 p-6 shadow-sm hover:shadow-lg transition-all"
    >
      {/* Date */}
      <div className="flex items-center gap-2 mb-3 text-xs text-muted/60 dark:text-slate-400">
        <Calendar className="w-3.5 h-3.5" />
        <time>{post.date}</time>
      </div>

      {/* Title */}
      <Link href={`/blog/${post.slug}`}>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
      </Link>

      {/* Excerpt */}
      <p className="text-sm text-muted/80 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-full bg-primary/5 dark:bg-primary/10 text-primary border border-primary/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Read More */}
      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-primary/80 hover:text-primary transition-colors"
      >
        阅读更多
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.article>
  );
}
