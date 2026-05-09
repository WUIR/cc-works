"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-bold text-slate-900 dark:text-white transition-colors"
    >
      ccWorks
    </Link>
  );
}
