# 项目上下文

## 项目概述
个人作品集网站，展示个人技能、项目经验、博客文章以及联系方式。

## 技术栈
| 技术 | 用途 |
|------|------|
| Next.js ^15.x | 框架（App Router） |
| TypeScript ^5.x | 语言 |
| Tailwind CSS ^4.x | 样式 |
| Framer Motion ^12.x | 动画 |
| Lucide React | 图标 |
| pnpm ^10.x | 包管理 |

## 目录结构
```
src/
├── app/             # 页面路由
├── components/
│   ├── ui/          # 基础 UI 组件
│   ├── layout/      # 布局组件
│   ├── sections/    # 段落组件
│   └── shared/      # 共享组件
├── content/         # 数据内容
├── lib/             # 工具函数
├── hooks/           # 自定义 Hooks
└── types/           # 类型定义
public/
└── images/          # 静态资源
```

## 路由设计
| 路径 | 页面 |
|------|------|
| `/` | 首页（Hero + 精选项目 + 技能 + 联系 CTA） |
| `/about` | 关于我 |
| `/projects` | 项目展示（带筛选） |
| `/blog` | 博客列表 |
| `/blog/[slug]` | 博客详情 |
| `/contact` | 联系表单 |
| `*` | 404 页面 |

## 数据模型
- `Project`: id, title, description, image, tags, category, demoUrl, sourceUrl, featured, date
- `Skill`: name, level (0-100), category, icon
- `BlogPost`: slug, title, description, date, tags, readingTime, published
- `SiteConfig`: name, title, description, url, ogImage, author

## 设计系统
- 配色：蓝 #3B82F6 / 紫 #8B5CF6 / 琥珀 #F59E0B
- 容器最大宽度：1280px
- 间距基准：4px
- 响应式断点：sm: 640, md: 768, lg: 1024, xl: 1280
