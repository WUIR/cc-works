"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";
import projectsData from "@/content/projects.json";
import { FilterBar } from "@/components/sections/FilterBar";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  cover: string;
  github: string;
  demo: string;
  type?: string;
}

const allProjects: Project[] = projectsData.all;

// Extract unique tags for filtering
const allTags = Array.from(
  new Set(allProjects.flatMap((p) => p.tags))
).sort();

const categories = ["全部", ...allTags];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("全部");

  const filtered = useMemo(() => {
    if (activeFilter === "全部") return allProjects;
    return allProjects.filter((p) => p.tags.includes(activeFilter));
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
              项目
            </span>
          </h1>
          <p className="text-muted/80 dark:text-slate-400 max-w-lg mx-auto">
            我的项目作品集，点击标签筛选
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

        {/* Project Grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Cover */}
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10">
                  {project.cover ? (
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-3xl text-primary/30">
                      📁
                    </div>
                  )}
                  {project.type && (
                    <span className="absolute right-3 top-3 px-3 py-1 rounded-full text-xs font-medium bg-white/20 dark:bg-black/20 backdrop-blur-md text-white">
                      {project.type}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted/80 dark:text-slate-400 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-sm text-muted/70 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Globe className="h-4 w-4" /> 源码
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 text-sm text-muted/70 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" /> 演示
                    </a>
                  </div>
                </div>
              </motion.article>
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
            该标签下暂无项目
          </motion.p>
        )}
      </div>
    </div>
  );
}
