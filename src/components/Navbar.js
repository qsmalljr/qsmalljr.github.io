import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"
import logo from "../../static/icons/Q-Logo.png"

export default () => {
  const { toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
      <Navbar.Brand className="pl-2 ml-2" as={Link} to="/">
        <img src={logo} alt="Home" title="Home" style={{maxHeight: "70px", borderRadius: "15px"}} className={`brand-icon`} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr-4 nav-links">
          {/* <Nav.Link className="ml-2" as={Link} to="/blog" title="Blog">
            Blog
          </Nav.Link> */}
          <Nav.Link className="ml-2" as={Link} to="/about" title="About">
            About
          </Nav.Link>
          {/* <Nav.Link className="ml-2" as={Link} to="/projects" title="Projects">
            Projects
          </Nav.Link> */}
          <Nav.Link className="ml-2" as={Link} to="/resume" title="Resume">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
