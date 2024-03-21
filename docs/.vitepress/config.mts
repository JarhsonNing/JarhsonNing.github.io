import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "JarhsonNing",
  description: "JarhonNing's docs",
  lastUpdated: true,
  base: '/frontEndDocs/',
  head: [['link', { rel: 'icon', href: '/frontEndDocs/favicon.ico' }]],
  themeConfig: {
    logo: '/favicon.ico',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '团队文档', link: '/teamDoc/' },
      { text: '编码规范', link: '/codingStandard/' }
    ],

    sidebar: {
      '/teamDoc/': [
        {
          text: '前端文档',
          items: [
            { text: '新员工指北', link: '/teamDoc/newStaff' },
          ]
        }
      ],
      '/codingStandard/': []
    },

    socialLinks: [],

    footer: {
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        forceLocale: true,
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
