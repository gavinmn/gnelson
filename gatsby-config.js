module.exports = {
  siteMetadata: {
    title: `Gavin Nelson Design`,
    description: `Gavin Nelson is a product designer who creates human centered design solutions.`,
    author: `@gavmn`,
    siteURL: 'https://gnelsondesign.com', 
  },
  plugins: [
     {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gavin Nelson Design`,
        short_name: `GNd`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icons: [
          {
            src: `/favicons/favicon-16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-touch-icon-180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
           {
            src: `/favicons/android-chrome-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -96
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
     
  ],
}
