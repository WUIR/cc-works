# 部署方案对比

> 生成日期: 2026-05-10
> 适用项目: ccWorks (Next.js 16 个人作品集)

---

## 方案总览

| 平台 | 类型 | 免费额度 | 中国大陆访问 | Next.js 支持 |
|------|------|---------|:-----------:|:-----------:|
| **Vercel** | 云平台(SSR/SSG) | 100GB 带宽/月 | ❌ 慢/不稳定 | ✅ 原生 |
| **腾讯云 EdgeOne Pages** | 边缘静态托管 | 5GB 存储 + 50GB CDN/月 | ✅ 快 | ✅ SSG 输出 |
| **腾讯云 CloudBase** | 云开发(Serverless) | 基础套餐免费 | ✅ 快 | ✅ 支持 SSR |
| **Cloud Studio** | 远程开发+部署 | 工作空间时长限制 | ✅ 快 | ⚠️ 需手动配置 |

---

## 推荐方案

```
推荐顺序:
  1️⃣ EdgeOne Pages  — 国内访问快, 静态部署简单
  2️⃣ Vercel          — Next.js 原生支持, 海外部署首选
  3️⃣ CloudBase       — 需要后端/SSR 时选择
```

对本项目（ccWorks 个人作品集）：
- 所有页面已预渲染为静态 (SSG)
- 不需要 SSR / 后端 API
- 目标用户主要在国内

→ **EdgeOne Pages 是最佳选择**

---

## 部署与更新流程

### 首次部署

#### 方式一：GitHub 自动部署（推荐）

```bash
# 1. 推送代码到 GitHub 仓库
git remote add origin https://github.com/你的用户名/ccworks.git
git branch -M main
git push -u origin main

# 2. 登录 EdgeOne Pages 控制台
# 3. 创建项目 → 关联 GitHub 仓库
# 4. 设置构建命令: pnpm build
# 5. 设置输出目录: .next  (或 out/ 如果使用静态导出)
# 6. 部署完成，获得 *.edgeone.app 域名
```

#### 方式二：CLI 手动上传

```bash
# 1. 构建项目
pnpm build

# 2. 安装 EdgeOne CLI
npm install -g @edgeone/cli

# 3. 登录并部署
edgeone login
edgeone deploy --dir .next
```

---

### 更新网站（重新部署）

> 修改内容后，只需重新部署，原有数据**不会丢失**。

#### 方式一：Git Push 自动部署（无需手动操作）

```bash
# 1. 修改代码或内容
# 2. 提交并推送
git add .
git commit -m "feat: 更新内容"
git push

# GitHub → EdgeOne Pages 自动触发构建和部署
# 静待 1-3 分钟，刷新网站即可看到更新
```

#### 方式二：CLI 手动重新部署

```bash
# 1. 构建最新版本
pnpm build

# 2. 重新上传
edgeone deploy --dir .next --force
```

#### 方式三：EdgeOne 控制台手动部署

```
登录 EdgeOne 控制台
  → 找到项目
  → 点击"重新部署"
  → 等待构建完成
```

---

### 更新内容类型对照表

| 修改内容 | 操作 | 重新部署? |
|---------|------|:--------:|
| 修改 `blog.json` 添加文章 | 修改文件 → git push | ✅ 自动 |
| 修改 `projects.json` 添加项目 | 修改文件 → git push | ✅ 自动 |
| 修改组件样式 | 修改文件 → git push | ✅ 自动 |
| 替换 `head.jpg` 头像 | 替换图片 → git push | ✅ 自动 |
| 修改 `about.json` 个人信息 | 修改文件 → git push | ✅ 自动 |
| 替换项目封面图 | 替换图片 → git push | ✅ 自动 |

> **提示**：EdgeOne Pages 自动部署约 1-3 分钟生效。部署完成后刷新网站即可看到最新内容。

---

## 部署架构

```
开发者                         EdgeOne Pages                    用户
   │                              │                              │
   ├─ git push ──────────────────→│                              │
   │                              ├─ 自动构建 (pnpm build)       │
   │                              ├─ CDN 全球部署               │
   │                              │←── 用户访问 ────────────────│
   │                              │                              │
   └─ 或 CLI: edgeone deploy ────→│                              │
```

---

## 检查部署状态

```bash
# 查看部署历史
edgeone deploy:list

# 查看当前版本
curl -I https://你的域名.edgeone.app
```
