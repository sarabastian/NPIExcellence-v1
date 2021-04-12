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
  ],
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /offending-module/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
