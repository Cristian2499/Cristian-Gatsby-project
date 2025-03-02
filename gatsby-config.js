module.exports = {
    siteMetadata: {
      title: `Gatsby Blog`,
      description: `Un blog simple con Markdown y resaltado de sintaxis`,
      author: `@tu_usuario`,
    },
    plugins: [
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `posts`,
          path: `${__dirname}/content/posts`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                classPrefix: "language-",
              },
            },
          ],
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
    ],
  };