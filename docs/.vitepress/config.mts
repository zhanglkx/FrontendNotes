/**
 * VitePress 配置文件
 *
 * 这是 Frontend Notes 项目的主配置文件
 * 包含站点信息、主题配置、导航栏、侧边栏等所有配置
 *
 * @see https://vitepress.dev/reference/site-config
 * @see https://theme.sugarat.top/config/frontmatter.html
 */

import { defineConfig } from "vitepress";
import { getThemeConfig } from "@sugarat/theme/node";

// ==================== 站点基础配置 ====================

// 域名配置
// 如果你有自定义域名，修改这里；否则使用 GitHub Pages 默认域名
const DOMAIN_NAME = "zhanglkx.github.io";
const BASE_PATH = "/FrontendNotes/";
const WEB_SITE = `https://${DOMAIN_NAME}${BASE_PATH}`;

// 根据环境动态设置路径前缀
const ASSETS_PATH = process.env.GITHUB_ACTIONS ? BASE_PATH : "/";

// ==================== 糖果主题配置 ====================

// 获取糖果主题配置
// @see https://theme.sugarat.top/config/
const blogTheme = getThemeConfig({
  // 作者信息
  author: "zhanglkx",
  // 热门文章配置
  hotArticle: {
    title: "🔥 精选文章",
    nextText: "换一组",
    pageSize: 9,
    empty: "暂无精选内容",
  },

  // 友链配置
  friend: [
    {
      nickname: "GitHub",
      des: "欢迎关注我的 GitHub",
      avatar:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      url: "https://github.com/zhanglkx",
    },
    // 可以添加更多友链
    // {
    //   nickname: "友链名称",
    //   des: "友链描述",
    //   avatar: "头像URL",
    //   url: "友链URL",
    // },
  ],

  // 相关文章推荐配置
  recommend: {
    title: "🔍 相关文章",
    nextText: "换一组",
    pageSize: 9,
    empty: "暂无相关文章",
    style: "sidebar", // 可选值: 'sidebar' | 'card'
  },

  // 文章配置
  article: {
    // 是否展示文章的预计阅读时间
    readingTime: true,
    // 是否隐藏文章页的封面展示
    hiddenCover: false,
  },

  // 搜索配置 - 使用 Pagefind 全文搜索
  // @see https://pagefind.app/
  search: "pagefind",

  // 评论系统配置 - 使用 Giscus
  // 访问 https://giscus.app/zh-CN 获取配置
  // 需要开启 GitHub Discussions 功能
  comment: {
    repo: "zhanglkx/FrontendNotes", // 你的仓库名
    repoId: "", // 从 giscus.app 获取
    category: "Announcements",
    categoryId: "", // 从 giscus.app 获取
    inputPosition: "top", // 评论框位置: 'top' | 'bottom'
  },

  // 友链页面配置
  friendLink: {
    title: "友情链接",
    more: "/04.更多/99.友情链接",
  },

  // 博客首页配置
  blog: {
    pagesData: [],
    // 首页标语
    name: "前端笔记",
    motto: "Web 前端技术博客，积跬步以至千里，致敬每个爱学习的你。",
    inspiring: "",
    pageSize: 10, // 每页显示的文章数量
  },
});

// ==================== VitePress 主配置 ====================

export default defineConfig({
  // 继承糖果主题配置
  extends: blogTheme,

  // 忽略死链接检查
  // 设置为 true 会忽略所有死链接
  // 也可以设置为数组，只忽略特定的链接
  ignoreDeadLinks: true,

  // ==================== 路由配置 ====================

  // 路由重写规则
  // 将原始文件路径映射到自定义的 URL 路径
  // 使用通配符 :path* 来匹配目录下的所有文件
  // 这样可以让 URL 更加简洁和语义化
  rewrites: {
    // 更多分类
    "04.更多/01.学习/:path*": "pages/study/:path*",
    "04.更多/03.面试/:path*": "pages/interview/:path*",
    "04.更多/05.心情杂货/:path*": "pages/mood/:path*",
    "04.更多/10.实用技巧/:path*": "pages/tips/:path*",

    // 前端分类
    "01.前端/25.JavaScript文章/:path*": "pages/javascript/:path*",

    // 页面分类
    "02.页面/20.CSS/:path*": "ui/css/:path*",
    "02.页面/10.HTML/:path*": "ui/html/:path*",

    // 技术分类
    "03.技术/01.技术文档/:path*": "pages/tech-docs/:path*",
    "03.技术/02.GitHub技巧/:path*": "pages/github/:path*",
    "03.技术/03.Nodejs/:path*": "pages/nodejs/:path*",
    "03.技术/04.博客搭建/:path*": "pages/blog/:path*",

    // Git 学习笔记
    "《Git》学习笔记/10.手册/:path*": "pages/git-manual/:path*",
    "《Git》学习笔记/20.文档笔记/:path*": "pages/git-docs/:path*",

    // JavaScript 教程笔记
    "《JavaScript教程》笔记/:path*": "pages/js-tutorial/:path*",

    // React 笔记
    "《React》笔记/01.核心概念/:path*": "pages/react-core/:path*",
    "《React》笔记/03.Hook/:path*": "pages/react-hook/:path*",

    // Vue 笔记
    "《Vue》笔记/01.基础/:path*": "pages/vue-basics/:path*",
    "《Vue》笔记/02.组件/:path*": "pages/vue-components/:path*",
    "《Vue》笔记/03.过渡&动画/:path*": "pages/vue-transition/:path*",
    "《Vue》笔记/06.规模化/:path*": "pages/vue-scale/:path*",
    "《Vue》笔记/99.其他/:path*": "pages/vue-others/:path*",

    // 其他
    "00.目录页/:path*": "pages/directories/:path*",
    "06.收藏夹/:path*": "pages/favorites/:path*",
    "@pages/:path*": "pages/special/:path*",
    "_posts/随笔/:path*": "pages/essays/:path*",
  },

  // ==================== 部署配置 ====================

  // 部署基础路径
  // GitHub Pages 部署路径: /<仓库名>/
  // 如果部署到根路径，设置为 '/'
  // 生产环境使用 GitHub Actions 部署，开发环境使用根路径
  base: process.env.GITHUB_ACTIONS ? "/FrontendNotes/" : "/",

  // ==================== 站点元信息 ====================

  // 站点语言
  lang: "zh-CN",

  // 站点标题
  title: "前端笔记",

  // 站点描述（用于 SEO）
  description:
    "前端技术博客，专注 Web 前端学习与总结。包含 JavaScript、TypeScript、Vue、React、ES6、Node.js、CSS、HTML、Git 等技术文章和学习笔记。",

  // ==================== HTML Head 配置 ====================

  // 在页面 HTML 的 <head> 标签中注入的标签
  head: [
    // 网站图标 - 支持多种设备和场景
    // 使用动态路径确保在开发和生产环境都能正确加载
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        href: `${ASSETS_PATH}img/favicon.ico`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `${ASSETS_PATH}img/logo.png`,
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: `${ASSETS_PATH}img/logo.png`,
      },
    ],

    // SEO 关键词
    [
      "meta",
      {
        name: "keywords",
        content:
          "前端博客,前端笔记,技术博客,前端开发,前端框架,Web前端,JavaScript,TypeScript,Vue,React,ES6,Node.js,CSS3,HTML5,Git,GitHub,学习笔记,技术文档,前端面试",
      },
    ],

    // 百度站长验证（可选）
    // 访问 https://ziyuan.baidu.com/ 获取验证码
    // ["meta", { name: "baidu-site-verification", content: "YOUR_CODE" }],

    // 主题颜色
    ["meta", { name: "theme-color", content: "#11a8cd" }],

    // Open Graph / Facebook 元标签（社交分享优化）
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "前端笔记 - Web 前端技术博客" }],
    [
      "meta",
      {
        property: "og:description",
        content: "专注 Web 前端学习与总结的技术博客",
      },
    ],
    ["meta", { property: "og:url", content: WEB_SITE }],

    // Twitter Card 元标签（社交分享优化）
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "前端笔记 - Web 前端技术博客" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "专注 Web 前端学习与总结的技术博客",
      },
    ],

    // 百度统计（可选）
    // 访问 https://tongji.baidu.com/ 获取统计代码
    // [
    //   "script",
    //   {},
    //   `
    //     var _hmt = _hmt || [];
    //     (function() {
    //       var hm = document.createElement("script");
    //       hm.src = "https://hm.baidu.com/hm.js?YOUR_BAIDU_TONGJI_CODE";
    //       var s = document.getElementsByTagName("script")[0];
    //       s.parentNode.insertBefore(hm, s);
    //     })();
    //   `,
    // ],

    // Google Analytics（可选）
    // 访问 https://analytics.google.com/ 获取跟踪 ID
    // [
    //   "script",
    //   { async: "", src: "https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID" },
    // ],
    // [
    //   "script",
    //   {},
    //   `
    //     window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    //     gtag('js', new Date());
    //     gtag('config', 'YOUR_GA_ID');
    //   `,
    // ],
  ],

  // ==================== 主题配置 ====================

  themeConfig: {
    // 导航栏 Logo
    logo: "/img/logo.png",

    // ==================== 导航栏配置 ====================
    // 配置顶部导航菜单
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        items: [
          {
            text: "前端文章",
            items: [{ text: "JavaScript", link: "/pages/javascript/" }],
          },
          {
            text: "学习笔记",
            items: [
              { text: "JavaScript教程", link: "/pages/js-tutorial/" },
              {
                text: "ES6 教程",
                link: "/《ES6 教程》笔记/01.ECMAScript 6 简介",
              },
              { text: "Vue", link: "/《Vue》笔记/01.基础/" },
              { text: "React", link: "/《React》笔记/01.核心概念/" },
              {
                text: "TypeScript 从零实现 axios",
                link: "/《TypeScript 从零实现 axios》/01.初识 TypeScript/",
              },
              { text: "Git 手册", link: "/pages/git-manual/" },
              { text: "Git 文档", link: "/pages/git-docs/" },
            ],
          },
        ],
      },
      {
        text: "页面",
        items: [
          { text: "HTML", link: "/ui/html/" },
          { text: "CSS", link: "/ui/css/" },
        ],
      },
      {
        text: "技术",
        items: [
          { text: "技术文档", link: "/pages/tech-docs/" },
          { text: "GitHub技巧", link: "/pages/github/" },
          { text: "Nodejs", link: "/pages/nodejs/" },
          { text: "博客搭建", link: "/pages/blog/" },
        ],
      },
      {
        text: "更多",
        items: [
          { text: "学习", link: "/pages/study/" },
          { text: "面试", link: "/pages/interview/" },
          { text: "心情杂货", link: "/pages/mood/" },
          { text: "实用技巧", link: "/pages/tips/" },
          { text: "友情链接", link: "/04.更多/99.友情链接" },
        ],
      },
      { text: "关于", link: "/05.关于/01.关于" },
      { text: "收藏", link: "/06.收藏夹/01.网站" },
    ],

    // 侧边栏配置
    sidebar: {
      "/《JavaScript教程》笔记/": [
        {
          text: "JavaScript教程笔记",
          items: [
            { text: "基础", link: "/《JavaScript教程》笔记/01.基础" },
            { text: "内置对象", link: "/《JavaScript教程》笔记/02.内置对象" },
            { text: "面向对象", link: "/《JavaScript教程》笔记/03.面向对象" },
            { text: "异步操作", link: "/《JavaScript教程》笔记/04.异步操作" },
            { text: "DOM", link: "/《JavaScript教程》笔记/05.DOM" },
            { text: "事件", link: "/《JavaScript教程》笔记/06.事件" },
            {
              text: "浏览器模型",
              link: "/《JavaScript教程》笔记/07.浏览器模型",
            },
          ],
        },
      ],
      "/《ES6 教程》笔记/": [
        {
          text: "ES6 教程笔记",
          collapsed: false,
          items: [
            {
              text: "ECMAScript 6 简介",
              link: "/《ES6 教程》笔记/01.ECMAScript 6 简介",
            },
            {
              text: "let 和 const 命令",
              link: "/《ES6 教程》笔记/02.let 和 const 命令",
            },
            {
              text: "变量的解构赋值",
              link: "/《ES6 教程》笔记/03.变量的解构赋值",
            },
            { text: "字符串的扩展", link: "/《ES6 教程》笔记/04.字符串的扩展" },
            {
              text: "字符串的新增方法",
              link: "/《ES6 教程》笔记/05.字符串的新增方法",
            },
            { text: "正则的扩展", link: "/《ES6 教程》笔记/06.正则的扩展" },
            { text: "数值的扩展", link: "/《ES6 教程》笔记/07.数值的扩展" },
            { text: "函数的扩展", link: "/《ES6 教程》笔记/08.函数的扩展" },
            { text: "数组的扩展", link: "/《ES6 教程》笔记/09.数组的扩展" },
            { text: "对象的扩展", link: "/《ES6 教程》笔记/10.对象的扩展" },
            {
              text: "对象的新增方法",
              link: "/《ES6 教程》笔记/11.对象的新增方法",
            },
            { text: "Symbol", link: "/《ES6 教程》笔记/12.Symbol" },
            {
              text: "Set 和 Map 数据结构",
              link: "/《ES6 教程》笔记/13.Set 和 Map 数据结构",
            },
            { text: "Proxy", link: "/《ES6 教程》笔记/14.Proxy" },
            { text: "Reflect", link: "/《ES6 教程》笔记/15.Reflect" },
            { text: "Promise 对象", link: "/《ES6 教程》笔记/16.Promise 对象" },
            {
              text: "Iterator 和 for-of 循环",
              link: "/《ES6 教程》笔记/17.Iterator 和 for-of 循环",
            },
            {
              text: "Generator 函数的语法",
              link: "/《ES6 教程》笔记/18.Generator 函数的语法",
            },
            {
              text: "Generator 函数的异步应用",
              link: "/《ES6 教程》笔记/19.Generator 函数的异步应用",
            },
            { text: "async 函数", link: "/《ES6 教程》笔记/20.async 函数" },
            {
              text: "Class 的基本语法",
              link: "/《ES6 教程》笔记/21.Class 的基本语法",
            },
            { text: "Class 的继承", link: "/《ES6 教程》笔记/22.Class 的继承" },
            {
              text: "Module 的语法",
              link: "/《ES6 教程》笔记/23.Module 的语法",
            },
            {
              text: "Module 的加载实现",
              link: "/《ES6 教程》笔记/24.Module 的加载实现",
            },
          ],
        },
      ],
      // 其他侧边栏配置可以根据需要添加
    },

    // ==================== 社交链接 ====================
    // 显示在导航栏右侧的社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/zhanglkx" },
      // 可以添加更多社交链接
      // { icon: "twitter", link: "https://twitter.com/yourusername" },
      // { icon: "discord", link: "https://discord.gg/yourinvite" },
      // { icon: "linkedin", link: "https://linkedin.com/in/yourusername" },
    ],

    // ==================== 页脚配置 ====================
    footer: {
      message:
        '<a href="https://github.com/zhanglkx/FrontendNotes/blob/main/LICENSE" target="_blank">MIT License</a>',
      copyright: "Copyright © 2024-present zhanglkx",
    },

    // ==================== 文档页脚配置 ====================
    // 上一页/下一页的文本
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    // ==================== 最后更新时间配置 ====================
    lastUpdated: {
      text: "上次更新",
      formatOptions: {
        dateStyle: "full", // 日期样式: 'full' | 'long' | 'medium' | 'short'
        timeStyle: "medium", // 时间样式: 'full' | 'long' | 'medium' | 'short'
      },
    },

    // ==================== 大纲配置 ====================
    // 右侧目录大纲
    outline: {
      level: [2, 3], // 显示的标题级别: [最小级别, 最大级别]
      label: "目录", // 大纲标题
    },

    // ==================== 编辑链接配置 ====================
    // "在 GitHub 上编辑此页" 链接
    editLink: {
      pattern: "https://github.com/zhanglkx/FrontendNotes/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
  },

  // ==================== Markdown 配置 ====================
  markdown: {
    // 显示代码块行号
    lineNumbers: true,

    // 图片配置
    image: {
      // 启用图片懒加载，提升页面性能
      lazyLoading: true,
    },

    // 可以添加更多 Markdown 配置
    // 例如：数学公式、Mermaid 图表等
    // math: true,
    // mermaid: true,
  },

  // ==================== 站点地图配置 ====================
  // 自动生成 sitemap.xml，有利于 SEO
  sitemap: {
    hostname: WEB_SITE,
  },

  // ==================== 构建配置 ====================
  vite: {
    // 优化依赖配置
    optimizeDeps: {
      // 排除不需要预构建的依赖
      exclude: ["@sugarat/theme"],
    },

    // 可以添加更多 Vite 配置
    // 例如：构建优化、别名等
    // build: {
    //   rollupOptions: {
    //     output: {
    //       manualChunks: {},
    //     },
    //   },
    // },
  },
});
