import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    console.log(services);

    return (

        <>

            <Header></Header>
            <div className="bg-light">
                <div className="text-center">
                    <h2>Our Services</h2>
                </div>

                <div className="container my-5">
                    <h3>Online Courses<br />
                        For Anyone, Anywhere</h3>
                    <p>You don't have to struggle alone, you've got our assistance and help.</p>

                    <Row>
                        {
                            services.map(service => <Service service={service} key={service.course_id}></Service>)
                        }
                    </Row>
                </div>

            </div>
            <Footer></Footer>
        </>

    );
};

export default Services;