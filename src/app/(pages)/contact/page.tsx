"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              联系我
            </span>
          </h1>
          <p className="text-muted/80 dark:text-slate-400 max-w-lg mx-auto">
            有项目合作或技术问题？欢迎随时联系
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </div>
  );
}
