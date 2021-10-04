import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import './Footer.css';
import logo from '../../images/logo-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className=" footer mt-3 py-5">
            <div className=" container" >
                <Row>
                    <Col lg={3}>
                        <Stack gap={3}>
                            <img src={logo} alt="" />
                            <p className="text-secondary ">Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>

                            <Stack direction="horizontal" gap={2}>
                                <div className="facebook-icon">
                                    <FontAwesomeIcon icon={faFacebookF} ></FontAwesomeIcon>
                                </div>

                                <div className="twitter-icon">
                                    <FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon>
                                </div>
                                <div className="pinterest-icon">
                                    <FontAwesomeIcon icon={faPinterest} ></FontAwesomeIcon>
                                </div>


                            </Stack>
                        </Stack>
                    </Col>
                    <Col lg={3}>
                        <Stack gap={2}>
                           <h5>Company</h5>
                          <ul className="text-secondary">
                              <li>About</li>
                              <li>Courses</li>
                              <li>Events</li>
                              <li>Instructor</li>
                              <li>Career</li>
                              <li>Become a Teacher</li>
                              <li>Contact</li>
                          </ul>
                        </Stack>


                    </Col>

                    <Col lg={2}>
                    <Stack gap={2}>
                           <h5>Platform</h5>
                          <ul className="text-secondary">
                              <li>Browse Library</li>
                              <li>Library</li>
                              <li>Partners</li>
                              <li>News & Blogs</li>
                              <li>FAQs</li>
                              <li>Tutorials</li>
                          </ul>
                        </Stack>
                    </Col>
                    <Col lg={4}>
                        <h5>Subscribe</h5>
                        <div className="w-75 position-relative border-0">
                            <input placeholder="your email address" className="form-control border-0" type="text" />
                            <button className="btn btn-primary position-absolute top-0 end-0 border-0"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                        </div>
                        <small className="text-secondary mt-3 d-block">Get the latest news and updates right at your inbox.</small>

                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;