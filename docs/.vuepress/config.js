module.exports = {
  title: 'vuepress',
  description: 'Awesome description',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: [
      ['/', 'Home'],
      ['/about/', 'About'],
      ['/contact/', 'Contact']
    ]
  }
}
