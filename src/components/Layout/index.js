/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
 
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import LeftMenu from './leftMenu'
import "./layout.css"

const ContentContainer = styled.div`
   margin: 0 auto;
   width: 100%;
   padding: 0 1.0875rem 1.45rem;
   display: flex;
   flex-wrap: wrap;
   flex-direction: ${props => props.coverAll ? 'column-reverse' : 'row' };
   align-items: ${props => props.coverAll ? 'center' : ''};
   @media (max-width: 1000px) {
    flex-direction: column-reverse;
    padding: 0px;
   }
` 

const Content = styled.main`
  display: flex;
  flex:1;
  flex-wrap:wrap;
  flex-direction:column;
  align-items:center;
  min-width: 100px;
  width:100%;
  margin-top: ${props => props.marginTop || '0px'}; 
  max-width: ${props => props.maxWidth || '100%'};
`

const Layout = ({ children, marginTop, isLeftMenuDisabled, maxWidth, coverAll }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentContainer coverAll={coverAll}>
        {/* If left menu is disabled then don't display the left menu otherwise display it
           I have used it to hide the left menu in about page
           cause the left menu does not look good in about page. */}
        { isLeftMenuDisabled ? '' : <LeftMenu coverAll={coverAll} /> }
        <Content marginTop={marginTop} maxWidth={maxWidth}>{children}</Content>
      </ContentContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
