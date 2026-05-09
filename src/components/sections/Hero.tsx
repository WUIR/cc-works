"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(59,130,246,0.08), transparent)",
            "radial-gradient(ellipse 80% 60% at 80% 60%, rgba(139,92,246,0.08), transparent)",
            "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(59,130,246,0.08), transparent)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 dark:opacity-10"
        style={{
          background: "radial-gradient(circle, #3b82f6, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20 dark:opacity-10"
        style={{
          background: "radial-gradient(circle, #8b5cf6, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Avatar with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="mb-8 relative"
        >
          <motion.div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              opacity: 0.3,
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-slate-900 text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
              D
            </div>
          </div>
        </motion.div>

        {/* Staggered text reveal */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-lg text-muted dark:text-slate-400"
          >
            你好，我是
          </motion.p>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150 }}
          className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span
            className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 200%" }}
          >
            Desola
          </span>
          <span className="ml-2 inline-block animate-bounce">👋</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 text-xl font-medium text-muted dark:text-slate-400 sm:text-2xl"
        >
          Python工程师 | AI使用爱好者
        </motion.h2>

        {/* CTA Buttons with hover lift */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-primary/90"
          >
            查看项目
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.span>
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white transition-all hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            联系我
          </motion.a>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted dark:text-slate-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-5 h-8 border-2 border-muted dark:border-slate-500 rounded-full flex justify-center pt-2"
          >
            <motion.div
              className="w-1 h-2 bg-muted dark:bg-slate-500 rounded-full"
              animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
