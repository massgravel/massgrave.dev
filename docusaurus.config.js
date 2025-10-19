// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MAS',
  tagline: 'A Windows and Office activator using HWID / Ohook / KMS38 / Online KMS activation methods, with a focus on open-source code and fewer antivirus detections.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://massgrave.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'massgravel', // Usually your GitHub org/user name.
  projectName: 'massgrave.dev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/', // Serve the docs at the site's root	
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/massgravel/massgrave.dev/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/massgravel/massgrave.dev/tree/main/',
          // Useful options to enforce blogging best practices
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
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
                label: 'Our Non-Piracy Site',
                to: '/our_non-piracy_site',
              },
              {
                label: 'Contribute',
                to: '/contribute',
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
            href: 'https://discord.gg/j2yFsV5ZVC',
            className: 'discord-button',
            position: 'right',
            label: 'Discord',
            "title": 'Chat with us on Discord',
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
