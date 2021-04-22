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
        preset: '@theme-ui/preset-funk',
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
  siteMetadata: {
    // Used for the site title and SEO
    title: `NPI Excellence`,
    // Used to provide alt text for your avatar
    author: `Kevin Michaelis`,
    // Used for SEO
    description: `New product introductions are the life blood of a fast growth, high margin business. NPI Excellence, LLC can enable your company to beat the competition and delight customers, achieving your business objectives.`,
    // Used for resolving images in social cards
    siteUrl: `https://lucid-thompson-68f0a3.netlify.app`,
    // Used for social links in the root footer

    social: [
      {
        name: `Linkedin`,
        url: `https://www.linkedin.com/in/kevin-michaelis/`,
      },
    ],
  },
};
