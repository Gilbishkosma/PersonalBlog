import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ProjectMDX from '../sections/projects.mdx'
import styled from 'styled-components'


const ProjectContainer = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap:wrap;
`


const Projects = () => (
	<Layout>
	<SEO title="About" />
	<h1>Projects</h1>
	<ProjectContainer>
	  <ProjectMDX />
	</ProjectContainer>
	</Layout>
	)

export default Projects