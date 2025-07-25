export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"指南\",\"link\":\"/guide/introduction\"},{\"text\":\"面试题\",\"link\":\"/interview/introduction\"},{\"text\":\"参考\",\"link\":\"/reference/api\"},{\"text\":\"GitHub\",\"link\":\"https://github.com\"}],\"sidebar\":{\"/guide/\":[{\"text\":\"指南\",\"children\":[\"/guide/introduction\",\"/guide/browser\",\"/guide/javascript\",\"/guide/webpack\",\"/guide/vite\"]}],\"/interview/\":[{\"text\":\"面试题\",\"children\":[\"/interview/introduction\",\"/interview/webpack\"]}],\"/reference/\":[{\"text\":\"参考\",\"children\":[\"/reference/api\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
