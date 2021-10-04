import React from 'react';
import { Col, Stack } from 'react-bootstrap';
import './HeaderService.css'
const HeaderService = (props) => {
    const { img, title, description, teacher, teacher_name, proffesion, course_price } = props.service;
    return (

        <Col lg={5} className="bg-white p-5 m-3 service">
            <Stack gap={3}>
                <div className=" ">
                    <img className="w-100 thumb-img" src={img} alt="" />
                </div>
                <div className="">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <Stack direction="horizontal" gap={2}>
                    <div className="">
                        <img className="rounded-circle" src={teacher} alt="" />
                    </div>
                    <div className="">
                        <h5 className="mb-0">{teacher_name}</h5>
                        <p className="mb-0"><small>{proffesion}</small></p>
                    </div>
                    <div className="ms-auto ">Course Price: {course_price}</div>
                </Stack>
            </Stack>

        </Col>

    );
};

export default HeaderService;