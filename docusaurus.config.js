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
  trailingSlash: 'false',

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
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            to: '/genuine-installation-media',
            position: 'left',
            label: 'Download Windows / Office',
          },
          {
            to: '/hwid',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/news',
            position: 'left',
            label: 'News',
          },
          {
            to: '/credits',
            position: 'left',
            label: 'Credits',
          },
          {
            to: '/contactus',
            position: 'right',
            label: 'Contact Us',
          },
          /* {to: '/blog', label: 'Blog', position: 'left'}, */
          {
            href: 'https://discord.gg/tVFN4N84PP',
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
      /*   footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      }, */
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
