import comp from "D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/reference/api.html.vue"
const data = JSON.parse("{\"path\":\"/reference/api.html\",\"title\":\"欢迎来到我们的 API 文档！\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1761094244000,\"contributors\":[{\"name\":\"wangyue\",\"username\":\"\",\"email\":\"2421447099@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"598d682222de768c9c4a2434085145e01bc4c883\",\"time\":1761094244000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"文档\"}]},\"filePathRelative\":\"reference/api.md\"}")
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
