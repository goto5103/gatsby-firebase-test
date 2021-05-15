module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCm7rFdbAgVPF8JRrvCjIxnekqTUV4e8Dg",
          authDomain: "test-login-473bc.firebaseapp.com",
          databaseURL: "test-login-473bc-default-rtdb.firebaseio.com",
          projectId: "test-login-473bc",
          storageBucket: "test-login-473bc.appspot.com",
          messagingSenderId: "1044827423638",
          appId: "1:1044827423638:web:9c85d18d42f361fb7453b7",
        },
        loginPath: "/login",
        loginRedirectPath: "/dashboard",
        socialLogins: ["google"],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Goto test`,
        short_name: `Goto test`,
        start_url: `/`,
        background_color: `#bbbbbb`,
        theme_color: `#7b68ee`,
        display: `standalone`,
        icons: [
          {
            src: "icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-64x64.png",
            sizes: "64x64",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-180x180.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          }
        ]
        // icon:"./src/images/g139.png",
        // icon_options: {
        //   purpose: `maskable`,
        // },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline

  ],
}
