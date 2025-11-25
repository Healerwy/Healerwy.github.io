import comp from "D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/guide/vite.html.vue"
const data = JSON.parse("{\"path\":\"/guide/vite.html\",\"title\":\"Vite知识\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1763528893000,\"contributors\":[{\"name\":\"wangyue\",\"username\":\"\",\"email\":\"2421447099@qq.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"8756d3ce2f9f7f8c42144d243b23e228ff352bb7\",\"time\":1763528893000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"修改\"},{\"hash\":\"0fac539975b3a8155eaa6cbed478bb874ac11f26\",\"time\":1761207856000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"新增vite模块css的知识\"},{\"hash\":\"598d682222de768c9c4a2434085145e01bc4c883\",\"time\":1761094244000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"文档\"}]},\"filePathRelative\":\"guide/vite.md\"}")
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
