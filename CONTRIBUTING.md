# 贡献指南

首先，感谢你愿意为 Frontend Notes 项目做出贡献！这份文档将指导你如何参与到项目中来。

## 📋 目录

- [行为准则](#行为准则)
- [我能做什么](#我能做什么)
- [开发流程](#开发流程)
- [提交规范](#提交规范)
- [Pull Request 指南](#pull-request-指南)
- [Issue 指南](#issue-指南)
- [代码规范](#代码规范)
- [文档规范](#文档规范)

## 行为准则

参与本项目即表示你同意遵守我们的[行为准则](./CODE_OF_CONDUCT.md)。请确保你的行为符合社区标准。

## 我能做什么

你可以通过以下方式为项目做出贡献：

### 📝 内容贡献
- 撰写新的技术文章或学习笔记
- 修正文章中的错误（拼写、语法、技术错误等）
- 改进文章内容，使其更易理解
- 补充代码示例和演示
- 翻译文章为其他语言

### 💻 代码贡献
- 修复 Bug
- 开发新功能
- 优化性能
- 改进构建流程
- 完善测试用例

### 🎨 设计贡献
- 改进网站UI/UX设计
- 优化响应式布局
- 设计Logo和图标
- 提供配色方案

### 📚 文档贡献
- 完善项目文档
- 改进安装和使用说明
- 编写教程和指南
- 更新 README

### 🐛 问题反馈
- 报告Bug
- 提出功能建议
- 参与Issue讨论

## 开发流程

### 1. Fork 项目

点击项目页面右上角的 "Fork" 按钮，将项目复制到你的账号下。

### 2. 克隆仓库

```bash
git clone https://github.com/YOUR_USERNAME/frontend-notes.git
cd frontend-notes
```

### 3. 添加上游仓库

```bash
git remote add upstream https://github.com/zhanglkx/frontend-notes.git
```

### 4. 创建分支

基于 `master` 分支创建你的功能分支：

```bash
git checkout -b feature/your-feature-name
# 或者修复bug
git checkout -b fix/your-bug-fix
```

分支命名规范：
- `feature/xxx` - 新功能
- `fix/xxx` - Bug修复
- `docs/xxx` - 文档更新
- `style/xxx` - 样式修改
- `refactor/xxx` - 代码重构
- `perf/xxx` - 性能优化
- `test/xxx` - 测试相关

### 5. 安装依赖

```bash
pnpm install
```

### 6. 进行开发

启动本地开发服务器：

```bash
pnpm dev
```

访问 http://localhost:5173 预览你的更改。

### 7. 提交更改

确保你的更改符合提交规范（见下文）：

```bash
git add .
git commit -m "feat: 添加某个新功能"
```

### 8. 同步上游更新

在提交 Pull Request 之前，确保你的分支与上游仓库同步：

```bash
git fetch upstream
git rebase upstream/master
```

### 9. 推送到 GitHub

```bash
git push origin feature/your-feature-name
```

### 10. 创建 Pull Request

前往你 Fork 的仓库页面，点击 "New Pull Request" 按钮创建 PR。

## 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范。每个提交消息应包含以下结构：

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 类型

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式修改（不影响代码运行）
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动
- `revert`: 回退之前的提交

### 示例

```bash
# 添加新功能
git commit -m "feat: 添加暗色模式切换功能"

# 修复Bug
git commit -m "fix: 修复移动端导航菜单无法关闭的问题"

# 更新文档
git commit -m "docs: 更新安装说明"

# 样式调整
git commit -m "style: 统一代码缩进为2个空格"

# 代码重构
git commit -m "refactor: 重构搜索功能实现"

# 性能优化
git commit -m "perf: 优化图片加载性能"
```

### 详细提交消息示例

```bash
feat(search): 添加全文搜索功能

- 集成 Pagefind 搜索引擎
- 支持中英文搜索
- 添加搜索结果高亮

Closes #123
```

## Pull Request 指南

### PR 标题

PR 标题应该清晰描述你的更改，遵循提交规范：

- ✅ `feat: 添加全文搜索功能`
- ✅ `fix: 修复移动端样式问题`
- ❌ `更新`
- ❌ `fix bug`

### PR 描述

使用 PR 模板填写以下信息：

1. **变更类型** - 功能、修复、文档等
2. **变更说明** - 详细描述你的更改
3. **相关 Issue** - 关联相关的 Issue
4. **测试** - 说明如何测试你的更改
5. **截图** - 如果涉及UI更改，请提供截图

### PR 检查清单

提交 PR 前，请确保：

- [ ] 代码已经过本地测试
- [ ] 构建成功无报错（`pnpm build`）
- [ ] 符合项目的代码规范
- [ ] 提交消息符合规范
- [ ] 已更新相关文档
- [ ] 已添加必要的注释
- [ ] PR 描述清晰完整

### Code Review

- 保持开放和友好的态度
- 认真对待 Review 意见
- 及时响应 Review 评论
- 根据反馈进行必要的修改

## Issue 指南

### 提交 Bug

使用 Bug 报告模板，提供以下信息：

- Bug 描述
- 复现步骤
- 预期行为
- 实际行为
- 环境信息（浏览器、操作系统等）
- 截图或错误日志

### 功能建议

使用功能请求模板，说明：

- 功能描述
- 使用场景
- 期望的实现方式
- 可选的替代方案

### 提问

使用问题咨询模板：

- 清晰描述你的问题
- 提供相关背景信息
- 说明你已经尝试过的方法

## 代码规范

### TypeScript/JavaScript

- 使用 TypeScript 编写代码
- 使用 2 空格缩进
- 使用单引号
- 语句末尾不使用分号
- 变量使用有意义的命名
- 函数使用 `function` 关键字
- 优先使用 `const`，必要时使用 `let`，避免使用 `var`

### Vue 组件

- 组件使用 PascalCase 命名
- 使用组合式 API（Composition API）
- Props 使用 TypeScript 接口定义
- 组件文件结构：
  ```vue
  <script setup lang="ts">
  // 导入
  // 类型定义
  // 组件逻辑
  </script>

  <template>
    <!-- 模板 -->
  </template>

  <style scoped>
  /* 样式 */
  </style>
  ```

### CSS/SCSS

- 使用有意义的类名
- 遵循 BEM 命名规范
- 优先使用 CSS 变量
- 注意响应式设计
- 避免使用 `!important`

## 文档规范

### Markdown 文章

- 使用正确的 Front Matter
- 标题层级清晰（# 一级标题，## 二级标题）
- 代码块指定语言
- 链接使用相对路径
- 图片添加 alt 属性
- 注意中英文之间的空格

### 代码示例

- 提供完整可运行的代码
- 添加必要的注释
- 代码格式美观
- 示例具有代表性

### 文档结构

```markdown
---
title: 文章标题
date: 2024-01-01
categories:
  - 分类
tags:
  - 标签
---

# 文章标题

简短介绍文章内容。

## 主要内容

详细说明...

### 子标题

具体内容...

## 总结

总结要点。

## 参考资料

- [链接标题](URL)
```

## 版本管理

### 语义化版本

项目遵循 [语义化版本](https://semver.org/lang/zh-CN/) 规范：

- `MAJOR.MINOR.PATCH`
- `MAJOR`: 不兼容的 API 修改
- `MINOR`: 向下兼容的功能性新增
- `PATCH`: 向下兼容的问题修正

### Changelog

所有重要更改都会记录在 [CHANGELOG.md](./CHANGELOG.md)。

## 开发建议

### 编辑器推荐

推荐使用 [Visual Studio Code](https://code.visualstudio.com/) 并安装以下扩展：

- Volar - Vue 语言支持
- ESLint - 代码检查
- Prettier - 代码格式化
- Markdown All in One - Markdown 支持
- GitLens - Git 增强

### 调试技巧

1. 使用浏览器开发者工具
2. 查看 VitePress 日志输出
3. 使用 `console.log` 调试（提交前记得删除）
4. 使用 Vue DevTools 调试 Vue 组件

### 性能考虑

- 避免大文件和大图片
- 优化图片（使用 WebP 格式）
- 合理使用代码分割
- 注意首屏加载性能

## 获得帮助

如果你在贡献过程中遇到问题：

1. 查看项目文档和 FAQ
2. 搜索现有的 Issues
3. 在 [Discussions](https://github.com/zhanglkx/frontend-notes/discussions) 中提问
4. 创建新的 Issue

## 许可证

通过向本项目提交贡献，你同意你的贡献将按照 [MIT License](./LICENSE) 进行许可。

---

再次感谢你的贡献！每一个贡献，无论大小，都让这个项目变得更好。🎉

如有问题，欢迎随时联系维护者 [@zhanglkx](https://github.com/zhanglkx)。
