import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">
          页面未找到
        </p>
        <p className="text-sm text-muted/70 dark:text-slate-400 mb-8">
          你访问的页面不存在或已被移除
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> 返回首页
        </Link>
      </div>
    </div>
  );
}
