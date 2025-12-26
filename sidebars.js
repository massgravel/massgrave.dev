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
        'office_c2r_links',
        'office_c2r_custom',
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
        'bypass_microsoft_geoblocking',
        'fix-wpa-registry',
        'licensing-servers-issue',
        'issues_due_to_gaming_spoofers',
        'fix_service',
        'change_edition_issues',
        'evaluation_editions',
        'fix_powershell',
        'powershell-on-legacy-windows',
        'update-windows-iso',
        'in-place_repair_upgrade',
        'remove_malware',
        'clean_install_windows'
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
    'contribute',
    'credits',
    'contactus',
  ],
};

export default sidebars;
