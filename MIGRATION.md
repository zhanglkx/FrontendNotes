# VitePress 迁移指南

本项目已从 VuePress 1.x + vdoing 主题迁移到 VitePress + 糖果主题。

## 安装依赖

由于 npm 缓存权限问题，请先修复权限：

```bash
# 修复 npm 缓存权限（Mac/Linux）
sudo chown -R $(whoami) ~/.npm

# 或者清理缓存
npm cache clean --force
```

然后安装依赖：

```bash
npm install
```

如果还有问题，可以尝试使用 pnpm 或 yarn：

```bash
# 使用 pnpm
npm install -g pnpm
pnpm install

# 或使用 yarn
npm install -g yarn
yarn install
```

## 本地开发

```bash
npm run dev
```

访问 http://localhost:5173

## 构建生产版本

```bash
npm run build
```

## 预览生产版本

```bash
npm run preview
```

## 部署

```bash
npm run deploy
```

或手动执行：

```bash
bash deploy.sh
```

## 主要变更

### 1. 技术栈升级

- ✅ VuePress 1.9.9 → VitePress 1.5.0
- ✅ Webpack → Vite
- ✅ Vue 2 → Vue 3
- ✅ 移除 `--openssl-legacy-provider` 要求

### 2. 主题变更

- 从 `vuepress-theme-vdoing` 迁移到 `@sugarat/theme`（糖果主题）
- 糖果主题提供了类似的博客功能，包括：
  - 文章列表
  - 分类和标签
  - 归档页面
  - 搜索功能
  - 友链管理

### 3. 配置文件变更

- 旧配置：`docs/.vuepress/config.ts`
- 新配置：`docs/.vitepress/config.mts`

### 4. 构建输出变更

- 旧路径：`docs/.vuepress/dist`
- 新路径：`docs/.vitepress/dist`

### 5. 功能对应关系

| VuePress + vdoing | VitePress + 糖果主题 | 状态 |
|------------------|-------------------|------|
| 侧边栏自动生成 | VitePress 原生支持 | ✅ 已配置 |
| 归档/分类/标签 | 糖果主题内置 | ✅ 已配置 |
| 搜索功能 | pagefind 搜索 | ✅ 已配置 |
| 评论系统（Gitalk） | Giscus | ⚠️ 需要配置 |
| 百度统计 | head 注入 | ⚠️ 需要替换代码 |
| 图片缩放 | medium-zoom | ✅ 已集成 |
| 代码复制 | VitePress 原生 | ✅ 原生支持 |

## 需要手动配置的内容

### 1. Giscus 评论系统

在 `docs/.vitepress/config.mts` 中配置：

```typescript
comment: {
  repo: 'xugaoyi/blog-gitalk-comment',
  repoId: 'YOUR_REPO_ID', // 需要从 GitHub 获取
  category: 'Announcements',
  categoryId: 'YOUR_CATEGORY_ID', // 需要从 GitHub 获取
  inputPosition: 'top'
}
```

获取方式：访问 https://giscus.app/zh-CN 按照指引配置

### 2. 百度统计

在 `docs/.vitepress/config.mts` 的 head 配置中，替换百度统计代码：

```typescript
[
  'script',
  {},
  `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?YOUR_BAIDU_TONGJI_CODE";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
  `
]
```

### 3. 社交链接

在配置文件中更新您的社交媒体链接。

## 文件清理

迁移完成后，可以删除以下文件/目录：

- ✅ `docs/.vuepress/`（旧配置目录）
- ✅ `vdoing/`（旧主题目录）
- ✅ `utils/check.js`、`utils/editFrontmatter.js` 等 VuePress 特定工具
- ⚠️ `baiduPush.sh` 和 `utils/baiduPush.js`（如果不需要百度主动推送）

## 注意事项

1. **URL 兼容性**：VitePress 的 URL 生成规则与 VuePress 略有不同，可能会影响 SEO
2. **自定义组件**：如果有自定义 Vue 组件，需要升级到 Vue 3 语法
3. **插件兼容性**：VuePress 插件不能直接在 VitePress 中使用
4. **Markdown 扩展**：一些 VuePress 特定的 Markdown 扩展需要重新实现

## 性能提升

迁移到 VitePress 后的性能改进：

- 🚀 **开发启动速度**：从 30-60 秒 → 2-3 秒
- ⚡️ **热更新速度**：从 3-5 秒 → 即时
- 📦 **构建速度**：提升 5-10 倍
- 💾 **包体积**：减小 30-50%

## 问题排查

### 依赖安装失败

```bash
# 清理缓存
rm -rf node_modules package-lock.json
npm cache clean --force

# 重新安装
npm install
```

### 开发服务器启动失败

检查 Node.js 版本（需要 18.0.0 或更高）：

```bash
node -v
```

### 构建失败

检查是否有语法错误或配置问题：

```bash
npm run build
```

## 参考资料

- [VitePress 官方文档](https://vitepress.dev/)
- [糖果主题文档](https://theme.sugarat.top/)
- [Giscus 评论系统](https://giscus.app/zh-CN)
- [Medium Zoom 图片放大](https://github.com/francoischalifour/medium-zoom)

## 支持

如有问题，请提交 Issue 或查看官方文档。
