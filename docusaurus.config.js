// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ordinox Docs",
  tagline: "Unifying cross-chain liquidity",
  url: "https://docs.ordinox.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/ordinox_square.png",

  // GitHub pages deployment config.
  organizationName: "ordinox", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/hwnprsd/ordinox-docs/tree/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Ordinox",
        logo: {
          alt: "Ordinox",
          src: "img/ordinox_square.png",
        },
        items: [
          {
            href: "https://origins.ordinox.xyz",
            position: "left",
            label: "Origins Program",
          },
          {
            href: "https://github.com/ordinox",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/PG8w4RG5jJ",
              },
              {
                label: "Twitter",
                href: "https://x.com/OrdinoxLabs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Website",
                href: "https://ordinox.xyz",
              },
              {
                label: "GitHub",
                href: "https://github.com/ordinox",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ordinox Labs.`,
      },
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
