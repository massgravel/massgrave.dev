/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    'intro',
    {
      type: 'category',
      label: 'Download Windows / Office',
      link: {type: 'doc', id: 'genuine-installation-media'},
      items: [
        'windows_11_links',
        'windows_10_links',
        'windows_ltsc_links',
        'windows_arm_links',
        'windows-server-links',
        {
          type: 'html',
          value: '<hr class="sidebar-hr" />',
        },
        'windows_8.1_links',
        'windows_8_links',
        'windows_7_links',
        'windows_vista__links',
        'windows_xp_links',
        {
          type: 'html',
          value: '<hr class="sidebar-hr" />',
        },
        {
          type: 'link',
          label: 'Office C2R Installers',
          href: 'https://gravesoft.dev/office_c2r_links',
        },
        {
          type: 'link',
          label: 'Office C2R Custom Install',
          href: 'https://gravesoft.dev/office_c2r_custom',
        },
        'office_msi_links',
        'office_for_mac'
      ],
    },
    'faq',
    'troubleshoot',
    {
      type: 'html',
      value: '<hr class="sidebar-hr" />',
    },
    {
      type: 'category',
      label: 'Docs',
      items: ['hwid','ohook','tsforge','online_kms','chart','command_line_switches','check_activation_status','oem-folder','change_windows_edition','change_office_edition'],
    },
    {
      type: 'category',
      label: 'Manual Activation',
      items: ['manual_hwid_activation', 'manual_ohook_activation']
    },
    {
      type: 'category',
      label: 'Guides',
      link: {type: 'doc', id: 'guide_links'},
      items: [
        'windows10_eol',
        'office-license-is-not-genuine',
        {
          type: 'link',
          label: 'Bypass Microsoft Geoblocking',
          href: 'https://gravesoft.dev/bypass-microsoft-geoblocking',
          description: 'Microsoft blocks services in certain countries due to U.S. laws and local legal regulations. For example, users in Russia may not be able to download Windows or Office.'
        },
        {
          type: 'link',
          label: 'Fix WPA Registry',
          href: 'https://gravesoft.dev/fix-wpa-registry',
          description: 'In some cases, the system may have corrupt WPA registry keys at HKEY_LOCAL_MACHINE\\SYSTEM\\WPA which can cause sppsvc to not work and activation to fail, it can also cause high CPU usage in sppsvc service.'
        },
        'licensing-servers-issue',
        'issues_due_to_gaming_spoofers',
        'fix_service',
        'change_edition_issues',
        'evaluation_editions',
        {
          type: 'link',
          label: 'Fix Powershell',
          href: 'https://gravesoft.dev/fix_powershell',
          description: 'Scripts may show an error related to Powershell not working.'
        },
        'powershell-on-legacy-windows',
        {
          type: 'link',
          label: 'Update Windows ISO',
          href: 'https://gravesoft.dev/update-windows-iso',
          description: 'Guide on how to manually update Windows ISO file.'
        },
        {
          type: 'link',
          label: 'In-Place Repair Upgrade',
          href: 'https://gravesoft.dev/in-place_repair_upgrade',
          description: 'In-place repair upgrade using Windows ISO file is a good way to fix system errors.'
        },
        {
          type: 'link',
          label: 'Remove Malware',
          href: 'https://gravesoft.dev/remove_malware',
          description: 'Guide on how to remove malware.'
        },
        {
          type: 'link',
          label: 'Clean Install Windows',
          href: 'https://gravesoft.dev/clean_install_windows',
          description: 'Guide on how to backup your data and clean install Windows.'
        },
      ]
    },
    {
      type: 'category',
      label: 'Archive',
      items: ['kms38', 'manual_kms38_activation'],
    },
    'unsupported_products_activation',
    'news',
    'changelog',
    'our_non-piracy_site',
    'contribute',
    'credits',
    'contactus',
  ],
};

export default sidebars;
