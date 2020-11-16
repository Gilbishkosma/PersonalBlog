import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"


const SearchInput = styled.input`
    
	@media (max-width: 1000px) {
       width:80%;
   }
   @media (max-width: 638px) {
       width:100%;
       margin-top:20px;
   }
`


const Search = ({style}) => <Link to="/search" style={{width:'100%',textAlign:'center',marginTop:'80px'}}><SearchInput type="text" placeholder="Search"/></Link>

export default Search