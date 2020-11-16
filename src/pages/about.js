import React from 'react';
import Layout from '../components/Layout'
import styled from 'styled-components'
import { graphql } from "gatsby"
import Img from 'gatsby-image';
import SEO from "../components/seo"
import ProfileLinks from '../components/ProfileLinks'


const Container = styled.div`
	display:flex;
	padding-top:10px;
	justify-content:space-around;
	align-items:center;
	flex-wrap:wrap;
  width:100%;
  @media(max-width:750px){
    flex-direction:column;
    margin-bottom: 40px;
  };
`

const Section = styled.div`  
   width:100%;
   flex:1;
   display:flex;
   flex-direction:column;
   align-items:center;
   @media(max-width:750px){
        order:2;
    };
`

const ProfileDetail = styled.div`
   max-width:80%;
`

export default ({data : {file: image}}) => {
    return <>
            <Layout marginTop="30px" isLeftMenuDisabled={true}>
            <SEO title="About Me" description="About me." />
                  <Container>
                    <Section>
                    
                    <ProfileDetail>
                     <h1 style={{marginTop:"0px"}}>Hii, i am Gilbish Kosma</h1>
                     <p>I am a <b style={{color:'green'}}>backend developer</b>, currently learning <b style={{color:'purple'}}>Gatsby</b> and trying to improve my <b style={{color:'orange'}}>social</b> skills.
                     Email me at <a href="mailto:gilbish@gil20.me" style={{color:"#0c9abb"}}>gilbeeshkosma15@gmail.com</a></p>
                     <p>I developed this starter to learn gatsby.</p>

                     <ProfileLinks />
                    </ProfileDetail>
                    </Section>
                    <Img fluid={image.childImageSharp.fluid} alt="" style={{width:'100%',order:1,flex:1}}  />
                    </Container>
            </Layout>
           </>
}


export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "about_me.png"}) {
    childImageSharp {
           fluid{
      ...GatsbyImageSharpFluid_tracedSVG
       } 
     } 
    }
  }
`