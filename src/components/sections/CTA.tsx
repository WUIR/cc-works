"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary"
        animate={{
          background: [
            "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            "linear-gradient(135deg, #8b5cf6, #3b82f6)",
            "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 border border-white/10 rounded-lg"
        animate={{ y: [0, 15, 0], rotate: [0, -90, -180] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="mx-auto max-w-3xl px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl"
          >
            有项目合作？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-lg text-white/80"
          >
            无论是新项目启动、技术咨询还是开发合作，欢迎联系我！
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-semibold text-primary shadow-lg transition-colors hover:bg-white/90"
          >
            联系我
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
