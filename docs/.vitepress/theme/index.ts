/**
 * VitePress 主题配置
 *
 * 扩展默认主题，添加自定义功能和样式
 *
 * @see https://vitepress.dev/guide/custom-theme
 */

import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

// 导入自定义样式
import "./style/custom.css"; // 自定义样式
import "./style/vars.css"; // CSS 变量定义

// 导入 medium-zoom 库用于图片放大功能
import mediumZoom from "medium-zoom";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";

/**
 * 主题配置导出
 * 扩展 VitePress 默认主题
 */
export default {
  // 继承默认主题
  extends: DefaultTheme,

  /**
   * 主题设置函数
   * 在这里可以添加全局功能、注册组件等
   */
  setup() {
    const route = useRoute();

    /**
     * 初始化图片放大功能
     * 使用 medium-zoom 为所有文章图片添加点击放大效果
     */
    const initZoom = () => {
      // 选择所有文章主体中的图片
      // background 设置为页面背景色，保持视觉一致性
      mediumZoom(".main img", {
        background: "var(--vp-c-bg)",
      });
    };

    // 组件挂载时初始化图片放大功能
    onMounted(() => {
      initZoom();
    });

    // 监听路由变化，在页面切换时重新初始化图片放大功能
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    // 可以在这里添加更多自定义功能
    // 例如：
    // - 注册全局组件
    // - 添加全局状态管理
    // - 集成第三方库
    // - 添加页面生命周期钩子
  },

  // 可以在这里扩展更多主题配置
  // enhanceApp({ app, router, siteData }) {
  //   // 注册全局组件
  //   // app.component('CustomComponent', CustomComponent)
  //
  //   // 添加全局属性
  //   // app.config.globalProperties.$customProperty = 'value'
  // },
} satisfies Theme;
