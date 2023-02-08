import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function Navbarfunc() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/home" style={{textDecoration: "none", color: "white"}}>
            <li>Home</li>
            </Link>
            <Link to="/result" style={{textDecoration: "none", paddingLeft: "20px", color: "white"}}>
            <li>Result</li>
            </Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
