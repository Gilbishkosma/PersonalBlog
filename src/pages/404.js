import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from 'gatsby-image';
import styled from 'styled-components'


const Container = styled.div`
  width:100%;
  height:100%;
  display: flex;
  align-items:center;
  justify-content:center;
`


const NotFoundPage = ({data:{file:image}}) => (
  <Layout isLeftMenuDisabled={true}>
    <SEO title="404: Not found" />
    <Img fluid={image.childImageSharp.fluid} alt="" style={{width:'100%',height:'100%',maxWidth:'800px',maxHeight:'800px',overflow:'initial'}}  />
  </Layout>
)

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "404.png"}) {
    childImageSharp {
           fluid{
      ...GatsbyImageSharpFluid_tracedSVG
       } 
     } 
    }
  }
`



export default NotFoundPage
