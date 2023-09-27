import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBarMenu = () => {
  return (
    <>
    <Navbar expand="lg" bg="danger" variant="dark">
      <Nav className="me-auto">
        
        <Link to="/" className="nav-link">
          <span role="img" aria-label="Casa" className="me-2">
            🏠
          </span>
          Home
        </Link>

        <Link to="/contacto" className="nav-link">
          <span role="img" aria-label="Libreta" className="me-2">
            📓
          </span>
          Contacto
        </Link>

      </Nav>
      <div className="d-flex align-items-center">
        
        <p className="mb-0">HappyCake</p>
        <span role="img" aria-label="Pastel" className="me-2">
          🍰
        </span>
      </div>
    </Navbar>
    </>
  )
}

export default NavBarMenu