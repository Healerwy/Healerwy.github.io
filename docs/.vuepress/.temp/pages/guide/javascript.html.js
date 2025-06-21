import comp from "D:/2025code/vuePress-demo/vuepress-document/Healerwy.github.io/docs/.vuepress/.temp/pages/guide/javascript.html.vue"
const data = JSON.parse("{\"path\":\"/guide/javascript.html\",\"title\":\"JavaScript知识\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1750055701000,\"contributors\":[{\"name\":\"wangyue\",\"username\":\"wangyue\",\"email\":\"2421447099@qq.com\",\"commits\":3,\"url\":\"https://github.com/wangyue\"}],\"changelog\":[{\"hash\":\"1cffd9cc6e3279ec476198abe09a5ffef908ce2f\",\"time\":1750055701000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"wy\"},{\"hash\":\"61adc0d690aa60ac8f6702e5ae8507a8e576e9e8\",\"time\":1749545934000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"正式更新\"},{\"hash\":\"f81d6d8e65ee25927c75e716b741995600d93985\",\"time\":1749535577000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"wy\"}]},\"filePathRelative\":\"guide/javascript.md\"}")
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
