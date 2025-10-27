# Frontend Notes

<p align="center">
  <img width="180" src="./docs/public/img/logo.png" alt="logo">
</p>

<p align="center">
  <strong>Markdown</strong> 📝 + <strong>VitePress</strong> 🚀 + <strong>Sugar Theme</strong> 🍬
</p>

<p align="center">
  Modern Frontend Knowledge Management and Learning Platform
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
  <a href="https://zhanglkx.github.io/frontend-notes/" target="_blank">📖 Live Demo</a> |
  <a href="./README.MD">🇨🇳 中文</a>
</p>

---

## ✨ Features

- 🚀 **Lightning Fast** - Powered by Vite with instant hot module replacement
- 💎 **Modern Stack** - Built with Vue 3 + TypeScript
- 📝 **Enhanced Markdown** - Syntax highlighting, custom containers, and more
- 🎨 **Beautiful Theme** - Based on Sugar theme with rich features
- 🔍 **Full-text Search** - Powered by Pagefind
- 📱 **Responsive Design** - Perfect adaptation for mobile and desktop
- 🖼️ **Image Zoom** - Click to zoom images with medium-zoom
- 💬 **Comment System** - Integrated Giscus comment system
- 🌙 **Dark Mode** - Built-in light and dark themes
- ⚡️ **Optimized Performance** - Code splitting and lazy loading
- 📊 **SEO Friendly** - Auto-generated sitemap and meta tags
- 🎯 **Auto Deploy** - GitHub Actions CI/CD pipeline

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18.0.0 or higher
- [Git](https://git-scm.com/) version control

### Clone Repository

```bash
git clone https://github.com/zhanglkx/frontend-notes.git
cd frontend-notes
```

### Install Dependencies

Recommended using pnpm (faster and more disk-efficient):

```bash
# Install pnpm (if not already installed)
npm install -g pnpm

# Install project dependencies
pnpm install
```

Or using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Local Development

Start the local development server:

```bash
npm run dev
# or
pnpm dev
```

Then visit http://localhost:5173 to preview the site.

The dev server supports hot module replacement - changes will be reflected instantly.

### Build for Production

```bash
npm run build
# or
pnpm build
```

Built files will be generated in `docs/.vitepress/dist` directory.

### Preview Production Build

```bash
npm run preview
# or
pnpm preview
```

### Deployment

#### Automatic Deployment (Recommended)

Push your code to GitHub, and GitHub Actions will automatically build and deploy to GitHub Pages:

```bash
git add .
git commit -m "docs: update documentation"
git push
```

#### Manual Deployment

You can also use the deployment script for manual deployment:

```bash
npm run deploy
# or execute script directly
bash deploy.sh
```

## 📁 Project Structure

```
.
├── docs/                       # Documentation source files
│   ├── .vitepress/            # VitePress configuration
│   │   ├── config.mts         # Main config (site, nav, sidebar, etc.)
│   │   └── theme/             # Theme customization
│   │       ├── index.ts       # Theme entry file
│   │       └── style/         # Custom styles
│   │           ├── custom.css # Custom CSS
│   │           └── vars.css   # CSS variables
│   ├── 01.前端/               # Frontend articles
│   │   ├── 25.JavaScript文章/
│   │   └── 40.学习笔记/
│   ├── 02.页面/               # HTML/CSS topics
│   │   ├── 10.HTML/
│   │   └── 20.CSS/
│   ├── 03.技术/               # Technical docs
│   │   ├── 01.技术文档/
│   │   ├── 02.GitHub技巧/
│   │   ├── 03.Nodejs/
│   │   └── 04.博客搭建/
│   ├── 04.更多/               # More content
│   ├── 《ES6 教程》笔记/      # ES6 tutorial notes
│   ├── 《Vue》笔记/           # Vue.js notes
│   ├── 《React》笔记/         # React notes
│   ├── 《TypeScript 从零实现 axios》/ # TypeScript axios tutorial
│   ├── 《Git》学习笔记/       # Git learning notes
│   ├── 《JavaScript教程》笔记/ # JavaScript tutorial notes
│   └── index.md               # Homepage
├── .github/                   # GitHub configuration
│   ├── workflows/             # GitHub Actions workflows
│   │   └── deploy.yml        # Auto-deployment config
│   └── ISSUE_TEMPLATE/        # Issue templates
├── package.json               # Project dependencies
├── pnpm-lock.yaml            # pnpm lock file
├── deploy.sh                  # Manual deployment script
├── CONTRIBUTING.md            # Contributing guide
├── CODE_OF_CONDUCT.md         # Code of conduct
├── CHANGELOG.md               # Version changelog
├── MIGRATION.md               # VuePress migration guide
├── LICENSE                    # MIT license
└── README.md                  # Project documentation
```

## 📝 Writing Guide

### Create New Article

Create or edit Markdown files in the `docs` directory with Front Matter configuration:

```markdown
---
title: Article Title
date: 2024-01-01
categories:
  - Frontend
tags:
  - JavaScript
  - Vue
author: zhanglkx
---

# Article Title

Your article content here...

## Subtitle

Supports all standard Markdown syntax and VitePress extensions.
```

### Front Matter Fields

- `title`: Article title (required)
- `date`: Publication date (required, format: YYYY-MM-DD)
- `categories`: Article categories (array)
- `tags`: Article tags (array)
- `author`: Author name
- `description`: Article description (for SEO)
- `permalink`: Custom article URL

### Markdown Extensions

VitePress supports rich Markdown extensions:

- Code syntax highlighting with line numbers
- Custom containers (tip, warning, danger, etc.)
- Tables, lists, task lists
- Emoji support :tada:
- Math formulas (requires configuration)
- Image lazy loading and zoom

## 🎨 Theme Configuration

Main configuration file is located at `docs/.vitepress/config.mts`:

### Basic Configuration
- **Site Info**: Title, description, logo, etc.
- **Navigation**: Top navigation menu
- **Sidebar**: Document side navigation
- **Social Links**: GitHub, Twitter, etc.

### Feature Configuration
- **Search**: Pagefind full-text search
- **Comments**: Giscus comment configuration
- **Blog Settings**: Article list, categories, tags
- **SEO**: Sitemap, meta tags

### Style Customization
- `docs/.vitepress/theme/style/vars.css`: CSS variables (colors, fonts, etc.)
- `docs/.vitepress/theme/style/custom.css`: Custom styles

### Reference Documentation
- [VitePress Official Docs](https://vitepress.dev/)
- [Sugar Theme Docs](https://theme.sugarat.top/)
- [Detailed Config Comments](./docs/.vitepress/config.mts)

## 🔧 Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| [VitePress](https://vitepress.dev/) | ^1.5.0 | Static site generator |
| [@sugarat/theme](https://theme.sugarat.top/) | ^0.4.10 | Sugar blog theme |
| [Vue 3](https://vuejs.org/) | ^3.5.12 | Progressive JavaScript framework |
| [Vite](https://vitejs.dev/) | - | Next generation frontend tooling |
| [TypeScript](https://www.typescriptlang.org/) | - | Typed JavaScript at scale |
| [Pagefind](https://pagefind.app/) | - | Static site search |
| [medium-zoom](https://github.com/francoischalifour/medium-zoom) | ^1.1.0 | Image zoom library |
| [Giscus](https://giscus.app/) | - | GitHub Discussions powered comment system |
| [Sass](https://sass-lang.com/) | ^1.80.6 | CSS preprocessor |

## 📊 Performance Comparison

Performance improvements after migrating from VuePress 1.x to VitePress:

| Metric | VuePress 1.x | VitePress | Improvement |
|--------|--------------|-----------|-------------|
| Dev Startup | 30-60s | 2-3s | 🚀 10-20x faster |
| HMR | 3-5s | Instant | ⚡️ Instant response |
| Build Speed | Baseline | 5-10x | 📦 Much faster |
| Bundle Size | Baseline | -30~50% | 💾 Smaller |

## 🔄 Migration Notes

This project has been migrated from **VuePress 1.x + vdoing theme** to **VitePress + Sugar theme**.

### Major Changes

- ✅ VuePress 1.9.9 → VitePress 1.5.0
- ✅ Webpack → Vite build tool
- ✅ Vue 2 → Vue 3
- ✅ Removed `--openssl-legacy-provider` requirement
- ✅ vdoing theme → Sugar theme

### Detailed Migration Guide

For detailed migration information, see: 👉 [Full Migration Guide](./MIGRATION.md)

## 🎯 Features

### Blog Features

- ✅ Article list display
- ✅ Categories and tags system
- ✅ Archive page
- ✅ Friend links
- ✅ Article recommendations
- ✅ Reading time estimation

### Documentation Features

- ✅ Multi-level sidebar
- ✅ Page navigation
- ✅ Table of contents
- ✅ Edit link
- ✅ Last updated time
- ✅ Footer configuration

### Enhanced Features

- ✅ Full-text search
- ✅ Code highlighting and copy
- ✅ Image lazy loading and zoom
- ✅ Comment system
- ✅ Dark mode
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Sitemap generation

## 📚 Documentation

- [VitePress Official Docs](https://vitepress.dev/)
- [Sugar Theme Docs](https://theme.sugarat.top/)
- [Vue 3 Docs](https://vuejs.org/)
- [Markdown Guide](https://www.markdownguide.org/)

## 🐛 Troubleshooting

### Dependency Installation Failed

```bash
# Clean cache and dependencies
rm -rf node_modules package-lock.json pnpm-lock.yaml
npm cache clean --force

# Reinstall
pnpm install
# or
npm install
```

### Dev Server Failed to Start

Check Node.js version (requires 18.0.0 or higher):

```bash
node -v

# If version is too low, please upgrade Node.js
```

### Build Failed

Check for syntax errors or configuration issues:

```bash
npm run build
```

Review error messages in terminal output and fix related issues.

### Deployment Failed

1. Check GitHub Actions logs
2. Confirm Pages is enabled in repository settings
3. Check `base` path configuration in `config.mts`

For more issues, check [Issues](https://github.com/zhanglkx/frontend-notes/issues) or submit a new issue.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contributing Guide

For detailed contributing guidelines, see [CONTRIBUTING.md](./CONTRIBUTING.md)

### Contributors

Thanks to all contributors who have helped this project!

## 📄 License

This project is licensed under the [MIT](./LICENSE) License.

```
MIT License

Copyright (c) 2024-present zhanglkx
```

This means you are free to use, modify, and distribute this project, but must retain the original author's copyright notice.

## 🙏 Acknowledgments

Thanks to the following excellent open source projects and contributors:

- [VitePress](https://vitepress.dev/) - Powerful and efficient static site generator
- [@sugarat/theme](https://theme.sugarat.top/) - Feature-rich blog theme
- [Vue.js](https://vuejs.org/) - Progressive JavaScript framework
- [Vite](https://vitejs.dev/) - Lightning fast frontend build tool
- [VuePress Theme Vdoing](https://github.com/zhanglkx/FrontendNotes) - Original theme inspiration

## 📞 Contact

- GitHub: [@zhanglkx](https://github.com/zhanglkx)
- Repository: [https://github.com/zhanglkx/frontend-notes](https://github.com/zhanglkx/frontend-notes)
- Live Demo: [https://zhanglkx.github.io/frontend-notes/](https://zhanglkx.github.io/frontend-notes/)

## ⭐ Star History

If this project helps you, please give it a ⭐️ Star!

[![Star History Chart](https://api.star-history.com/svg?repos=zhanglkx/frontend-notes&type=Date)](https://star-history.com/#zhanglkx/frontend-notes&Date)

---

<p align="center">
  <strong>Carefully organized, continuously updated 💪</strong>
</p>

<p align="center">
  Made with ❤️ by <a href="https://github.com/zhanglkx">zhanglkx</a>
</p>
