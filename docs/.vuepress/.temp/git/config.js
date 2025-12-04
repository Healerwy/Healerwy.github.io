import { GitContributors } from "D:/2025code/自主学习/学习文档网站/vuePress-demo/vuepress-document/Healerwy.github.io/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/2025code/自主学习/学习文档网站/vuePress-demo/vuepress-document/Healerwy.github.io/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
