import React from 'react';
import { Col, Row } from 'react-bootstrap';
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
        <div className="container header pt-3">
            <Row>
                <Col md={3}>
                    <img src={logo} alt="" />
                </Col>

                <Col md={9} className="d-md-flex justify-content-end d-none">
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} style={navLinkStyle} to="/home">Home</NavLink>
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} style={navLinkStyle} to="/about">About</NavLink>
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} style={navLinkStyle} to="/services">Services</NavLink>
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} style={navLinkStyle} to="/signUp">Sign Up</NavLink>
                </Col>

            </Row>
            
        </div>
    );
};

export default Header;