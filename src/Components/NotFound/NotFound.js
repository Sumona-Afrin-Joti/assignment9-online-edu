import React from 'react';
import img from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <div className="w-50 mx-auto pt-5">
                <img className="w-100" src={img} alt="" />
            </div>
        </div>

    );
};

export default NotFound;