import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBarMenu = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
          <Nav className="me-auto">
            <Link to='/' className='pe-2'>Home</Link>
            <Link to='Contacto' className='pe-2'>Contacto</Link>  
            <p>HappyCake</p>
          </Nav>
    </Navbar>
    </>
  )
}

export default NavBarMenu