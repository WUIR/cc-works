"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "Python", level: 90, color: "from-blue-400 to-blue-600" },
  { name: "AI / ML", level: 85, color: "from-purple-400 to-pink-500" },
  { name: "FastAPI", level: 80, color: "from-emerald-400 to-teal-500" },
  { name: "Django", level: 85, color: "from-green-500 to-emerald-700" },
  { name: "PyQt6", level: 75, color: "from-cyan-400 to-blue-500" },
  { name: "MCP / LangChain", level: 80, color: "from-orange-400 to-red-500" },
];

function AnimatedCounter({ to, duration = 2000 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(to / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function Skills() {
  return (
    <section className="bg-surface dark:bg-slate-900 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            技术栈
          </h2>
          <p className="mt-4 text-muted dark:text-slate-400">
            我熟练掌握的技术栈
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-xl bg-white dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-lg border border-transparent hover:border-primary/20 transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-semibold text-slate-900 dark:text-white">
                  {skill.name}
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sm font-mono text-muted dark:text-slate-400 tabular-nums"
                >
                  <AnimatedCounter to={skill.level} />
                  %
                </motion.span>
              </div>
              {/* Progress Bar */}
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
