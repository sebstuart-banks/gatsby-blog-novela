module.exports = {
  siteMetadata: {
    title: `Seb Stuart-Banks`,
    name: `Narative`,
    siteUrl: `https://novela.narative.co`,
    description: `Blog`,
    hero: {
      heading: `Seb Stuart-Banks`,
      heading: 'Welcome and thanks for popping by. I hope you learn more about what interests me and gain something from the ideas I share. ',
      maxWidth: 800,
    },
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/en/sstuartbanks`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
