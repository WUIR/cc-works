# 编码风格规则

## TypeScript
- 开启 strict 模式，禁止使用 `any`
- 优先使用 `interface` 而非 `type` 定义对象类型
- 使用 `const` 和 `let`，禁止使用 `var`
- 函数返回值必须显式标注类型

## React / Next.js
- 全部使用函数组件 + Hooks，禁止 class 组件
- 严格区分 Server Component 和 Client Component（只有交互性组件使用 `'use client'`）
- 优先使用 Server Component，仅在需要交互/状态/hooks 时使用 Client Component
- 所有图片必须使用 `next/image`，禁止使用 `<img>` 标签
- 图片默认懒加载

## 样式
- 统一使用 Tailwind CSS utility classes
- 禁止 CSS Modules、styled-components 或任何 CSS-in-JS 方案
- 自定义样式使用 Tailwind 配置扩展而非手写 CSS

## 导入顺序
按以下分组，每组之间空行分隔：
1. 第三方库（react, next, framer-motion, lucide-react 等）
2. 内部模块（`@/components/`, `@/lib/`, `@/hooks/` 等）
3. 类型导入（`import type { ... }`）

## 代码风格
- 使用单引号，行尾分号
- 缩进 2 空格
- 行最大长度 100 字符
- 尾逗号（多行时）
