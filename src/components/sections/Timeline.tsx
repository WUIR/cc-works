"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Central line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-transparent" />

      <div className="space-y-12">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start gap-6 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary border-2 border-white dark:border-slate-900 z-10 mt-2" />

              {/* Spacer for center alignment */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content card */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                <div className="rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 p-6 shadow-sm hover:shadow-lg transition-all">
                  {/* Year badge */}
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-mono font-medium rounded-full bg-primary/10 text-primary backdrop-blur-sm">
                    {item.year}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-muted/70 dark:text-slate-400 mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-primary/5 dark:bg-primary/10 text-primary border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
