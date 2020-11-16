/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const _ = require("lodash")
const TagsData = require('./src/TagsData/index.jsx')



exports.createPages = async ({actions,graphql,reporter}) => {
    const result = await graphql(`
        {  posts: allMdx{
                nodes{
                    frontmatter{
                        slug
                        tags
                    }
                }
            }
        }
    `)


    const postsPerPage = 25

    const createPostListing = (tag,numPages,initialPath,finalPath) => {
     Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? initialPath : `${finalPath}${i + 1}`,
      component: require.resolve("./src/templates/postList.jsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        prev: i !== 0,
        next: (i+1) !== numPages,
        currentPage: i + 1,
        postTag: tag,
      },
    })
  })
  }

    if(result.errors){
        reporter.panic('failed to create posts',result.errors)
    }

    const posts  = result.data.posts.nodes;
     
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    // Creating pages for posts
    posts.forEach(post => {
        actions.createPage({
            path:post.frontmatter.slug,
            component: require.resolve('./src/templates/post.jsx'),
            context:{
                slug: post.frontmatter.slug //this slug will go to query of post 
            }
        })
    })
  
  // creating list of all posts
  createPostListing(tag='//',numPages=numberOfPages,initialPath='/',finalPath='/page/')


  // Creating list of posts based on tags
  TagsData.map((tagItem,index) => {
     tagBasedPosts = posts.filter(post => {
       const postLength =  post.frontmatter.tags.filter(tag => tag === tagItem.tag)
       if(postLength.length > 0)
          return true
       return false
     })
     const numberOfPages = Math.ceil(tagBasedPosts.length / postsPerPage)  
    createPostListing(tag=`/${tagItem.tag}/`,numPages=numberOfPages,initialPath=`/tag/${tagItem.tag}/`,finalPath=`/tag/${tagItem.tag}/`) 
  }) 

}