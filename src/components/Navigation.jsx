import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="brand">You<span className="special">Shop</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="link">
            <p href="" className="mr-3 mt-3">Home</p>
            </Link>
            <Link to="/about" className="link">
              <p href="" className="mr-3 mt-3">About</p>
            </Link>
            <Link to="/products" className="link">
              <p href="" className="mr-3 mt-3">Products</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
