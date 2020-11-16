import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Container = styled.div`
  background: white;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.07);
  display: flex;
  justify-content: center;
`
const Nav = styled.div`
  max-width: 1260px;
  width: 100%;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
`
const Heading = styled.h3`
  margin: 0px;
  padding: 10px;
`
const LinkItem = styled.p`
  color: hsla(0,0%,0%,0.8);
  margin: 0px;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-color: hsla(0, 0%, 0%, 0.07);
    text-decoration: none;
  }
`

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
`

const Line = styled.div`
  width: 30px;
  height: 3px;
  background: black;
  margin: 2px;
`

const ResponsiveNav = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  background-color: white;
  transition: all 2s linear;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.07);
`

const LinkList = [
  { title: "Home", toUrl: "/" },
  { title: "Search", toUrl: "/search" },
  { title: "Projects", toUrl: "/projects" },
  { title: "About", toUrl: "/about" },
]

const LinkDisplay = ({ toUrl, title }) => (
  <Link style={{ textDecoration: "inherit" }} to={toUrl} activeStyle={{backgroundColor: `hsla(0, 0%, 0%, 0.07)`,borderRadius:'5px'}}>
    <LinkItem>{title}</LinkItem>
  </Link>
)

const Header = ({ siteTitle }) => {
  const [hamburgerOpen, setHamburgeOpen] = useState(false)
  const breakpoints = useBreakpoint()

  const handleHamBurger = () => {
    setHamburgeOpen(oldState => !oldState)
  }

  return (
    <>
      <Container>
        <Nav>
          <NavItem>
            <Link style={{ textDecoration: "inherit" }} to="/">
              <Heading>{siteTitle}</Heading>
            </Link>
          </NavItem>
          {breakpoints.sm ? (
            <Hamburger onClick={handleHamBurger}>
              {[1, 2, 3].map(item => (
                <Line key={item} />
              ))}
            </Hamburger>
          ) : (
            <NavItem style={{ flex: 0.5 }}>
              {LinkList.map((item, index) => (
                <LinkDisplay {...item} key={index} />
              ))}
            </NavItem>
          )}
        </Nav>
      </Container>

      {hamburgerOpen ? (
        <ResponsiveNav>
          {LinkList.map((item, index) => (
            <LinkDisplay {...item} key={index} />
          ))}
        </ResponsiveNav>
      ) : (
        ""
      )}
    </>
  )
}

export default Header
