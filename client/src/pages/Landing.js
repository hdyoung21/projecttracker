import { Link } from 'react-router-dom';
import React from 'react';

const Landing = () => {
    return (
    <div>
        <h1>Landing</h1>
        <Link to='/landing' className='btn'>
            Register/Log In
        </Link>
    </div>
    )
}

export default Landing;
