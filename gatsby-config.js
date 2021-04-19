module.exports = {
  plugins: [
    // `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
  siteMetadata: {
    // Used for the site title and SEO
    title: `NPI Excellence Blog`,
    // Used to provide alt text for your avatar
    author: `Kevin Michaelis`,
    // Used for SEO
    description: `My site description...`,
    // Used for resolving images in social cards
    siteUrl: `https://example.com`,
    // Used for social links in the root footer

    social: [
      {
        name: `Linkedin`,
        url: `https://www.linkedin.com/in/kevin-michaelis/`,
      },
    ],
  },
};
