import comp from "D:/2025code/vuePress-demo/vuepress-document/Healerwy.github.io/docs/.vuepress/.temp/pages/guide/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/guide/introduction.html\",\"title\":\"介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1749535577000,\"contributors\":[{\"name\":\"wangyue\",\"username\":\"wangyue\",\"email\":\"2421447099@qq.com\",\"commits\":1,\"url\":\"https://github.com/wangyue\"}],\"changelog\":[{\"hash\":\"f81d6d8e65ee25927c75e716b741995600d93985\",\"time\":1749535577000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"wy\"}]},\"filePathRelative\":\"guide/introduction.md\"}")
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
