# 命名约定

## 文件命名
| 场景 | 风格 | 示例 |
|------|------|------|
| React 组件 | PascalCase | `ProjectCard.tsx` |
| 页面路由 | kebab-case | `not-found.tsx` |
| 工具/Hooks | kebab-case | `theme-provider.tsx`, `use-scroll-position.ts` |
| 数据内容 | kebab-case | `projects.ts` |

## 代码命名
| 场景 | 风格 | 示例 |
|------|------|------|
| 组件 | PascalCase | `HeroSection`, `ProjectCard` |
| 函数 | camelCase | `getProjects()`, `handleSubmit()` |
| 变量 | camelCase | `isMobile`, `filteredProjects` |
| 常量 | UPPER_SNAKE_CASE | `SITE_URL`, `MAX_ITEMS` |
| 类型/接口 | PascalCase | `Project`, `BlogPost`, `SiteConfig` |
| Props | PascalCase + Props | `ProjectCardProps` |
| 事件处理 | handle + 动作 | `handleClick`, `handleSubmit` |

## 导出规范
- 组件文件：默认导出（`export default`）
- 工具函数：命名导出（`export const`）
- 类型定义：命名导出（`export type` / `export interface`）
- 内容数据：命名导出（`export const projects = [...]`）

## 目录约定
- 每个组件文件只包含一个主要组件
- 页面组件放在 `src/app/` 下对应路由目录
- 所有内容数据放在 `src/content/`，禁止在组件中硬编码文案
- API 路由统一放在 `src/app/api/` 下
