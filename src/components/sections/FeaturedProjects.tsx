"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";
import projectsData from "@/content/projects.json";

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

const featuredProjects: Project[] = projectsData.featured;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 120 },
  },
};

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set((px - 0.5) * 10);
    y.set((py - 0.5) * -10);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX: springY, rotateY: springX }}
      className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
    >
      {children}
    </motion.div>
  );
}

export function FeaturedProjects() {
  return (
    <section className="py-20 relative">
      {/* Subtle background line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            精选项目
          </h2>
          <p className="mt-4 text-muted dark:text-slate-400">
            我的一些代表性项目作品
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 perspective-[1000px]"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={cardVariants} className="group">
              <TiltCard>
                {/* Cover Image */}
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10">
                  {project.cover ? (
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-4xl text-primary/50">
                      📁
                    </div>
                  )}
                  {/* Type Badge */}
                  {project.type && (
                    <span className="absolute right-3 top-3 rounded-full bg-white/90 dark:bg-slate-800/90 px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm backdrop-blur-sm">
                      {project.type}
                    </span>
                  )}
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </motion.h3>
                  <p className="mb-4 text-sm text-muted dark:text-slate-400 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary dark:bg-primary/20 cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-1 text-sm text-muted hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                      源码
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-1 text-sm text-muted hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      演示
                    </motion.a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href="/projects"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            查看所有项目
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
