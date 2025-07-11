import comp from "D:/2025code/vuePress-demo/vuepress-document/Healerwy.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"https://picsum.photos/800/300\",\"heroText\":\"技术文档网站\",\"tagline\":\"基于 VuePress v2 + Vue 3 + Vite\",\"actionButtons\":[{\"text\":\"快速开始\",\"link\":\"/guide/quick-start\",\"type\":\"primary\"},{\"text\":\"查看文档\",\"link\":\"/guide/introduction\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简洁高效\",\"details\":\"基于 Vue 3 和 Vite，构建速度极快\"},{\"title\":\"组件化\",\"details\":\"在 Markdown 中使用 Vue 组件增强交互\"},{\"title\":\"响应式设计\",\"details\":\"完美适配桌面和移动设备\"}],\"footer\":\"MIT Licensed | Copyright © 2023\"},\"git\":{\"updatedTime\":1749535577000,\"contributors\":[{\"name\":\"wangyue\",\"username\":\"wangyue\",\"email\":\"2421447099@qq.com\",\"commits\":1,\"url\":\"https://github.com/wangyue\"}],\"changelog\":[{\"hash\":\"f81d6d8e65ee25927c75e716b741995600d93985\",\"time\":1749535577000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"wy\"}]},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
