import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button'
import React from 'react';
import { Form } from 'react-bootstrap';
import './SignUp.css';

const SignUp = () => {
    return (
        
        <div className="sign-up">
            <div className="input-div w-50">
                <input placeholder="sign up with Google" className="w-100 input bg-light border-0 " type="text" />
                <button className="btn btn-warning"><FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon></button>
            </div>
            <Form className="mt-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form-label">Email address</Form.Label>
                    <Form.Control className="w-75 mx-auto" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted form-label">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="w-75 mx-auto" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Re-Password</Form.Label>
                    <Form.Control className="w-75 mx-auto" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to the Terms & Conditions" className="form-label" />
                </Form.Group>
                <Button className=" btn btn-primary form-label" type="submit">
                    Submit
                </Button>

            </Form>

        </div>
    );
};

export default SignUp;