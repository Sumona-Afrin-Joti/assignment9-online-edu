import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import HeaderService from '../HeaderService/HeaderService';
import './Service.css'

const Service = () => {
    const [services] = useServices();


    return (


        <div className="container">
            <div className=" services-container">

            <div className="text-center mb-3">
                <h3>Our Services</h3>
            </div>

            <div>
                <div className="view-services">
                <NavLink to="/services" style={{ textDecoration: 'none', color: "gray"}}><small className="view-all">View all services</small>
                    <FontAwesomeIcon icon={faArrowCircleRight} className="fw-normal"></FontAwesomeIcon> </NavLink>
                </div>
               
                <Row xs={1} md={2}>

                    {

                        services.slice(0, 4).map(service => <HeaderService key={service.course_id}
                             service={service}></HeaderService>)
                    }
                </Row>
            </div>
            </div>

            


        </div>

    );
};

export default Service;