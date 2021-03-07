module.exports = {
  siteMetadata: {
    title: `Seb Stuart-Banks`,
    name: `Seb Stuart-Banks`,
    siteUrl: `https://sebstuart-banks.co.uk`,
    description: `Blog`,
    hero: {
      heading: `Seb Stuart-Banks`,
      heading: 'Hey, welcome! I am excited to share with you a collection of my thoughts and stories that are important to me.',
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
