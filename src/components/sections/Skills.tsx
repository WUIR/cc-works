"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Python", level: 90, color: "from-blue-400 to-blue-600" },
  { name: "AI / ML", level: 85, color: "from-purple-400 to-pink-500" },
  { name: "FastAPI", level: 80, color: "from-emerald-400 to-teal-500" },
  { name: "Django", level: 85, color: "from-green-500 to-emerald-700" },
  { name: "PyQt6", level: 75, color: "from-cyan-400 to-blue-500" },
  { name: "MCP / LangChain", level: 80, color: "from-orange-400 to-red-500" },
];

function AnimatedCounter({ to }: { to: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(to / 125);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, to]);

  return <span ref={ref}>{count}</span>;
}

export function Skills() {
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
              技术栈
            </span>
          </h2>
          <p className="mt-3 text-muted/80 dark:text-slate-400">
            我熟练掌握的技术栈
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-semibold text-slate-900 dark:text-white">
                  {skill.name}
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xs font-mono text-muted/60 dark:text-slate-400 tabular-nums"
                >
                  <AnimatedCounter to={skill.level} />%
                </motion.span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/20 dark:bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
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
