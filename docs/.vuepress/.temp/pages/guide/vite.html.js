import comp from "D:/2025code/vuePress-demo/vuepress-document/Healerwy.github.io/docs/.vuepress/.temp/pages/guide/vite.html.vue"
const data = JSON.parse("{\"path\":\"/guide/vite.html\",\"title\":\"Vite知识\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1750492773000,\"contributors\":[{\"name\":\"wangyue\",\"username\":\"wangyue\",\"email\":\"2421447099@qq.com\",\"commits\":2,\"url\":\"https://github.com/wangyue\"}],\"changelog\":[{\"hash\":\"8618b876fc3b3bd29293b9e28c7648ec8a651164\",\"time\":1750492773000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"新增vite内容\"},{\"hash\":\"d4b10498ec87155e90e6e755c029558551c34270\",\"time\":1749805456000,\"email\":\"2421447099@qq.com\",\"author\":\"wangyue\",\"message\":\"浏览器\"}]},\"filePathRelative\":\"guide/vite.md\"}")
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
