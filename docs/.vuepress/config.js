// docs/.vuepress/config.js
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default {
  // 站点基本配置
  base: '/Healerwy.github.io/',
  lang: 'zh-CN',
  title: '技术文档网站',
  description: '基于 VuePress v2 的技术文档',
  
  // 主题配置
  theme: defaultTheme({
    // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduction' },
      { text: '参考', link: '/reference/api' },
      { text: 'GitHub', link: 'https://github.com' }
    ],
    
    // 侧边栏配置
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/introduction',
            // '/guide/installation',
            // '/guide/quick-start'
          ]
        }
      ],
      '/reference/': [
        {
          text: '参考',
          children: [
            '/reference/api',
            '/reference/config',
            '/reference/components'
          ]
        }
      ]
    }
  }),

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  
  // Vite 配置
  vite: {
    optimizeDeps: {
      include: ['vue', 'markdown-it']
    }
  }
}