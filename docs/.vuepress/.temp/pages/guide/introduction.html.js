import comp from "D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/guide/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/guide/introduction.html\",\"title\":\"介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1749258445000,\"contributors\":[{\"name\":\"wangyue\",\"username\":\"\",\"email\":\"2421447099@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"6f3348bfa000cb6af914386e9a5d063c303a6cbd\",\"time\":1749258445000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"初始化提交\"}]},\"filePathRelative\":\"guide/introduction.md\"}")
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
