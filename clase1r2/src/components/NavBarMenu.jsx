import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBarMenu = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
          <Nav className="me-auto">
            <Link to='/'>Home</Link>
            <Link to='Contacto' >Contacto</Link>  
            HappyCake
          </Nav>
    </Navbar>
    </>
  )
}

export default NavBarMenu