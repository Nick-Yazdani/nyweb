module.exports = {
  siteMetadata: {
    title: "nickyazdani",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
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
