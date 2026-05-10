# ccWorks — 个人作品集网站

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com)

Desola 的个人作品集网站，展示 Python / AI 项目与技术博客。

**在线地址**: [ccworks-site-6frg85merr.edgeone.app](https://ccworks-site-6frg85merr.edgeone.app)

---

## 技术栈

- **框架**: Next.js 16 (App Router, SSG)
- **语言**: TypeScript 5.9 (strict)
- **样式**: Tailwind CSS 4 + 毛玻璃设计系统
- **动画**: Framer Motion 12
- **图标**: Lucide React
- **渲染**: marked (Markdown 博客文章)

## 页面

| 页面 | 路由 | 说明 |
|------|:----:|------|
| 首页 | `/` | Hero + 精选项目 + 技能展示 |
| 关于 | `/about` | 个人简介 + 经历时间线 |
| 项目 | `/projects` | 项目卡片 + 标签筛选 |
| 博客 | `/blog` | 技术文章列表 + 标签筛选 |
| 博客详情 | `/blog/[slug]` | Markdown 渲染文章 |
| 联系 | `/contact` | 联系表单 + 联系方式 |

## 快速开始

```bash
pnpm install
pnpm dev        # 开发 → http://localhost:3000
pnpm build      # 构建 → out/
```

---

## 更新内容

内容数据文件位于 `src/content/`：

| 文件 | 用途 |
|------|------|
| `projects.json` | 项目列表 |
| `about.json` | 个人信息 + 时间线 |
| `blog.json` | 博客文章 (Markdown 全文) |

修改后构建并部署：

```bash
pnpm build
# 上传 out/ 目录或 git push 自动部署
```

## 部署

部署在腾讯云 EdgeOne Pages，关联 GitHub 仓库后 `git push` 自动构建部署。

MIT © 2026 Desola
