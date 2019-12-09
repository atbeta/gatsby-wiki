module.exports = {
  title: 'Gatsby 中文文档',
  description: '基于 React + Typescript + GraphQL 快速搭建网站',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/' },
      { text: '教程', link: '/tutorials/' },
    ],
    sidebar: {
      '/docs': [
        {
          title: '文档',
          collapsable: false,
          children: [
            '/docs/introduction',
            '/docs/quick-start'
          ]
        },
        {
          title: '参考指南',
          collapsable: true,
          children: [ /* ... */ ]
        }
      ],
      '/tutorials': [
        {
          title: '测试',
          collapsable: false,
          children: [
            ['/tutorials/', '介绍'],
            ['/tutorials/part-zero/', '第一部分']
          ]
        }
      ]
    },
    sidebarDepth: 2
  },
  dest: 'public'
}

