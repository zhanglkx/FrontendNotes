#!/bin/bash
# 检查所有 rewrites 路径对应的目录是否有 index.md 文件
# 用于预防和发现潜在的 404 问题

echo "🔍 检查缺失的 index.md 文件..."
echo ""

# 需要检查的目录列表（根据 rewrites 配置）
directories=(
    "docs/04.更多/01.学习"
    "docs/04.更多/03.面试"
    "docs/04.更多/05.心情杂货"
    "docs/04.更多/10.实用技巧"
    "docs/01.前端/25.JavaScript文章"
    "docs/02.页面/20.CSS"
    "docs/02.页面/10.HTML"
    "docs/03.技术/01.技术文档"
    "docs/03.技术/02.GitHub技巧"
    "docs/03.技术/03.Nodejs"
    "docs/03.技术/04.博客搭建"
    "docs/《Git》学习笔记/10.手册"
    "docs/《Git》学习笔记/20.文档笔记"
    "docs/《JavaScript教程》笔记"
    "docs/《ES6 教程》笔记"
    "docs/《React》笔记/01.核心概念"
    "docs/《React》笔记/03.Hook"
    "docs/《Vue》笔记/01.基础"
    "docs/《Vue》笔记/02.组件"
    "docs/《Vue》笔记/03.过渡&动画"
    "docs/《Vue》笔记/06.规模化"
    "docs/《Vue》笔记/99.其他"
    "docs/《TypeScript 从零实现 axios》"
    "docs/《TypeScript 从零实现 axios》/01.初识 TypeScript"
    "docs/《TypeScript 从零实现 axios》/02.TypeScript 常用语法"
    "docs/《TypeScript 从零实现 axios》/03.ts-axios 项目初始化"
    "docs/《TypeScript 从零实现 axios》/04.ts-axios 基础功能实现"
    "docs/《TypeScript 从零实现 axios》/05.ts-axios 异常情况处理"
    "docs/《TypeScript 从零实现 axios》/06.ts-axios 接口扩展"
    "docs/《TypeScript 从零实现 axios》/07.ts-axios 拦截器实现"
    "docs/《TypeScript 从零实现 axios》/08.ts-axios 配置化实现"
    "docs/《TypeScript 从零实现 axios》/09.ts-axios 取消功能实现"
    "docs/《TypeScript 从零实现 axios》/10.ts-axios 更多功能实现"
    "docs/《TypeScript 从零实现 axios》/11.ts-axios 单元测试"
    "docs/《TypeScript 从零实现 axios》/12.ts-axios 部署与发布"
)

missing_count=0
total=${#directories[@]}

for dir in "${directories[@]}"; do
    if [ ! -f "$dir/index.md" ]; then
        echo "❌ 缺失: $dir/index.md"
        ((missing_count++))
    fi
done

echo ""
if [ $missing_count -eq 0 ]; then
    echo "✅ 所有 $total 个目录都有 index.md 文件"
    echo "🎉 没有发现潜在的 404 问题"
else
    echo "⚠️  发现 $missing_count 个目录缺少 index.md 文件"
    echo "📝 建议为这些目录创建 index.md 导航页面"
fi

echo ""
echo "检查完成！"

