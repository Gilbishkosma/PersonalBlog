import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled.button`
	padding:4px 10px;
	border: 0px;
	border-radius:5px;
	margin:5px;
	color: ${props => props.fontColor || 'white' };
	background-color: ${props => props.bgColor || 'blue'};
	transition: opacity 0.4s ease;
	&:hover{
		cursor:pointer;
		opacity: 0.5;
	}
`


const TagButton = ({title,fontColor,bgColor}) => {
	let tagLink =  title === 'all' ? '/' : `/tag/${title}/`
	return(
			<Link to={tagLink}><Button bgColor={bgColor} fontColor={fontColor} ><b>{title}</b></Button></Link>
		)

}


export default TagButton