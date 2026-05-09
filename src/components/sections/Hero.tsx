"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  const nameText = "Desola";
  const nameChars = nameText.split("");

  return (
    <motion.section
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Glass background card */}
      <div className="absolute inset-8 md:inset-12 rounded-3xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="mb-8 relative"
        >
          <motion.div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              opacity: 0.2,
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px] shadow-lg shadow-primary/20">
            <img
              src="/images/avatar/head.jpg"
              alt="Desola"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-lg text-muted/80 dark:text-slate-400"
        >
          你好，我是
        </motion.p>

        {/* Animated gradient name */}
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.06,
                type: "spring",
                stiffness: 150,
                damping: 12,
              }}
              className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              style={{
                backgroundSize: "300% 300%",
                animation: "gradientShift 4s ease-in-out infinite",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="ml-2 inline-block"
          >
            👋
          </motion.span>
        </h1>

        {/* Title with typewriter cursor */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-8 text-xl font-medium sm:text-2xl"
        >
          <span className="text-muted/80 dark:text-slate-400">
            Python工程师
          </span>
          <span className="mx-2 text-primary/40">|</span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI使用爱好者
          </span>
        </motion.h2>

        {/* Glass CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-xl bg-primary/90 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary"
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
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white transition-all hover:bg-white/20"
          >
            联系我
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted/60"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-4 h-7 border border-muted/40 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-1.5 bg-muted/60 rounded-full"
              animate={{ y: [0, 4, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
