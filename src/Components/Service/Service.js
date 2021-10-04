import React from 'react';
import { Col, Stack } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { service, pathName } = props;
    const { img, title, description, teacher, teacher_name, proffesion, course_price } = service;
    console.log(props);
    return (

        <>

            {

                pathName === "/" || pathName === "/home" ? (

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

                ) : (


                    <Col lg={4} className="mt-5 service">
                        <Stack gap={3}>
                            <div className=" ">
                                <img className="w-100" src={img} alt="" />
                            </div>
                            <div className="">
                                <h5>{title}</h5>
                                <p>{description}</p>
                            </div>
                            <Stack direction="horizontal">
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

                )

            }
        </>
    );
};

export default Service;