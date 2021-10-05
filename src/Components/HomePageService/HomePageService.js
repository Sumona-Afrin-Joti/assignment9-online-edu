import React from 'react';
import { Col, Stack } from 'react-bootstrap';
import './HomePageService.css'
const HomePageService = (props) => {
    const { img, title, description, teacher, teacher_name, proffesion, course_price } = props.service;
    return (

        <Col lg={5} className="bg-white p-4 m-3 service">
            <Stack gap={3}>
                <div>
                    <img className="w-100" src={img} alt="" />
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <Stack direction="horizontal" gap={2}>
                    <div>
                        <img className="rounded-circle" src={teacher} alt="" />
                    </div>
                    <div>
                        <h5 className="mb-0">{teacher_name}</h5>
                        <p className="mb-0"><small>{proffesion}</small></p>
                    </div>
                    <div className="ms-auto ">Course Price: {course_price}</div>
                </Stack>
            </Stack>

        </Col>

    );
};

export default HomePageService;