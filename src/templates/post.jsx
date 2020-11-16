import React from "react"
import Layout from "../components/Layout"
import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import styled from 'styled-components'


const Container = styled.div`
  margin: 20px 0px;
  max-width: 90%;
  width: 100%;
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 2.3rem;
`

const SubTitle = styled.p`

`


const PostIntro = ({title,subtitle}) => {
  return <>
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
        </>
}


export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        subtitle
      }
      body
    }
  }
`
 
export default ({ data: { mdx: post } }) => {
  const {title,subtitle} = post.frontmatter
  return (
    <Layout maxWidth="1260px" coverAll={true}>
      <SEO title={post.frontmatter.title} />
      <Container>
      <PostIntro title={title} subtitle={subtitle} />
      <MDXProvider>
          <MDXRenderer>
          {post.body}
          </MDXRenderer>
      </MDXProvider>
      <hr style={{marginTop:'80px'}} />
      </Container>
    </Layout>
  )
}
