import React from "react"
import styled from 'styled-components'




const ProjectLink = styled.a`
	max-width: 420px;
	width: 100%;
	text-decoration:none;
	border-radius:15px;
	color: white;
	background: ${props => props.background || `linear-gradient(to right, #D4145A 0%, #FBB03B 100%)`};
	transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
	margin:30px 10px;
	padding:20px;
	&:hover{
		transform: translateY(-5px);
		text-decoration:none;
	}
`

const ProjectTitle = styled.p`
	font-weight:700;
	font-size:25px;
`

const ProjectDescription = styled.p`
	font-size:17px;
`

const ProjectCard = ({title,children,background,link}) => {
	return (
		   <ProjectLink href={link} background={background}>
	       <ProjectTitle>{title}</ProjectTitle>
	       <ProjectDescription>{children}</ProjectDescription>
	       </ProjectLink>
	       )
}




export default ProjectCard