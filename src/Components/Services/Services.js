import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import AllService from '../AllService/AllService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Services = () => {
    const [services] = useServices();
    console.log(services);

    return (

        <>

            <Header></Header>
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
                            services.map(service => <AllService service={service} key={service.course_id}></AllService>)
                        }
                    </Row>
                </div>

            </div>
            <Footer></Footer>
        </>

    );
};

export default Services;