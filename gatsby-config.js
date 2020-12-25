module.exports = {
  siteMetadata: {
    title: "NY Web Development",
    siteUrl: `https://main--cranky-bartik-70ba1d.netlify.app`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NY Web Development`,
        short_name: `NYWD`,
        start_url: `/`,
        background_color: `#320f51`,
        theme_color: `#e91e7a`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    }
  ],
};
