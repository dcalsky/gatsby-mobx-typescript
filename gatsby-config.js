/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gatsby Mobx Typescript.`,
    siteUrl: `https://gatsby-mobx-typescript.dcalsky.vercel.app/`,
    description: `Blazing fast modern site generator for React`,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
        modifyVars: {
          "primary-color": "#663399",
          "font-family": "Arial",
          "layout-body-background": "#66ff79",
        },
      },
    },
  ],
}
