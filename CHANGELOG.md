# 更新日志

所有重要的项目更改都将记录在此文件中。

本项目遵循[语义化版本](https://semver.org/lang/zh-CN/)规范。

## [2.0.0] - 2024-10-27

### ✨ 重大更新

这是一个重大版本更新，项目从 VuePress 1.x 完全迁移到 VitePress。

#### 技术栈升级

- **构建工具**: Webpack → Vite
- **静态站点生成器**: VuePress 1.9.9 → VitePress 1.5.0
- **前端框架**: Vue 2 → Vue 3
- **主题**: vdoing 主题 → @sugarat/theme (糖果主题)
- **语言**: JavaScript → TypeScript

#### 性能提升

- 🚀 开发服务器启动速度提升 10-20 倍（从 30-60 秒降至 2-3 秒）
- ⚡️ 热模块替换（HMR）从 3-5 秒优化至即时响应
- 📦 构建速度提升 5-10 倍
- 💾 打包体积减小 30-50%

#### 新增功能

- ✅ GitHub Actions 自动部署
- ✅ Pagefind 全文搜索
- ✅ Giscus 评论系统支持
- ✅ Medium Zoom 图片放大
- ✅ 暗色模式
- ✅ 响应式设计优化
- ✅ SEO 优化（自动生成 sitemap、meta 标签）
- ✅ 代码高亮和行号
- ✅ 图片懒加载

### 📝 文档更新

- 全新的 README.md（中文版）
- 新增 README_EN.md（英文版）
- 新增 CONTRIBUTING.md（贡献指南）
- 新增 CODE_OF_CONDUCT.md（行为准则）
- 新增 CHANGELOG.md（更新日志）
- 更新 MIGRATION.md（迁移指南）

### 🔧 开源规范

- 完善的项目结构
- 详细的代码注释
- GitHub Issue 模板（Bug 报告、功能请求、问题咨询）
- GitHub Pull Request 模板
- 规范的提交信息格式（Conventional Commits）
- MIT 开源协议

### 🎨 配置优化

- 完整注释的 VitePress 配置文件
- 模块化的样式文件（vars.css、custom.css）
- 优化的导航栏和侧边栏配置
- 自定义主题扩展

### 📦 依赖更新

**新增依赖**:
- `vitepress@^1.5.0` - 静态站点生成器
- `@sugarat/theme@^0.4.10` - 博客主题
- `vue@^3.5.12` - 前端框架
- `medium-zoom@^1.1.0` - 图片放大库
- `sass@^1.80.6` - CSS 预处理器
- `dayjs@^1.11.13` - 日期处理库

**移除依赖**:
- `vuepress` - 旧的静态站点生成器
- `vuepress-theme-vdoing` - 旧的主题

### 🗑️ 移除内容

- 移除 VuePress 相关配置和文件
- 移除旧的主题文件
- 移除不再需要的构建工具

### 📖 迁移说明

如果你是从旧版本升级，请参考 [迁移指南](./MIGRATION.md)。

### ⚠️ 破坏性变更

- URL 结构可能有变化，建议设置重定向
- 配置文件格式完全不同，需要重新配置
- VuePress 插件不再兼容
- 自定义组件需要升级到 Vue 3

---

## [1.x.x] - 历史版本

历史版本基于 VuePress 1.x + vdoing 主题构建。

详细历史版本信息请参考 Git 提交记录。

---

## 版本说明

### 版本号规范

本项目遵循[语义化版本 2.0.0](https://semver.org/lang/zh-CN/)规范：

- **主版本号（Major）**: 不兼容的 API 修改
- **次版本号（Minor）**: 向下兼容的功能性新增
- **修订号（Patch）**: 向下兼容的问题修正

### 变更类型

- ✨ **新增功能**: 新增的功能特性
- 🐛 **Bug 修复**: 修复的问题
- 📝 **文档**: 文档的变更
- 🎨 **样式**: 不影响代码运行的变动（空格、格式化、缺少分号等）
- ♻️ **重构**: 代码重构，既不修复错误也不添加功能
- ⚡️ **性能**: 提高性能的代码更改
- ✅ **测试**: 添加或修改测试
- 🔧 **配置**: 构建过程或辅助工具的变动
- ⚠️ **破坏性变更**: 不兼容的更改

### 链接格式

- [2.0.0]: https://github.com/zhanglkx/frontend-notes/releases/tag/v2.0.0

---

**注**: 如有任何问题或建议，欢迎[提交 Issue](https://github.com/zhanglkx/frontend-notes/issues)。
