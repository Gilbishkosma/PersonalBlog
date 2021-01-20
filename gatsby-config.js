module.exports = {
  siteMetadata: {
    title: `Gilbish`,
    description: `Personal blog of Gilbish Kosma.`,
    author: `@GilbishKosma`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-use-query-params",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `posts`,
          path: `${__dirname}/src/posts/`,
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-breakpoints`,
     {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [".mdx", ".md"],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`, //it processes images in markdown so they can be used in the production build.
              options: {
                maxWidth: 830,
              },
            },
            {
              resolve: `gatsby-remark-highlight-code`
            }
          ],
          remarkPlugins: [require(`remark-emoji`)]
        },
      },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`,`subtitle`,`tags`,`keywords`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          Mdx: {
            title: node => node.frontmatter.title,
            subtitle: node => node.frontmatter.subtitle,
            tags: node => node.frontmatter.tags,
            keywords: node => node.frontmatter.keywords,
            slug: node => node.frontmatter.slug,
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.frontmatter.tags !== "exempt",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
