module.exports = {
  title: 'Gatsby 中文文档',
  description: '基于 React + Typescript + GraphQL 快速搭建网站',
  themeConfig: {
    nav: [
      { text: '文档', link: '/docs/' },
      { text: '教程', link: '/tutorial/' },
      { text: '首页', link: '/' }
    ],
    sidebar: {
      '/docs': [
        {
          title: '文档',
          collapsable: false,
          children: [
            ['/docs/', '介绍'],
            '/docs/quick-start',
            '/docs/recipes'
          ]
        },
        {
          title: '参考指南',
          collapsable: true,
          children: [ /* ... */ ]
        }
      ],
      '/tutorial': [
        {
          title: '教程',
          collapsable: false,
          children: [
            ['/tutorial/', '介绍'],
            ['/tutorial/part-zero/', '0. 安装开发环境'],
            ['/tutorial/part-one/', '1. 了解 Gatsby 的构建模块'],
            ['/tutorial/part-two/', '2. 在 Gatsby 中使用 CSS 样式'],
            ['/tutorial/part-three/', '3. 创建嵌套的布局组件'],
            ['/tutorial/part-four/', '4. Gatsby 中的数据'],
            ['/tutorial/part-five/', '5. 数据源插件'],
            ['/tutorial/part-six/', '6. 数据转换插件'],
            ['/tutorial/part-seven/', '7. 以编程的方式利用数据创建页面'],
            ['/tutorial/part-eight/', '8. 让网站准备好上线'],
          ]
        }
      ]
    },
    sidebarDepth: 2
  },
  dest: 'public'
}

