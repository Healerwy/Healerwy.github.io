import comp from "D:/2025code/vuePress-demo/vuepress-document/Healerwy.github.io/docs/.vuepress/.temp/pages/interview/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/interview/introduction.html\",\"title\":\"JavaScript面试题\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"interview/introduction.md\"}")
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
