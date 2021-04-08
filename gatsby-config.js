module.exports = {
  plugins: [
    // `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};
