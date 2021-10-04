import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import HeaderService from '../HeaderService/HeaderService';


const Service = () => {
    const [services] = useServices();


    return (


        <div className="container">

            <Row>

                {

                    services.slice(1, 5).map(service => <HeaderService service={service}></HeaderService>)
                }
            </Row>
        </div>

    );
};

export default Service;