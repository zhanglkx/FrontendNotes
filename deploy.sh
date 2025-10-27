#!/usr/bin/env sh

# ==========================================
# VitePress 项目部署脚本
# ==========================================
#
# 功能：将构建后的静态文件部署到 GitHub Pages
#
# 使用方法：
#   npm run deploy
#   或直接执行: bash deploy.sh
#
# 注意事项：
#   1. 确保已经提交了所有本地更改
#   2. 确保有 git 推送权限
#   3. 推荐使用 GitHub Actions 自动部署（见 .github/workflows/deploy.yml）
#
# ==========================================

# 遇到错误时终止脚本
set -e

# ========== 配置变量 ==========

# Git 推送地址（自动获取当前仓库的远程地址）
# 也可以手动设置，例如: push_addr=git@github.com:zhanglkx/frontend-notes.git
push_addr=`git remote get-url --push origin`

# 获取当前提交信息，用于生成部署提交消息
commit_info=`git describe --all --always --long`

# VitePress 构建输出目录
dist_path=docs/.vitepress/dist

# 推送到的分支（GitHub Pages 默认使用 gh-pages 分支）
push_branch=gh-pages

# ========== 开始部署流程 ==========

echo "=========================================="
echo "开始部署 Frontend Notes 到 GitHub Pages"
echo "=========================================="

# 1. 构建静态文件
echo "⏳ 正在构建项目..."
npm run build

# 检查构建是否成功
if [ ! -d "$dist_path" ]; then
  echo "❌ 构建失败：找不到 $dist_path 目录"
  exit 1
fi

echo "✅ 构建成功！"

# 2. 进入构建输出目录
cd $dist_path

# 3. 配置自定义域名（可选）
# 如果你有自定义域名，取消下面这行的注释并修改为你的域名
# echo 'your-domain.com' > CNAME
# echo "✅ 已配置自定义域名"

# 4. 初始化 Git 仓库
echo "⏳ 初始化 Git 仓库..."
git init

# 5. 添加所有文件到暂存区
git add -A

# 6. 提交更改
echo "⏳ 提交更改..."
git commit -m "deploy: $commit_info"

# 7. 强制推送到 gh-pages 分支
echo "⏳ 推送到 GitHub Pages..."
git push -f $push_addr HEAD:$push_branch

echo "✅ 推送成功！"

# 8. 返回项目根目录
cd -

# 9. 清理构建目录
echo "⏳ 清理构建目录..."
rm -rf $dist_path

echo "=========================================="
echo "🎉 部署完成！"
echo "=========================================="
echo ""
echo "你的网站将在几分钟内更新："
echo "https://zhanglkx.github.io/frontend-notes/"
echo ""
echo "💡 提示：推荐使用 GitHub Actions 自动部署"
echo "   推送代码即可自动触发部署流程"
echo "=========================================="
