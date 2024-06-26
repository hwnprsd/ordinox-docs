// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = async () => {
  const remarkMath = (await import("remark-math")).default;
  const rehypeKatex = (await import("rehype-katex")).default;

  return {
    title: "Ordinox Docs",
    tagline: "Bringing DeFi liquidity to BTC",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/ordinox.png",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
        "classic",
        {
          pages: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
          },
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: "https://github.com/hwnprsd/ordinox-docs/tree/main/",
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
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
            src: "img/ordinox.png",
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
          copyright: `Copyright © ${new Date().getFullYear()} Ordinox Labs. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  };
};

module.exports = config();
