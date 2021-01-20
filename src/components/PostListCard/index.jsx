import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import TagButton from '../TagButton'

const TagsData = require('../../TagsData')

const Container = styled.div`
	display:flex;
	justify-content: space-between;
	align-items:baseline;
	padding:40px 10px;
	flex-wrap:wrap;
	border-bottom: 1px dotted #303030;
	&:hover{
		background-color:aliceblue;
	};
`

const Heading = styled.div`
	display:flex;
	flex-direction:column;
`

const Title = styled.h4`
	margin-top:0;
	font-size:30px;
	border-bottom:0px;
	font-weight:900;

`

const MetaData = styled.div`
	display:flex;
	flex-direction:column;
`

const TagContainer = styled.div`
	display:flex;
	flex-wrap:wrap;
`

const PostListCard = ({title,slug,subtitle,date,tags}) => {
	return (
			<Link to={`/${slug}`} style={{textDecoration:'none',color: 'inherit'}}>
			<Container>
			<Heading>
				<Title>{title}</Title>
				<p>{subtitle}</p>	
			</Heading>
			<MetaData>
				<b>{date}</b>
				<TagContainer>
				{tags.map((tag,index) => {
					let tagProperty = TagsData.filter((item) => item.tag === tag)
					let bgColor = ''
					let fontColor = ''
					if (tagProperty){
						bgColor = tagProperty[0].bgColor
					    fontColor = tagProperty[0].fontColor
					}
					return <TagButton key={index} title={tag} bgColor={bgColor} fontColor={fontColor} />
					}
				)}
				</TagContainer>
			</MetaData>
			</Container>
			</Link>
		)
}


export default PostListCard