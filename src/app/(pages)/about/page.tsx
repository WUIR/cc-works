"use client";

import { motion } from "framer-motion";
import aboutData from "@/content/about.json";
import { Timeline } from "@/components/sections/Timeline";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              关于我
            </span>
          </h1>
          <p className="text-muted/80 dark:text-slate-400 max-w-lg mx-auto">
            了解更多关于我的经历与技能
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 p-8 md:p-10 mb-16 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px] shrink-0">
              <img
                src={aboutData.avatar}
                alt={aboutData.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {aboutData.name}
              </h2>
              <p className="text-sm text-muted/70 dark:text-slate-400 mb-4">
                {aboutData.title}
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {aboutData.bio}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
            {aboutData.highlights.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {item.value}
                </div>
                <div className="text-xs text-muted/60 dark:text-slate-400 mt-1">{item.label}</div>
                <div className="text-[10px] text-muted/40 dark:text-slate-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              经历与项目
            </span>
          </h2>
          <Timeline items={aboutData.timeline} />
        </motion.div>
      </div>
    </div>
  );
}
