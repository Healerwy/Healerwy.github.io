import { CodeTabs } from "D:/2025code/vuePress-demo/vuepress-document/Healerwy.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/2025code/vuePress-demo/vuepress-document/Healerwy.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/2025code/vuePress-demo/vuepress-document/Healerwy.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
