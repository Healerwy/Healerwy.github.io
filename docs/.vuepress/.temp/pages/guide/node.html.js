import comp from "D:/2025code/自主学习/学习文档网站/vuePress-demo/vuepress-document/Healerwy.github.io/docs/.vuepress/.temp/pages/guide/node.html.vue"
const data = JSON.parse("{\"path\":\"/guide/node.html\",\"title\":\"node知识\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1755768721000,\"contributors\":[{\"name\":\"wangyue\",\"username\":\"\",\"email\":\"2421447099@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"94d85ad21acc7374bc8f977ec64818ff10879956\",\"time\":1755768721000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"node内容\"}]},\"filePathRelative\":\"guide/node.md\"}")
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
