import React from 'react';
import { Col, Stack } from 'react-bootstrap';

const Service = (props) => {
    const { img, title, description, teacher, teacher_name, proffesion, course_price } = props.service;
    return (
        
            <Col lg={4} className="mt-5 service p-3">
                <Stack gap={3}>
                    <div>
                        <img className="w-100" src={img} alt="" />
                    </div>
                    <div className="">
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </div>
                    <Stack direction="horizontal" className="">
                        <div>
                            <img className="rounded-circle" src={teacher} alt="" />
                        </div>
                        <div>
                            <h6 className="m-0 px-2">{teacher_name}</h6>
                            <p className="m-0 proffesion "><small className="px-2">{proffesion}</small></p>
                        </div>
                        <h6 className="ms-auto price">Course Price: {course_price}</h6>
                    </Stack>
                </Stack>
            </Col>
        
    );
};

export default Service;