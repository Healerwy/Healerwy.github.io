import comp from "D:/2025code/vuePress-demo/vuepress-document/Healerwy.github.io/docs/.vuepress/.temp/pages/interview/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/interview/introduction.html\",\"title\":\"JavaScript面试题\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1752656281000,\"contributors\":[{\"name\":\"wangyue\",\"username\":\"wangyue\",\"email\":\"2421447099@qq.com\",\"commits\":1,\"url\":\"https://github.com/wangyue\"}],\"changelog\":[{\"hash\":\"9739fc2905fe670d8978977ba182b3edc24ab87d\",\"time\":1752656281000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"新增面试题\"}]},\"filePathRelative\":\"interview/introduction.md\"}")
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
