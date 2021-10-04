import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AchieveGoal.css';
import thumbImage from '../../images/about-thumb.jpg';
import bannerImage from '../../images/about-banner.jpg';
import student1 from '../../images/student-1.jpg'
import student2 from '../../images/student-2.jpg'
import student3 from '../../images/student-3.jpg'
import student4 from '../../images/student-4.jpg'
import Button from 'react-bootstrap/Button'
const AchieveGoal = () => {
    return (
        <div className="container">
            <Row className="thumb-container">
                <Col lg={6} className="about-thumb-wrapper">
                    <div className="about-review">
                        <h5 className="text-secondary"><span className="text-black fw-bold">8,200</span> five star reviews</h5>
                    </div>
                    <div className="about-thumb">
                        <img src={thumbImage} alt=""></img>
                    </div>
                    <div className="about-banner">
                        <img src={bannerImage} alt=""></img>
                    </div>
                    <div className="about-student">
                        <a href="#">
                            <img src={student1} alt="" />
                            <img src={student2} alt="" />
                            <img src={student3} alt="" />
                            <img src={student4} alt="" />
                        </a>
                        <p className="mt-2"><span>Join over</span><span className="fw-bold"> 4,000+</span> students</p>


                    </div>
                </Col>

                <Col lg={6} className="mt-3">

                    <h1>Achieve Your<br/>
                        Goals With Educal</h1>
                        <p>Lost the plot bobby such a fibber bleeding bits and bobs<br/> don't get shirty with me bugger all mate chinwag super<br/> pukka william barney, horse play buggered.</p>

                        <ol>
                            <li>Upskill your organization.</li>
                            <li>Access more then 100K online courses</li>
                            <li>Learn the latest skills</li>
                        </ol>

                      <Button variant="primary border-secondary mt-3 px-3 py-2">Apply Now</Button>

                </Col>
            </Row>
        </div>
    );
};

export default AchieveGoal;