import React,{useState} from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import PostListCard from '../components/PostListCard'
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px 0px;
  padding:0px 10px;
  width: 90%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`

const LinkContainer = styled.div`
   display: flex;
   justify-content: space-between;
`



const PostList = ({data:{allMdx:post},pageContext}) => {
  const {next,prev,currentPage,postTag} = pageContext
  const [posts,setPosts] = useState(post.nodes)
  let nextLink = '/'
  let prevLink = postTag === '//' ? '/' : `tag/${postTag}`
  let path =  postTag === '//' ? 'page/' : `tag/${postTag}` 
  
  if(prev){
    if(currentPage > 2){
      prevLink = path + (currentPage-1)
    }
  }
  if(next){
    nextLink = path + (currentPage+1)
  }


  return(<Layout>
    <SEO title="Home" />
    <Container>
    {
      posts.map((item,index) => {
        return <PostListCard key={index} {...item.frontmatter} {...pageContext} />
      })
    }
    <LinkContainer>
      { prev ? <Link to={prevLink}>Prev</Link> : '' }
      { next ? <Link to={nextLink}>Next</Link> : '' }
    </LinkContainer>
    </Container>
     
  </Layout>
  )
}


export const pageQuery = graphql`
  query pageQuery($skip: Int!, $limit: Int!, $postTag: String){
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: {tags: {regex: $postTag}}}
    ){
      nodes{
        frontmatter
        {
          title,
          subtitle,
          slug,
          date,
          tags
        }
        timeToRead
      }
    }
  }
`


export default PostList
