import { defineConfig, DefaultTheme } from 'vitepress';
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';

const defaultSidebar = [
  {
    text: '指南',
    items: [
      { text: '介绍', link: '/guide/' },
      { text: '快速开始', link: '/guide/' },
      { text: '目录结构', link: '/guide/devFunction' },
    ],
  },
  {
    text: '进阶',
    items: [
      { text: '图标', link: '/icon' },
      { text: '主题和暗黑模式', link: '/icon' },
      { text: '国际化', link: '/icon' },
    ]
  }
];

const docsSidebar = [...defaultSidebar];

const guideNavbar = [{ text: '指南', items: [{ text: '快速开始', link: '/guide/' }, { text: '目录结构', link: '/guide/' }] }];

const docsNavbar = [...guideNavbar ];

export default defineConfig({
  base: '/',
  title: 'zh-admin',
  description: 'Integrate a collection of common tools and methods',
  lastUpdated: true,
  markdown: {
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
  themeConfig: {
    nav: docsNavbar,
    sidebar: docsSidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/jinmuyan5393/zh-utils' }],
    search: {
      provider: 'local',
    },
    outline: {
      label: '大纲',
      level: [2, 3],
    },
    lastUpdatedText: 'Last updated',
  },
});
