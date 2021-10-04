import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.jpg';
import Button from 'react-bootstrap/Button';
const NotFound = () => {
    return (
        <div>
            <div className="w-50 mx-auto pt-5">
                <img className="w-100" src={img} alt="" />
            </div>
            <div className="text-center my-3">
            <Link to="/home"> <Button className=" btn btn-primary form-label" type="submit">
                Back to Home
            </Button></Link>
            </div>
           
        </div>

    );
};

export default NotFound;