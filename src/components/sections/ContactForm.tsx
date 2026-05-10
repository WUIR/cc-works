"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle, Mail, MapPin, Globe } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "请输入姓名";
    if (!form.email.trim()) {
      newErrors.email = "请输入邮箱";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "邮箱格式不正确";
    }
    if (!form.subject.trim()) newErrors.subject = "请输入主题";
    if (!form.message.trim()) {
      newErrors.message = "请输入留言内容";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "留言内容至少 10 个字符";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    // Mailto fallback
    const mailtoLink = `mailto:desola@example.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `来自: ${form.name} (${form.email})\n\n${form.message}`
    )}`;

    try {
      window.open(mailtoLink, "_blank");
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4000);
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_300px]">
      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 p-8 space-y-6"
      >
        {/* Name & Email */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              姓名 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-white/10 border ${
                errors.name ? "border-red-400" : "border-white/20"
              } text-slate-900 dark:text-white placeholder:text-muted/50 focus:outline-none focus:border-primary/50 transition-colors`}
              placeholder="你的名字"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              邮箱 <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-white/10 border ${
                errors.email ? "border-red-400" : "border-white/20"
              } text-slate-900 dark:text-white placeholder:text-muted/50 focus:outline-none focus:border-primary/50 transition-colors`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            主题 <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-white/10 border ${
              errors.subject ? "border-red-400" : "border-white/20"
            } text-slate-900 dark:text-white placeholder:text-muted/50 focus:outline-none focus:border-primary/50 transition-colors`}
            placeholder="项目合作 / 技术咨询..."
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            留言 <span className="text-red-400">*</span>
          </label>
          <textarea
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-white/10 border ${
              errors.message ? "border-red-400" : "border-white/20"
            } text-slate-900 dark:text-white placeholder:text-muted/50 focus:outline-none focus:border-primary/50 transition-colors resize-none`}
            placeholder="请描述你的需求..."
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> 发送中...
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle className="w-4 h-4" /> 已发送
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> 发送消息
            </>
          )}
        </button>

        {status === "error" && (
          <p className="text-sm text-red-400 text-center">
            发送失败，请稍后重试
          </p>
        )}
      </motion.form>

      {/* Sidebar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 p-6 space-y-5">
          <h3 className="font-semibold text-slate-900 dark:text-white">联系方式</h3>

          <a
            href="mailto:desola@example.com"
            className="flex items-center gap-3 text-sm text-muted/80 dark:text-slate-400 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            desola@example.com
          </a>

          <div className="flex items-start gap-3 text-sm text-muted/80 dark:text-slate-400">
            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>中国</span>
          </div>

          <a
            href="https://github.com/desola"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted/80 dark:text-slate-400 hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4 text-primary" />
            github.com/desola
          </a>
        </div>

        <div className="rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 p-6">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">回复时间</h3>
          <p className="text-sm text-muted/80 dark:text-slate-400 leading-relaxed">
            通常在 24 小时内回复。项目合作请尽量详细描述需求。
          </p>
        </div>
      </motion.div>
    </div>
  );
}
