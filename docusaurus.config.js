module.exports = {
  title: 'Steedos',
  tagline: 'Open Source Low-Code Development Platform',
  url: 'https://www.steedos.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'steedos', // Usually your GitHub org/user name.
  projectName: 'steedos.org', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Steedos',
      // style: 'dark',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [{
        to: '/', label: 'Platform', position: 'left', activeBasePath: '/none'},
        {
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/steedos/steedos-platform',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/steedos',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/steedos',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/steedos',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/steedos/steedos-platform',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Steedos, Inc.`,
    },
  },
  stylesheets: [
    '/website/libs/tailwind.min.css',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // routeBasePath: '/', // Set this value to '/'.
          // Please change this to your repo.
          editUrl:
            'https://github.com/steedos/steedos-platform/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/steedos/steedos-platform/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
