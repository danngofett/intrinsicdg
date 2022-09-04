const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `b42jfuaf`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@layout': path.resolve(__dirname, 'src/layout'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles'),
        },
        extensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
      },
    },
  ],
}
