import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import AdContainer from '../AdContainer'
import TagButton from '../TagButton'
import { useStaticQuery, graphql } from "gatsby"
import Search from '../Common/Search'

const TagsData = require('../../TagsData')


const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction:column;
	width: ${props => props.coverAll ? '100%' : '25%'};
    @media (max-width: 1000px) {
     width:100%;
     padding: 40px 20px;
   }
`

const AdImage = styled.div`
    width:150px;
	height:100px;
	border:1px solid grey;
	`

const TagsContainer = styled.div`
	display:flex;
	flex-direction:column;
	max-width: ${props => props.coverAll ? '50%' : '210px'};
	margin-bottom:50px;
	margin-top:20px;
	@media (max-width:1000px) {
       max-width:60%;
       margin-bottom: 0px;
    }
	@media (max-width: 638px) {
       max-width:100%;
       margin-bottom: 40px;
	   order:-1;
   }
`

const TagList = styled.div`
	
`

const LeftMenu = ({coverAll}) => {
	
	const data = useStaticQuery(graphql`
		query{
				allMdx {
                     nodes {
      				 frontmatter {
        				 tags
        				 slug
      				 }
    				 }
  				 }
		}
		`)
	return(
		<Container coverAll={coverAll}>
			{/* <AdContainer title="The title for your add" subtitle="Ads Via Carbon"> 
			<AdImage />
			</AdContainer> */}
			<Search />
			<TagsContainer coverAll={coverAll}>
				<h2>Tags 📚</h2>
				<TagList>
				 {
				 	TagsData.map((item,inx) => {
				 	return <TagButton key={inx} bgColor={item.bgColor} fontColor={item.fontColor} title={item.tag}/>
				    })
				}
				</TagList>
			</TagsContainer>
			<small style={{order:2}}>
			2020 Gilbish Kosma
			</small>
		</Container>	
		)
}



export default LeftMenu


