"use client";

import { motion } from "framer-motion";

interface FilterBarProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export function FilterBar({ categories, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          onClick={() => onChange(cat)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            active === cat
              ? "bg-primary text-white shadow-lg shadow-primary/25"
              : "bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10 text-slate-600 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-white/10"
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}
