export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/browser.html", { loader: () => import(/* webpackChunkName: "guide_browser.html" */"D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/guide/browser.html.js"), meta: {"title":"浏览器知识"} }],
  ["/guide/electron.html", { loader: () => import(/* webpackChunkName: "guide_electron.html" */"D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/guide/electron.html.js"), meta: {"title":"Electron知识"} }],
  ["/guide/introduction.html", { loader: () => import(/* webpackChunkName: "guide_introduction.html" */"D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/guide/introduction.html.js"), meta: {"title":"介绍"} }],
  ["/guide/javascript.html", { loader: () => import(/* webpackChunkName: "guide_javascript.html" */"D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/guide/javascript.html.js"), meta: {"title":"JavaScript知识"} }],
  ["/guide/node.html", { loader: () => import(/* webpackChunkName: "guide_node.html" */"D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/guide/node.html.js"), meta: {"title":"node知识"} }],
  ["/guide/vite.html", { loader: () => import(/* webpackChunkName: "guide_vite.html" */"D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/guide/vite.html.js"), meta: {"title":"Vite知识"} }],
  ["/guide/webpack.html", { loader: () => import(/* webpackChunkName: "guide_webpack.html" */"D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/guide/webpack.html.js"), meta: {"title":"Webpack知识"} }],
  ["/interview/introduction.html", { loader: () => import(/* webpackChunkName: "interview_introduction.html" */"D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/interview/introduction.html.js"), meta: {"title":"JavaScript面试题"} }],
  ["/interview/webpack.html", { loader: () => import(/* webpackChunkName: "interview_webpack.html" */"D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/interview/webpack.html.js"), meta: {"title":"webpack面试题"} }],
  ["/reference/api.html", { loader: () => import(/* webpackChunkName: "reference_api.html" */"D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/reference/api.html.js"), meta: {"title":"欢迎来到我们的 API 文档！"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/2025code/自主学习/学习文档网站/gitee-vuePress-demo/document/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
