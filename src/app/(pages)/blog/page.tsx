"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import blogPosts from "@/content/blog.json";
import { BlogCard } from "@/components/sections/BlogCard";
import { FilterBar } from "@/components/sections/FilterBar";

const allTags = Array.from(
  new Set(blogPosts.flatMap((p) => p.tags))
).sort();

const categories = ["全部", ...allTags];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("全部");

  const filtered = useMemo(() => {
    if (activeFilter === "全部") return blogPosts;
    return blogPosts.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              博客
            </span>
          </h1>
          <p className="text-muted/80 dark:text-slate-400 max-w-lg mx-auto">
            记录技术学习与实践心得
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FilterBar
            categories={categories}
            active={activeFilter}
            onChange={setActiveFilter}
          />
        </motion.div>

        {/* Blog Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((post, index) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <BlogCard post={post} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted/60 dark:text-slate-500 mt-16"
          >
            该标签下暂无文章
          </motion.p>
        )}
      </div>
    </div>
  );
}
