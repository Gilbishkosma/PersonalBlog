import React, {useState} from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { Index } from "elasticlunr"
import styled from 'styled-components'
import PostListCard from '../components/PostListCard'
import Img from 'gatsby-image';

const Container = styled.div`
	width:90%;
`


const PostContainer = styled.div`
  margin: 20px 0px;
`

const SearchContainer = styled.div`
	width:100%;
	display:flex;
	flex-direction:column;
	align-items:center;
	margin-top:40px;
`

const Search = styled.input`
	max-width: 300px;
	padding: 10px;
	width:100%;
`

const SubTitle = styled.p`
	font-weight:600;
`


const SearchPage = ({data}) => {
	const searchIndex = data.siteSearchIndex.index
	const [query,setQuery] = useState('')  // the search keyword
	const [results,setResults] = useState(data.post.nodes)  // results after the search or all posts
	const [index,setIndex] = useState(Index.load(searchIndex)) 

    const onSearch = (event) => {
		const searchedValue =  event.target.value
		setQuery(searchedValue)
		console.log(searchedValue)
		const resultsData = searchedValue ? index.search(searchedValue,{expand: true}).map(({ref}) => index.documentStore.getDoc(ref)) : data.post.nodes
		console.log(resultsData)
		setResults(resultsData)
    }


	return (
	<Layout isLeftMenuDisabled={true}>
	<SEO title="Search" />
	<Container>
	<SearchContainer>
	<Search type="text" placeholder="Search a topic" value={query} onChange={onSearch}/>
	</SearchContainer>
	<PostContainer>
	{
		results.length ? '' : (
		<>
		<Img fluid={data.searchImg.childImageSharp.fluid} alt="" style={{marginTop:'50px',width:'100%',height:'100%',maxHeight:'350px',maxWidth:'350px',margin:'0px 50%',transform:'translate(-50%)'}} />
	    <p style={{textAlign:'center',marginTop:'10px'}}>Zero Articles Found 😫</p>
	    </>
		)
	}
	{
      results.map((item,index) => {
        return query ? <PostListCard key={index} {...item} /> : <PostListCard key={index} {...item.frontmatter} /> 
      })
    }
	</PostContainer>
	</Container>
	</Layout>
	  )
	}

export default SearchPage


export const query = graphql`
  query {
        siteSearchIndex {
          index
        }
        searchImg: file(relativePath: {eq: "searching.png"}) {
    childImageSharp {
           fluid{
      ...GatsbyImageSharpFluid_tracedSVG
       } 
     } 
    }
    post:allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 15
    ){
      nodes{
        frontmatter
        {
          title,
          subtitle,
          slug,
          date,
		  tags,
		  keywords
        }
        timeToRead
      }
    }
  }
`	