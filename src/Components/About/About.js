import React from 'react';
import { Stack } from 'react-bootstrap';
import './About.css';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import img from '../../images/rrrrr-min.jpg'
const About = () => {
    return (

        <div className="container">
            <Row>

                <Col lg={9} sm={12}>
                    <Stack gap={3} >
                        <p className="fs-2 mb-0">About Services</p>
                        <i className="fs-6 text-seconday">Dignissim enim sit amet venenatis urna cursus. Vitae sapien <br /> pellentesque habitant morbi tristique senectus et.</i>
                        <p className="fs-5">Aenean sed adipiscing diam donec adipiscing tristique risus. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Id semper risus in hendrerit gravida rutrum. Vel pharetra vel turpis nunc eget lorem. Egestas congue quisque egestas diam </p>
                    </Stack>
                    <Button variant="warning" >CONTACT US</Button>
                </Col>
                <Col lg={3}>

                </Col>


            </Row>
            <Row>
                <Col md={12} className="about-section-image my-5">
                    <img className="w-100" src={img} alt="" />

                    <div className="bg-warning p-3 address">
                        <h6>Email</h6>
                        <a href="#">educal@yourClassRoom.com</a>
                        <h6>Phone</h6>
                        <a href="#">+92756483463823</a>
                        <h6>Location</h6>

                        <p>28 Jackson Blvd Ste 1020 Bangladesh IL 60604-2340</p>

                    </div>

                </Col>
            </Row>



        </div>




    );
};

export default About;