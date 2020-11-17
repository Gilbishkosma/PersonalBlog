import React from "react"
import styled from "styled-components"


const LinkContainer =  styled.div`
`


const LinkItem = styled.div`
    display:flex;
    align-items: start;
    `

const Url = styled.a`
    margin-left:10px;
    margin-top:10px;

`

const ProfileLinks = () => (
		 <LinkContainer>
                        <LinkItem>
                        <img src="https://img.icons8.com/nolan/50/github.png" alt=""/>
                        <Url href="https://github.com/Gilbishkosma">Github</Url>
                        </LinkItem>
                        <LinkItem>
                        <img src="https://img.icons8.com/color/48/000000/web.png" alt=""/>
                        <Url href="https://gilbish.dev">Personal Site</Url>
                        </LinkItem>
                        <LinkItem>
                        <img src="https://img.icons8.com/color/48/000000/stackoverflow.png" alt=""/>
                        <Url href="https://stackoverflow.com/users/10052666/gilbeesh-kosma">StackOverflow</Url>
                        </LinkItem>
         </LinkContainer>
	)

export default ProfileLinks