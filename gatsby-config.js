require("dotenv").config({
  path: ".env",
})

module.exports = {
  siteMetadata: {
    title: `Michael Capecci`,
    description: `Michael Capecci is a Freelance Web Developer from the Chicagoland area. Get in touch to start planning out your next project.`,
    author: `Michael Capecci`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-172742172-1",
        head: true,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-background-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     baseUrl: process.env.API_URL,
    //     protocol: process.env.API_PROTOCOL,
    //     restApiRoutePrefix: "wp-json",
    //     hostingWPCOM: false,
    //     useACF: true,
    //     acfOptionPageIds: [],
    //     auth: {
    //       htaccess_user: "your-htaccess-username",
    //       htaccess_pass: "your-htaccess-password",
    //       htaccess_sendImmediately: false,
    //       wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
    //       wpcom_app_clientId: "54793",
    //       wpcom_user: "gatsbyjswpexample@gmail.com",
    //       wpcom_pass: process.env.WORDPRESS_PASSWORD,
    //       jwt_user: process.env.JWT_USER,
    //       jwt_pass: process.env.JWT_PASSWORD,
    //       jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
    //     },
    //     cookies: {},
    //     verboseOutput: false,
    //     perPage: 100,
    //     searchAndReplaceContentUrls: {
    //       sourceUrl: "https://source-url.com",
    //       replacementUrl: "https://replacement-url.com",
    //     },
    //     concurrentRequests: 10,
    //     includedRoutes: [
    //       "**/categories",
    //       "**/posts",
    //       "**/pages",
    //       "**/media",
    //       "**/tags",
    //       "**/taxonomies",
    //       "**/users",
    //       "**/menus",
    //       "**/portfolio",
    //       "**/services",
    //     ],
    //     excludedRoutes: [],
    //     keepMediaSizes: false,
    //     normalizer: function ({ entities }) {
    //       return entities
    //     },
    //     normalizers: normalizers => [
    //       ...normalizers,
    //       {
    //         name: "nameOfTheFunction",
    //         normalizer: function ({ entities }) {
    //           return entities
    //         },
    //       },
    //     ],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
