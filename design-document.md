# 个人作品集网站 — 设计文档

> **版本**: v1.0  
> **创建日期**: 2026-05-09  
> **状态**: 定稿

---

## 1. 项目概述

### 1.1 目标

构建一个个人作品集网站，展示个人技能、项目经验、博客文章以及联系方式。该网站可作为数字名片，帮助拓展职业机会。

### 1.2 核心功能

| 功能 | 优先级 | 描述 |
|------|--------|------|
| 首页/Hero | P0 | 个人介绍、头像、CTA 按钮 |
| 项目展示 | P0 | 项目卡片网格，支持筛选 |
| 技能展示 | P0 | 技能标签/进度条分组展示 |
| 关于我 | P1 | 个人经历、教育、证书 |
| 联系方式 | P1 | 联系表单 + 社交链接 |
| 深色/浅色模式 | P1 | 主题切换 |
| 响应式设计 | P0 | 桌面/平板/手机全适配 |
| 页面过渡动画 | P2 | Framer Motion 驱动的流畅过渡 |
| SEO | P0 | 开箱即用的 SEO 优化 |

---

## 2. 技术栈 (严格约束)

| 层面 | 技术 | 版本约束 | 理由 |
|------|------|----------|------|
| 框架 | Next.js | ^15.x | App Router, SSR/SSG, 优秀 SEO |
| 语言 | TypeScript | ^5.x | 严格模式, 类型安全 |
| 样式 | Tailwind CSS | ^4.x | Utility-first, 快速开发 |
| 动画 | Framer Motion | ^12.x | React 动画标准库 |
| 图标 | Lucide React | ^0.x | 轻量、树摇优化 |
| 内容 | MDX / 本地 Markdown | - | 无需外部 CMS |
| 代码规范 | ESLint + Prettier | 最新 | 统一代码风格 |
| 包管理 | pnpm | ^10.x | 更快、更安全 |

### 2.1 技术约束

1. **禁止引入 jQuery、Bootstrap 等重库** — 所有 UI 组件手写，保持轻量。
2. **所有组件必须为 TypeScript 编写**，禁止使用 `any`，严格类型检查。
3. **禁止使用 class 组件**，仅使用函数组件 + Hooks。
4. **禁止使用 CSS Modules / styled-components** — 统一使用 Tailwind CSS。
5. **所有图片必须优化** — 使用 Next.js `next/image`。
6. **禁止硬编码文案** — 所有文本内容集中管理于 `src/content/` 目录。
7. **所有 API 路由必须有错误处理** — 返回统一的错误响应格式。
8. **提交前必须通过 ESLint + TypeScript 检查**。

---

## 3. 项目目录结构

```
ccWorks/
├── public/                    # 静态资源
│   ├── images/                # 图片
│   │   ├── projects/          # 项目截图
│   │   ├── avatar/            # 头像
│   │   └── og-image.png       # SEO 分享图
│   └── favicon.ico
├── src/
│   ├── app/                   # Next.js App Router 路由
│   │   ├── (pages)/           # 路由组（共享布局）
│   │   │   ├── about/         # /about
│   │   │   ├── projects/      # /projects
│   │   │   └── blog/          # /blog 及 /blog/[slug]
│   │   ├── layout.tsx         # 根布局
│   │   ├── page.tsx           # 首页
│   │   ├── not-found.tsx      # 404 页面
│   │   ├── sitemap.ts         # SEO - 站点地图
│   │   └── robots.ts          # SEO - 爬虫规则
│   ├── components/            # 可复用组件
│   │   ├── ui/                # 基础 UI（Button, Card, Badge...）
│   │   ├── layout/            # 布局（Header, Footer, Sidebar...）
│   │   ├── sections/          # 段落组件（Hero, Skills, Projects...）
│   │   └── shared/            # 共享组件（ThemeToggle, ScrollToTop...）
│   ├── content/               # 内容管理
│   │   ├── projects.ts        # 项目数据
│   │   ├── skills.ts          # 技能数据
│   │   └── site.ts            # 站点配置
│   ├── lib/                   # 工具函数
│   │   ├── utils.ts           # 通用工具
│   │   └── constants.ts       # 常量
│   ├── hooks/                 # 自定义 Hooks
│   │   ├── useTheme.ts        # 主题 Hook
│   │   └── useScrollPosition.ts
│   └── types/                 # TypeScript 类型定义
│       └── index.ts
├── tailwind.config.ts         # Tailwind 配置
├── next.config.ts             # Next.js 配置
├── tsconfig.json              # TypeScript 配置
├── eslint.config.mjs          # ESLint 配置
├── .prettierrc                # Prettier 配置
└── package.json
```

---

## 4. 设计系统

### 4.1 配色方案

```typescript
// 浅色模式
primary:   '#3B82F6'   // 蓝色 500
secondary: '#8B5CF6'   // 紫色 500
accent:    '#F59E0B'   // 琥珀色 500
background:'#FFFFFF'
surface:   '#F9FAFB'   // 灰色 50
text:      '#111827'   // 灰色 900
muted:     '#6B7280'   // 灰色 500

// 深色模式
background:'#0F172A'   // 石板灰 900
surface:   '#1E293B'   // 石板灰 800
text:      '#F1F5F9'   // 石板灰 100
muted:     '#94A3B8'   // 石板灰 400
```

### 4.2 排版

| 层级 | 字号(桌面) | 字号(移动端) | 字重 | 行高 |
|------|-----------|-------------|------|------|
| H1 | 4.5rem / 72px | 2.5rem / 40px | 800 | 1.1 |
| H2 | 3rem / 48px | 2rem / 32px | 700 | 1.2 |
| H3 | 2rem / 32px | 1.5rem / 24px | 600 | 1.3 |
| Body | 1rem / 16px | 1rem / 16px | 400 | 1.6 |
| Small | 0.875rem / 14px | 0.875rem / 14px | 400 | 1.5 |

### 4.3 间距

- **基准单位**: 4px
- **常用间距**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96 (px)
- **容器最大宽度**: 1280px (桌面), 居中布局

### 4.4 圆角

| Token | 值 | 用途 |
|-------|-----|------|
| `rounded-sm` | 4px | 小元素 |
| `rounded-md` | 8px | 卡片、按钮 |
| `rounded-lg` | 12px | 大卡片、弹窗 |
| `rounded-xl` | 16px | 容器 |
| `rounded-full` | 9999px | 头像、标签 |

### 4.5 阴影

| Token | 用途 |
|-------|------|
| `shadow-sm` | 浅卡片阴影 |
| `shadow-md` | 弹出层 |
| `shadow-lg` | 模态框 |
| `shadow-xl` | 悬浮效果 |

---

## 5. 路由设计

| 路径 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | Hero + 精选项目 + 技能概览 + 联系 CTA |
| `/about` | 关于我 | 个人经历、教育、证书、兴趣 |
| `/projects` | 项目展示 | 所有项目卡片网格，带分类筛选 |
| `/blog` | 博客列表 | 博客文章列表 |
| `/blog/[slug]` | 博客详情 | MDX 渲染 |
| `/contact` | 联系我 | 联系表单 |
| `*` | 404 | 自定义 404 页面 |

### 5.1 导航结构

```
[Logo] 首页 | 项目 | 博客 | 关于 | 联系 | [深色模式切换]
```

---

## 6. 组件树

```
RootLayout
├── ThemeProvider
│   ├── Header
│   │   ├── Logo
│   │   ├── Navigation (Desktop)
│   │   ├── MobileMenu (Hamburger)
│   │   └── ThemeToggle
│   ├── Main (children)
│   │   ├── HomePage
│   │   │   ├── HeroSection
│   │   │   │   ├── Avatar
│   │   │   │   ├── TypingAnimation (姓名/头衔)
│   │   │   │   └── CTAButtons
│   │   │   ├── FeaturedProjects
│   │   │   │   └── ProjectCard[]
│   │   │   ├── SkillHighlights
│   │   │   │   └── SkillBadge[]
│   │   │   └── ContactCTA
│   │   ├── AboutPage
│   │   │   ├── Timeline (经历)
│   │   │   └── SkillBars[]
│   │   ├── ProjectsPage
│   │   │   ├── FilterBar
│   │   │   └── ProjectGrid
│   │   │       └── ProjectCard[]
│   │   ├── BlogPage
│   │   │   └── BlogCard[]
│   │   ├── BlogPostPage
│   │   │   └── MDXContent
│   │   ├── ContactPage
│   │   │   ├── ContactForm
│   │   │   └── SocialLinks
│   │   └── NotFound
│   └── Footer
│       ├── SocialLinks
│       └── Copyright
```

---

## 7. 数据模型

### 7.1 项目 (Project)

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'other';
  demoUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  date: string; // ISO 8601
}
```

### 7.2 技能 (Skill)

```typescript
interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'soft';
  icon?: string;
}
```

### 7.3 博客 (BlogPost)

```typescript
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: number; // 分钟
  published: boolean;
}
```

### 7.4 站点配置 (SiteConfig)

```typescript
interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
    email: string;
    social: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      // 其他平台
    };
  };
}
```

---

## 8. 开发约束

### 8.1 代码规范

1. **命名规范**:
   - 组件: PascalCase (e.g., `ProjectCard.tsx`)
   - 文件: kebab-case (e.g., `theme-provider.tsx`)
   - 函数/变量: camelCase (e.g., `getProjects()`, `isMobile`)
   - 常量: UPPER_SNAKE_CASE (e.g., `SITE_URL`)
   - 类型/接口: PascalCase 前加 `I` 前缀 (e.g., `IProject`), 或纯 PascalCase

2. **导出规范**:
   - 每个组件文件默认导出一个组件
   - 工具函数使用命名导出

3. **导入顺序**:
   ```
   // 1. 第三方库
   import { motion } from 'framer-motion';
   // 2. 内部模块
   import { ProjectCard } from '@/components/ui/ProjectCard';
   // 3. 类型
   import type { IProject } from '@/types';
   // 4. 样式 (无，统一 Tailwind)
   ```

### 8.2 Git 规范

- **分支模型**: `main` → `feature/<name>`, `fix/<name>`
- **提交信息**: `type(scope): description` (遵循 Conventional Commits)
  - `feat`: 新功能
  - `fix`: 修复
  - `style`: 样式调整
  - `refactor`: 重构
  - `docs`: 文档
  - `chore`: 杂项

### 8.3 性能约束

- Lighthouse 评分 ≥ 95 (所有指标)
- 首页 FCP < 1.5s, LCP < 2.5s
- 所有图片使用懒加载
- 禁用未使用的 JS bundle (Tree Shaking)
- 使用 `next/dynamic` 按需加载非首屏组件

---

## 9. 迭代计划

| 阶段 | 内容 | 预估工时 |
|------|------|---------|
| **Phase 0** | 项目初始化 + 基础配置 | 30 min |
| **Phase 1** | 布局框架 (Header, Footer, Theme) | 1h |
| **Phase 2** | 首页 Hero + Skills + Featured | 1.5h |
| **Phase 3** | 关于 + 时间线 | 1h |
| **Phase 4** | 项目展示页 + 筛选 | 1.5h |
| **Phase 5** | 博客系统 (MDX) | 2h |
| **Phase 6** | 联系表单 | 1h |
| **Phase 7** | 动画 + 过渡效果 | 1h |
| **Phase 8** | SEO + 性能优化 | 1h |
| **Phase 9** | 内容填充 + 部署 | 1h |
| **总计** | | **~11h** |

---

## 10. 页面布局线框图

### 首页 (Desktop)

```
┌─────────────────────────────────────────────┐
│  Header: [Logo] 首页 项目 博客 关于 联系 [🌙]│
├─────────────────────────────────────────────┤
│                                             │
│   🖼️ Avatar                                 │
│   # Hi, I'm [姓名] 👋                       │
│   ## 前端工程师 | 全栈开发者                  │
│   [查看项目] [联系我]                        │
│                                             │
│   ─── 精选项目 ───                          │
│   ┌──────┐ ┌──────┐ ┌──────┐               │
│   │ Card │ │ Card │ │ Card │               │
│   └──────┘ └──────┘ └──────┘               │
│                                             │
│   ─── 技术栈 ───                            │
│   [React] [Node.js] [TypeScript] ...        │
│                                             │
│   ─── 联系我 ───                            │
│   有项目合作？                                │
│   [联系我 →]                                 │
│                                             │
├─────────────────────────────────────────────┤
│  Footer: © 2026 [姓名] · [GitHub] [LinkedIn]│
└─────────────────────────────────────────────┘
```

---

### 首页 (Mobile)

```
┌─────────────┐
│ [☰]   [🌙]  │
├─────────────┤
│  🖼️ Avatar  │
│  Hi, I'm    │
│  [姓名] 👋  │
│  [查看项目] │
│  [联系我]    │
├─────────────┤
│ 精选项目    │
│ ┌─────────┐ │
│ │  Card   │ │
│ └─────────┘ │
│ ┌─────────┐ │
│ │  Card   │ │
│ └─────────┘ │
├─────────────┤
│  技术栈     │
│ [React]     │
│ [Node.js]   │
│ [TS] ...    │
├─────────────┤
│ 联系我      │
│ [联系我 →]  │
├─────────────┤
│ Footer      │
└─────────────┘
```

---

## 11. 附录

### 11.1 依赖安装命令

```bash
# 创建项目
pnpm create next-app . --typescript --tailwind --eslint --app --src-dir

# 安装额外依赖
pnpm add framer-motion lucide-react
pnpm add -D @types/node prettier eslint-config-prettier
```

### 11.2 Tailwind 扩展配置

```typescript
// tailwind.config.ts 中扩展
theme: {
  extend: {
    colors: {
      primary: { /* ... */ },
      secondary: { /* ... */ },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    maxWidth: {
      container: '1280px',
    },
  },
}
```
