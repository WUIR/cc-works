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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 20 },
  },
};

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set((px - 0.5) * 8);
    y.set((py - 0.5) * -8);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX: springY, rotateY: springX }}
      className="overflow-hidden rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow"
    >
      {children}
    </motion.div>
  );
}

export function FeaturedProjects() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              精选项目
            </span>
          </h2>
          <p className="mt-3 text-muted/80 dark:text-slate-400">
            我的一些代表性项目作品
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 perspective-[1000px]">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <TiltCard>
                <div className="aspect-video relative overflow-hidden">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

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
                    <motion.a
                      href={project.github}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-1 text-sm text-muted/70 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Globe className="h-4 w-4" /> 源码
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-1 text-sm text-muted/70 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" /> 演示
                    </motion.a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href="/projects"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-primary/80 hover:text-primary transition-colors"
          >
            查看所有项目
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
