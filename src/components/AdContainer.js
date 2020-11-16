import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"


const Container = styled.div`
    width:200px;
	display:flex;
	flex-direction:column;
	align-items:center;
	line-height: 1px;
	margin:50px 0px;
	@media (max-width: 1000px) {
      order:2;
      width:100%
      margin:0px;
    }
`



const AdContainer = ({title,subtitle,children}) => {
	return(
			<Container>
				{children}
				<h5 style={{marginTop: '1px'}}>{title}</h5>
				<p style={{fontSize:'12px'}}>{subtitle}</p>
			</Container>
		)
}


export default AdContainer