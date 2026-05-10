# ccWorks — 个人作品集网站

[![Deployed on EdgeOne Pages](https://img.shields.io/badge/Deployed-EdgeOne%20Pages-0066ff)](https://ccworks-site-6frg85merr.edgeone.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com)

Desola 的个人作品集网站，展示 Python / AI 项目与博客文章的现代静态站点。

**在线地址**: [ccworks-site-6frg85merr.edgeone.app](https://ccworks-site-6frg85merr.edgeone.app)

---

## 技术栈

| 技术 | 用途 |
|------|------|
| [Next.js 16](https://nextjs.org) | React 框架 (App Router, SSG) |
| [TypeScript 5.9](https://www.typescriptlang.org) | 类型安全 (strict 模式) |
| [Tailwind CSS 4](https://tailwindcss.com) | 样式系统 (CSS 变量设计系统) |
| [Framer Motion 12](https://www.framer.com/motion) | 页面动画 (逐字弹入, 3D tilt, 数字递增) |
| [Lucide React](https://lucide.dev) | 图标库 |
| [marked](https://marked.js.org) | Markdown 渲染 (博客文章) |

## 站点结构

```
ccWorks/
├── src/
│   ├── app/                     # 路由页面
│   │   ├── page.tsx             # 首页 (/)
│   │   ├── (pages)/
│   │   │   ├── about/           # 关于 (/about)
│   │   │   ├── projects/        # 项目展示 (/projects)
│   │   │   ├── blog/            # 博客列表 (/blog)
│   │   │   │   └── [slug]/      # 博客详情 (/blog/[slug])
│   │   │   └── contact/         # 联系 (/contact)
│   │   └── layout.tsx           # 根布局
│   ├── components/
│   │   ├── layout/              # 布局组件 (Header, Footer)
│   │   ├── sections/            # 页面段落组件
│   │   └── shared/              # 共享组件 (ThemeProvider)
│   ├── content/                 # 内容数据
│   │   ├── projects.json        # 项目数据
│   │   ├── about.json           # 个人信息 + 时间线
│   │   └── blog.json            # 博客文章 (Markdown)
│   └── app/globals.css          # 全局样式 + 设计系统变量
├── public/images/               # 图片资源
├── .codebuddy/rules/            # AI 上下文工程规则
└── design-document.md           # 设计文档
```

## 页面

| 页面 | 路由 | 功能 |
|------|:----:|------|
| 首页 | `/` | Hero + 精选项目 + 技能进度 + CTA |
| 关于 | `/about` | 个人简介 + 时间线 + 数据高亮 |
| 项目 | `/projects` | 项目卡片 + 标签筛选 |
| 博客 | `/blog` | 文章列表 + 标签筛选 |
| 博客详情 | `/blog/[slug]` | Markdown 渲染 |
| 联系 | `/contact` | 表单验证 + 联系方式 |

## 设计特色

- **毛玻璃质感**: `backdrop-blur-md` 卡片 + `bg-white/10` 半透明
- **渐变文字动画**: `background-clip: text` + `gradientShift` 位移动画
- **明暗主题**: localStorage 持久化, 跟随系统偏好
- **响应式**: 移动端优先, 桌面端 1280px 容器
- **3D 卡片**: Framer Motion spring 物理引擎, 鼠标跟随倾斜

## 快速开始

```bash
# 1. 安装依赖
pnpm install

# 2. 启动开发服务器
pnpm dev
# → http://localhost:3000

# 3. 构建生产版本
pnpm build
# → out/ 目录 (静态导出)

# 4. 预览生产版本
pnpm start
```

## 更新内容

所有内容数据位于 `src/content/` 目录:

| 文件 | 修改方式 |
|------|---------|
| `projects.json` | 添加/编辑项目对象 |
| `about.json` | 修改个人信息、时间线 |
| `blog.json` | 添加/编辑文章 (Markdown) |

修改后构建并部署到 EdgeOne Pages:

```bash
pnpm build
# 上传 out/ 目录到 EdgeOne Pages
```

## 部署

部署在 **腾讯云 EdgeOne Pages**:

- **平台**: [EdgeOne Pages](https://console.cloud.tencent.com/edgeone/pages)
- **构建命令**: `pnpm build`
- **输出目录**: `out/`
- **域名**: `ccworks-site-6frg85merr.edgeone.app`

关联 GitHub 仓库后可实现 `git push` → 自动构建部署。

## 许可证

MIT © 2026 Desola
