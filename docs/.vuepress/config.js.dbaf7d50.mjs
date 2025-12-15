// docs/.vuepress/config.js
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
var config_default = {
  // 站点基本配置
  base: "/",
  //Healerwy.github.io/
  lang: "zh-CN",
  title: "Yue\u6280\u672F\u6587\u6863\u7F51\u7AD9",
  description: "\u57FA\u4E8E VuePress v2 \u7684\u6280\u672F\u6587\u6863",
  // 主题配置
  theme: defaultTheme({
    // 导航栏配置
    navbar: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u6307\u5357", link: "/guide/introduction" },
      { text: "\u9762\u8BD5\u9898", link: "/interview/introduction" },
      { text: "\u53C2\u8003", link: "/reference/api" },
      { text: "GitHub", link: "https://github.com" }
    ],
    // 侧边栏配置
    sidebar: {
      "/guide/": [
        {
          text: "\u6307\u5357",
          children: [
            "/guide/introduction",
            "/guide/browser",
            "/guide/javascript",
            "/guide/webpack",
            "/guide/vite",
            "/guide/electron",
            "/guide/node",
            "/guide/wei"
          ]
        }
      ],
      "/interview/": [
        {
          text: "\u9762\u8BD5\u9898",
          children: [
            "/interview/introduction",
            "/interview/webpack"
          ]
        }
      ],
      "/reference/": [
        {
          text: "\u53C2\u8003",
          children: [
            "/reference/api"
            // '/reference/config',
            // '/reference/components'
          ]
        }
      ]
    }
  }),
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {}
  }),
  // Vite 配置
  vite: {
    optimizeDeps: {
      include: ["vue", "markdown-it"]
    }
  }
};
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovMjAyNWNvZGUvSGVhbGVyd3kuZ2l0aHViLmlvL0hlYWxlcnd5LmdpdGh1Yi5pby9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcMjAyNWNvZGVcXFxcSGVhbGVyd3kuZ2l0aHViLmlvXFxcXEhlYWxlcnd5LmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LzIwMjVjb2RlL0hlYWxlcnd5LmdpdGh1Yi5pby9IZWFsZXJ3eS5naXRodWIuaW8vZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7Ly8gZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXHJcbmltcG9ydCB7IGRlZmF1bHRUaGVtZSB9IGZyb20gJ0B2dWVwcmVzcy90aGVtZS1kZWZhdWx0J1xyXG5pbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXZpdGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gXHU3QUQ5XHU3MEI5XHU1N0ZBXHU2NzJDXHU5MTREXHU3RjZFXHJcbiAgYmFzZTogJy8nLC8vSGVhbGVyd3kuZ2l0aHViLmlvL1xyXG4gIGxhbmc6ICd6aC1DTicsXHJcbiAgdGl0bGU6ICdZdWVcdTYyODBcdTY3MkZcdTY1ODdcdTY4NjNcdTdGNTFcdTdBRDknLFxyXG4gIGRlc2NyaXB0aW9uOiAnXHU1N0ZBXHU0RThFIFZ1ZVByZXNzIHYyIFx1NzY4NFx1NjI4MFx1NjcyRlx1NjU4N1x1Njg2MycsXHJcbiAgXHJcbiAgLy8gXHU0RTNCXHU5ODk4XHU5MTREXHU3RjZFXHJcbiAgdGhlbWU6IGRlZmF1bHRUaGVtZSh7XHJcbiAgICAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcdTkxNERcdTdGNkVcclxuICAgIG5hdmJhcjogW1xyXG4gICAgICB7IHRleHQ6ICdcdTk5OTZcdTk4NzUnLCBsaW5rOiAnLycgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU2MzA3XHU1MzU3JywgbGluazogJy9ndWlkZS9pbnRyb2R1Y3Rpb24nIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1OTc2Mlx1OEJENVx1OTg5OCcsIGxpbms6ICcvaW50ZXJ2aWV3L2ludHJvZHVjdGlvbicgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU1M0MyXHU4MDAzJywgbGluazogJy9yZWZlcmVuY2UvYXBpJyB9LFxyXG4gICAgICB7IHRleHQ6ICdHaXRIdWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tJyB9XHJcbiAgICBdLFxyXG4gICAgXHJcbiAgICAvLyBcdTRGQTdcdThGQjlcdTY4MEZcdTkxNERcdTdGNkVcclxuICAgIHNpZGViYXI6IHtcclxuICAgICAgJy9ndWlkZS8nOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1NjMwN1x1NTM1NycsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAnL2d1aWRlL2ludHJvZHVjdGlvbicsXHJcbiAgICAgICAgICAgICcvZ3VpZGUvYnJvd3NlcicsXHJcbiAgICAgICAgICAgICcvZ3VpZGUvamF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgICcvZ3VpZGUvd2VicGFjaycsXHJcbiAgICAgICAgICAgICcvZ3VpZGUvdml0ZScsXHJcbiAgICAgICAgICAgICcvZ3VpZGUvZWxlY3Ryb24nLFxyXG4gICAgICAgICAgICAnL2d1aWRlL25vZGUnLFxyXG4gICAgICAgICAgICAnL2d1aWRlL3dlaScsXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICAnL2ludGVydmlldy8nOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1OTc2Mlx1OEJENVx1OTg5OCcsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAnL2ludGVydmlldy9pbnRyb2R1Y3Rpb24nLFxyXG4gICAgICAgICAgICAnL2ludGVydmlldy93ZWJwYWNrJ1xyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgJy9yZWZlcmVuY2UvJzogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdTUzQzJcdTgwMDMnLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgJy9yZWZlcmVuY2UvYXBpJyxcclxuICAgICAgICAgICAgLy8gJy9yZWZlcmVuY2UvY29uZmlnJyxcclxuICAgICAgICAgICAgLy8gJy9yZWZlcmVuY2UvY29tcG9uZW50cydcclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9KSxcclxuXHJcbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoe1xyXG4gICAgdml0ZU9wdGlvbnM6IHt9LFxyXG4gICAgdnVlUGx1Z2luT3B0aW9uczoge30sXHJcbiAgfSksXHJcbiAgXHJcbiAgLy8gVml0ZSBcdTkxNERcdTdGNkVcclxuICB2aXRlOiB7XHJcbiAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgaW5jbHVkZTogWyd2dWUnLCAnbWFya2Rvd24taXQnXVxyXG4gICAgfVxyXG4gIH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLG1CQUFtQjtBQUU1QixJQUFPLGlCQUFRO0FBQUE7QUFBQSxFQUViLE1BQU07QUFBQTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBO0FBQUEsRUFHYixPQUFPLGFBQWE7QUFBQTtBQUFBLElBRWxCLFFBQVE7QUFBQSxNQUNOLEVBQUUsTUFBTSxnQkFBTSxNQUFNLElBQUk7QUFBQSxNQUN4QixFQUFFLE1BQU0sZ0JBQU0sTUFBTSxzQkFBc0I7QUFBQSxNQUMxQyxFQUFFLE1BQU0sc0JBQU8sTUFBTSwwQkFBMEI7QUFBQSxNQUMvQyxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxpQkFBaUI7QUFBQSxNQUNyQyxFQUFFLE1BQU0sVUFBVSxNQUFNLHFCQUFxQjtBQUFBLElBQy9DO0FBQUE7QUFBQSxJQUdBLFNBQVM7QUFBQSxNQUNQLFdBQVc7QUFBQSxRQUNUO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsWUFDUjtBQUFBO0FBQUE7QUFBQSxVQUdGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQUEsRUFFRCxTQUFTLFlBQVk7QUFBQSxJQUNuQixhQUFhLENBQUM7QUFBQSxJQUNkLGtCQUFrQixDQUFDO0FBQUEsRUFDckIsQ0FBQztBQUFBO0FBQUEsRUFHRCxNQUFNO0FBQUEsSUFDSixjQUFjO0FBQUEsTUFDWixTQUFTLENBQUMsT0FBTyxhQUFhO0FBQUEsSUFDaEM7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
