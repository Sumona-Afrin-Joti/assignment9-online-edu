import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const navLinkStyle = {
        color: 'black',
        margin: "10px",
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500'
    }
   

    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink style={navLinkStyle} activeStyle={{color: "red",fontWeight: "bold"}} to="/home">Home</NavLink>
              <NavLink style={navLinkStyle} activeStyle={{color: "red",fontWeight: "bold"}} to="/about">About</NavLink>
              <NavLink style={navLinkStyle} activeStyle={{color: "red",fontWeight: "bold"}} to="/services">Services</NavLink>
              <NavLink style={navLinkStyle} activeStyle={{color: "red",fontWeight: "bold"}} to="/signUp">Sign up</NavLink>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;