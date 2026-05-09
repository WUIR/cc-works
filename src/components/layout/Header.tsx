"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Logo } from "@/components/shared/Logo";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/projects", label: "项目" },
  { href: "/blog", label: "博客" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" },
];

export function Header() {
  const { scrollY } = useScroll();
  const blurActive = useTransform(scrollY, [0, 60], [0, 1]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backdropFilter: useTransform(blurActive, (v) => `blur(${v * 16}px)`),
        WebkitBackdropFilter: useTransform(blurActive, (v) => `blur(${v * 16}px)`),
      }}
    >
      {/* Glass background layer */}
      <motion.div
        className="absolute inset-0 border-b"
        style={{
          backgroundColor: useTransform(
            blurActive,
            (v) => `rgba(255, 255, 255, ${v * 0.7})`
          ),
          borderColor: useTransform(
            blurActive,
            (v) => `rgba(148, 163, 184, ${v * 0.2})`
          ),
        }}
      />
      {/* Dark mode background override */}
      <motion.div
        className="absolute inset-0 border-b hidden dark:block"
        style={{
          backgroundColor: useTransform(
            blurActive,
            (v) => `rgba(15, 23, 42, ${v * 0.8})`
          ),
          borderColor: useTransform(
            blurActive,
            (v) => `rgba(51, 65, 85, ${v * 0.4})`
          ),
        }}
      />

      <nav className="relative mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors group"
            >
              {link.label}
              <span className="absolute inset-x-3 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </Link>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </motion.header>
  );
}
