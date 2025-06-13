import comp from "D:/2025code/vuePress-demo/vuepress-document/Healerwy.github.io/docs/.vuepress/.temp/pages/guide/webpack.html.vue"
const data = JSON.parse("{\"path\":\"/guide/webpack.html\",\"title\":\"Webpack知识\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1749800731000,\"contributors\":[{\"name\":\"wangyue\",\"username\":\"wangyue\",\"email\":\"2421447099@qq.com\",\"commits\":3,\"url\":\"https://github.com/wangyue\"}],\"changelog\":[{\"hash\":\"0191fb41f93d52b648c9ec651351429230cc2e45\",\"time\":1749800731000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"webpack\"},{\"hash\":\"a549831a87bfee0de7508ffd2940f33f9134ff87\",\"time\":1749785272000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"修改\"},{\"hash\":\"2d8d49c5b189af9d7c36e64609c314dd70f71b89\",\"time\":1749633342000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"提交webpack\"}]},\"filePathRelative\":\"guide/webpack.md\"}")
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
