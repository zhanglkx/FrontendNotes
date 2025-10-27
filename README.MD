# 前端笔记 / Frontend Notes

<p align="center">
  <img width="180" src="https://raw.githubusercontent.com/Aniket965/Aniket965/master/pacman.svg?sanitize=true" alt="logo">
</p>

<p align="center">
  <strong>Markdown</strong> 📝 + <strong>VitePress</strong> 🚀 + <strong>糖果主题</strong> 🍬
</p>

<p align="center">
  现代化的前端知识管理和学习笔记平台
</p>

<p align="center">
  <a href="https://github.com/zhanglkx/frontend-notes/actions/workflows/deploy.yml">
    <img src="https://github.com/zhanglkx/frontend-notes/actions/workflows/deploy.yml/badge.svg" alt="deploy">
  </a>
  <a href="https://github.com/zhanglkx/frontend-notes/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/zhanglkx/frontend-notes" alt="license">
  </a>
  <a href="https://github.com/zhanglkx/frontend-notes/stargazers">
    <img src="https://img.shields.io/github/stars/zhanglkx/frontend-notes" alt="stars">
  </a>
</p>

<p align="center">
  <a href="https://zhanglkx.github.io/frontend-notes/" target="_blank">📖 在线阅读</a> |
  <a href="./README_EN.md">🌏 English</a>
</p>

---

## ✨ 特性

- 🚀 **极速开发体验** - 基于 Vite，开发服务器秒级启动，热更新即时响应
- 💎 **Vue 3 + TypeScript** - 现代化的技术栈
- 📝 **Markdown 增强** - 支持代码高亮、自定义容器、数学公式等
- 🎨 **美观的博客主题** - 基于糖果主题，功能丰富，界面精美
- 🔍 **全文搜索** - Pagefind 提供强大的搜索功能
- 📱 **响应式设计** - 完美适配移动端和桌面端
- 🖼️ **图片放大预览** - 集成 medium-zoom，点击图片放大查看
- 💬 **评论系统** - 支持 Giscus 评论系统
- 🌙 **暗色模式** - 内置明暗双主题，护眼舒适
- ⚡️ **性能优化** - 自动代码分割，按需加载，首屏秒开
- 📊 **SEO 友好** - 自动生成站点地图，优化搜索引擎收录
- 🎯 **自动部署** - GitHub Actions 自动构建部署

## 🚀 快速开始

### 前置要求

- [Node.js](https://nodejs.org/) 18.0.0 或更高版本
- [Git](https://git-scm.com/) 版本控制工具

### 克隆项目

```bash
git clone https://github.com/zhanglkx/frontend-notes.git
cd frontend-notes
```

### 安装依赖

推荐使用 pnpm（更快、更节省磁盘空间）：

```bash
# 安装 pnpm（如果还没有）
npm install -g pnpm

# 安装项目依赖
pnpm install
```

或使用 npm：

```bash
npm install
```

或使用 yarn：

```bash
yarn install
```

### 本地开发

启动本地开发服务器：

```bash
npm run dev
# 或
pnpm dev
```

然后访问 http://localhost:5173 即可预览网站。

开发服务器支持热更新，修改文件后会自动刷新页面。

### 构建生产版本

```bash
npm run build
# 或
pnpm build
```

构建后的文件将生成在 `docs/.vitepress/dist` 目录。

### 本地预览构建结果

```bash
npm run preview
# 或
pnpm preview
```

### 部署

#### 自动部署（推荐）

推送代码到 GitHub 后，GitHub Actions 会自动构建并部署到 GitHub Pages：

```bash
git add .
git commit -m "docs: 更新文档"
git push
```

#### 手动部署

也可以使用部署脚本手动部署：

```bash
npm run deploy
# 或直接执行脚本
bash deploy.sh
```

## 📁 项目结构

```
.
├── docs/                       # 文档源文件目录
│   ├── .vitepress/            # VitePress 配置目录
│   │   ├── config.mts         # 主配置文件（站点配置、导航、侧边栏等）
│   │   └── theme/             # 主题定制
│   │       ├── index.ts       # 主题入口文件
│   │       └── style/         # 自定义样式
│   │           ├── custom.css # 自定义样式
│   │           └── vars.css   # CSS 变量定义
│   ├── 01.前端/               # 前端技术文章
│   │   ├── 25.JavaScript文章/
│   │   └── 40.学习笔记/
│   ├── 02.页面/               # HTML/CSS 相关
│   │   ├── 10.HTML/
│   │   └── 20.CSS/
│   ├── 03.技术/               # 技术文档
│   │   ├── 01.技术文档/
│   │   ├── 02.GitHub技巧/
│   │   ├── 03.Nodejs/
│   │   └── 04.博客搭建/
│   ├── 04.更多/               # 其他内容
│   ├── 《ES6 教程》笔记/      # ES6 系统学习笔记
│   ├── 《Vue》笔记/           # Vue 框架学习笔记
│   ├── 《React》笔记/         # React 框架学习笔记
│   ├── 《TypeScript 从零实现 axios》/ # TypeScript 实战教程
│   ├── 《Git》学习笔记/       # Git 版本控制笔记
│   ├── 《JavaScript教程》笔记/ # JavaScript 基础笔记
│   └── index.md               # 网站首页
├── .github/                   # GitHub 配置
│   ├── workflows/             # GitHub Actions 工作流
│   │   └── deploy.yml        # 自动部署配置
│   └── ISSUE_TEMPLATE/        # Issue 模板
├── package.json               # 项目依赖配置
├── pnpm-lock.yaml            # pnpm 锁文件
├── deploy.sh                  # 手动部署脚本
├── CONTRIBUTING.md            # 贡献指南
├── CODE_OF_CONDUCT.md         # 行为准则
├── CHANGELOG.md               # 版本更新日志
├── LICENSE                    # MIT 开源协议
└── README.md                  # 项目说明文档（本文件）
```

## 📝 写作指南

### 创建新文章

在 `docs` 目录下创建或编辑 Markdown 文件，使用 Front Matter 配置文章元数据：

```markdown
---
title: 文章标题
date: 2024-01-01
categories:
  - 前端
tags:
  - JavaScript
  - Vue
author: zhanglkx
---

# 文章标题

这里是文章正文内容...

## 二级标题

支持所有标准 Markdown 语法和 VitePress 扩展语法。
```

### Front Matter 字段说明

- `title`: 文章标题（必填）
- `date`: 发布日期（必填，格式：YYYY-MM-DD）
- `categories`: 文章分类（数组）
- `tags`: 文章标签（数组）
- `author`: 作者名称
- `description`: 文章描述（用于 SEO）
- `permalink`: 自定义文章链接

### Markdown 增强功能

VitePress 支持丰富的 Markdown 扩展：

- 代码块高亮和行号
- 自定义容器（提示、警告、危险等）
- 表格、列表、任务列表
- Emoji 表情 :tada:
- 数学公式（需配置）
- 图片懒加载和放大

## 🎨 主题配置

主配置文件位于 `docs/.vitepress/config.mts`，支持自定义以下内容：

### 基础配置
- **站点信息**: 标题、描述、Logo 等
- **导航栏**: 顶部导航菜单
- **侧边栏**: 文档侧边导航
- **社交链接**: GitHub、Twitter 等链接

### 功能配置
- **搜索**: Pagefind 全文搜索
- **评论系统**: Giscus 评论配置
- **博客设置**: 文章列表、分类、标签
- **SEO**: 站点地图、meta 标签

### 样式定制
- `docs/.vitepress/theme/style/vars.css`: CSS 变量（颜色、字体等）
- `docs/.vitepress/theme/style/custom.css`: 自定义样式

### 参考文档
- [VitePress 官方文档](https://vitepress.dev/)
- [糖果主题文档](https://theme.sugarat.top/)
- [配置文件详细注释](./docs/.vitepress/config.mts)

## 🔧 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| [VitePress](https://vitepress.dev/) | ^1.5.0 | 静态站点生成器 |
| [@sugarat/theme](https://theme.sugarat.top/) | ^0.4.10 | 糖果博客主题 |
| [Vue 3](https://vuejs.org/) | ^3.5.12 | 渐进式 JavaScript 框架 |
| [Vite](https://vitejs.dev/) | - | 下一代前端构建工具 |
| [TypeScript](https://www.typescriptlang.org/) | - | JavaScript 的超集 |
| [Pagefind](https://pagefind.app/) | - | 静态站点全文搜索 |
| [medium-zoom](https://github.com/francoischalifour/medium-zoom) | ^1.1.0 | 图片放大预览 |
| [Giscus](https://giscus.app/) | - | 基于 GitHub Discussions 的评论系统 |
| [Sass](https://sass-lang.com/) | ^1.80.6 | CSS 预处理器 |

## 🎯 功能特性

### 博客功能

- ✅ 文章列表展示
- ✅ 分类和标签系统
- ✅ 归档页面
- ✅ 友情链接
- ✅ 文章推荐
- ✅ 阅读时间估算

### 文档功能

- ✅ 多级侧边栏
- ✅ 页面导航
- ✅ 目录大纲
- ✅ 编辑链接
- ✅ 最后更新时间
- ✅ 页脚配置

### 增强功能

- ✅ 全文搜索
- ✅ 代码高亮和复制
- ✅ 图片懒加载和放大
- ✅ 评论系统
- ✅ 暗色模式
- ✅ 响应式设计
- ✅ SEO 优化
- ✅ 站点地图

## 📚 文档

- [VitePress 官方文档](https://vitepress.dev/)
- [糖果主题文档](https://theme.sugarat.top/)
- [Vue 3 文档](https://cn.vuejs.org/)
- [Markdown 语法](https://www.markdownguide.org/)

## 🐛 问题排查

### 依赖安装失败

```bash
# 清理缓存和依赖
rm -rf node_modules package-lock.json pnpm-lock.yaml
npm cache clean --force

# 重新安装
pnpm install
# 或
npm install
```

### 开发服务器启动失败

检查 Node.js 版本（需要 18.0.0 或更高）：

```bash
node -v

# 如果版本过低，请升级 Node.js
```

### 构建失败

检查是否有语法错误或配置问题：

```bash
npm run build
```

查看终端输出的错误信息并修复相关问题。

### 部署失败

1. 检查 GitHub Actions 日志
2. 确认仓库设置中 Pages 已启用
3. 检查 `config.mts` 中的 `base` 路径配置

更多问题请查看 [Issues](https://github.com/zhanglkx/frontend-notes/issues) 或提交新 Issue。

## 🤝 贡献

欢迎贡献代码、报告问题或提出建议！

### 贡献方式

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'feat: 添加某个很棒的功能'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

### 贡献指南

详细的贡献指南请查看 [CONTRIBUTING.md](./CONTRIBUTING.md)

### 贡献者

感谢所有为本项目做出贡献的开发者！

## 📄 开源协议

本项目基于 [MIT](./LICENSE) 协议开源。

```
MIT License

Copyright (c) 2024-present zhanglkx
```

这意味着你可以自由地使用、修改和分发本项目，但需要保留原作者的版权声明。

## 🙏 致谢

感谢以下优秀的开源项目和贡献者：

- [VitePress](https://vitepress.dev/) - 强大且高效的静态站点生成器
- [@sugarat/theme](https://theme.sugarat.top/) - 功能丰富的博客主题
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 极速的前端构建工具

## 📞 联系方式

- GitHub: [@zhanglkx](https://github.com/zhanglkx)
- 项目地址: [https://github.com/zhanglkx/frontend-notes](https://github.com/zhanglkx/frontend-notes)
- 在线预览: [https://zhanglkx.github.io/frontend-notes/](https://zhanglkx.github.io/frontend-notes/)

## ⭐ Star History

如果这个项目对你有帮助，请给一个 ⭐️ Star 支持一下！

[![Star History Chart](https://api.star-history.com/svg?repos=zhanglkx/frontend-notes&type=Date)](https://star-history.com/#zhanglkx/frontend-notes&Date)

---

<p align="center">
  <strong>用心整理，持续更新 💪</strong>
</p>

<p align="center">
  Made with ❤️ by <a href="https://github.com/zhanglkx">zhanglkx</a>
</p>
