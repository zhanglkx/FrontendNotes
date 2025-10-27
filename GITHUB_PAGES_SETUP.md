# GitHub Pages 部署配置指南

本项目已配置自动化 CI/CD，当你推送代码到 `master` 分支时，会自动构建并部署到 GitHub Pages。

## 📋 配置步骤

### 1. 启用 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings** (设置)
3. 在左侧菜单找到 **Pages**
4. 在 **Source** (来源) 部分，选择 **GitHub Actions**

![GitHub Pages 设置](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/publishing-source-drop-down.webp)

### 2. 确认工作流权限

1. 在仓库设置中，找到 **Actions** → **General**
2. 滚动到 **Workflow permissions** (工作流权限)
3. 选择 **Read and write permissions** (读写权限)
4. 勾选 **Allow GitHub Actions to create and approve pull requests**
5. 点击 **Save**

### 3. 推送代码触发部署

```bash
git add .
git commit -m "chore: 更新 CI/CD 配置"
git push origin master
```

### 4. 查看部署状态

1. 进入仓库的 **Actions** 标签页
2. 查看最新的工作流运行状态
3. 等待构建和部署完成（通常 2-5 分钟）

### 5. 访问你的站点

部署成功后，你的站点将在以下地址访问：

```
https://<你的用户名>.github.io/<仓库名>/
```

例如：`https://github.com/zhanglkx/FrontendNotes`

## 🔧 工作流说明

当前配置的工作流 (`.github/workflows/ci.yml`) 会：

1. ✅ 在推送到 `master` 分支时自动触发
2. ✅ 使用 Node.js 20.x 和 pnpm 8
3. ✅ 安装依赖并构建 VitePress 站点
4. ✅ 自动部署到 GitHub Pages

## 📝 自定义配置

### 修改基础路径

如果你的仓库名不是根路径，需要在 `docs/.vitepress/config.mts` 中设置 `base`：

```typescript
export default defineConfig({
  extends: blogTheme,

  // 如果部署到 https://<username>.github.io/<repo>/
  base: '/仓库名/',

  // 如果部署到 https://<username>.github.io/
  // base: '/',

  // ...其他配置
})
```

### 更改部署分支

如果想改用 `main` 分支而不是 `master`，修改 `.github/workflows/ci.yml`：

```yaml
on:
  push:
    branches:
      - main  # 改为 main
```

## 🎯 验证部署

部署成功后，你可以：

1. **查看部署日志**
   - 进入 Actions 标签页
   - 点击最新的工作流运行
   - 查看每个步骤的详细日志

2. **测试站点功能**
   - 访问部署的 URL
   - 检查导航、搜索、页面加载
   - 确认样式和功能正常

3. **检查 SEO**
   - 查看页面标题和描述
   - 检查 meta 标签
   - 验证 sitemap 生成

## ⚠️ 常见问题

### 问题 1: 404 错误

**原因**：`base` 配置不正确

**解决**：确保 `docs/.vitepress/config.mts` 中的 `base` 与实际部署路径匹配

### 问题 2: 样式丢失

**原因**：资源路径错误

**解决**：检查 `base` 配置，确保静态资源路径正确

### 问题 3: 工作流失败

**原因**：权限不足或依赖安装失败

**解决**：
1. 检查工作流权限设置
2. 查看 Actions 日志中的错误信息
3. 确保 `pnpm-lock.yaml` 已提交

## 🚀 其他部署选项

除了 GitHub Pages，你还可以部署到：

- **Vercel**: 已配置 `vercel.json`
- **Netlify**: 支持自动部署
- **Cloudflare Pages**: 高性能边缘部署

## 📚 相关文档

- [VitePress 部署指南](https://vitepress.dev/guide/deploy)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)

---

**提示**：首次部署可能需要几分钟时间，请耐心等待。如有问题，请查看 Actions 日志获取详细错误信息。
