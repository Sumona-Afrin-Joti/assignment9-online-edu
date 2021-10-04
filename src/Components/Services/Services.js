import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    let pathName = window.location.pathname;
    console.log(pathName)
    return (
        <div className="bg-light">
            <div className="text-center">
                <h1>Our Services</h1>
            </div>

            <div className="container my-5">
                <h1>Online Courses<br />
                    For Anyone, Anywhere</h1>
                <p>You don't have to struggle alone, you've got our assistance and help.</p>

                <Row>
                    {
                        pathName === '/home' ? services.slice(1, 5).map(service => <Service service={service} pathName={pathName}></Service>) : services.map(service => <Service service={service} pathName={pathName}></Service>)
                    }

                </Row>

            </div>

        </div>
    );
};

export default Services;