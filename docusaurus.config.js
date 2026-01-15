import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MAS',
  tagline: 'Open-source Windows and Office activator featuring HWID, Ohook, TSforge, and Online KMS activation methods, along with advanced troubleshooting.',
  favicon: 'img/favicon.ico',
  baseUrl: '/',
  baseUrlIssueBanner: true,
  url: 'https://massgrave.dev',
  organizationName: 'massgravel',
  projectName: 'massgrave.dev',

  onBrokenLinks: 'throw',
  trailingSlash: false,

  future: {
    v4: true,
    experimental_faster: true
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/redirect-genuine-installation-media',
            to: '/genuine-installation-media',
          },
          {
            from: ['/change_edition', '/change_edition.html'],
            to: '/change_windows_edition',
          },
          {
            from: '/msdl',
            to: 'https://msdl.gravesoft.dev/',
          },
          {
            from: '/api/msdl/proxy',
            to: 'https://msdl.gravesoft.dev/',
          },
        ],
      },
    ],
  ],

  markdown:
  ({
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  }),

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: 'img/card.png',
      navbar: {
        title: 'MAS',
        logo: {
          alt: 'MAS',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Home',
            activeBaseRegex: "^/$",
          },
          {
            to: '/genuine-installation-media',
            position: 'left',
            label: 'Download Windows / Office',
          },
          {
            to: '/faq',
            position: 'left',
            label: 'FAQ',
          },
          {
            to: '/troubleshoot',
            position: 'left',
            label: 'Troubleshoot',
          },
          {
            type: 'dropdown',
            label: 'More',
            position: 'left',
            items: [
              {
                label: 'Docs',
                to: '/hwid',
              },
              {
                label: 'Manual Activation',
                to: '/manual_hwid_activation'
              },
              {
                label: 'Guides',
                to: '/guide_links',
              },
              {
                label: 'Unsupported Products Activation',
                to: '/unsupported_products_activation',
              },
              {
                to: '/news',
                label: 'News',
              },
              {
                label: 'MAS Changelog',
                to: '/changelog',
              },
              {
                label: 'Credits',
                to: '/credits',
              },
            ],
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            to: '/contactus',
            position: 'right',
            label: 'Contact Us',
          },
          {
            href: 'https://github.com/massgravel/Microsoft-Activation-Scripts',
            className: 'github-button',
            position: 'right',
            label: 'GitHub',
            "title": 'GitHub repository',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
