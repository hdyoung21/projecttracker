import { Link } from 'react-router-dom';
import React from 'react';


const Register = () => {
    return (
    <div>
        <h1>Register</h1>
        <Link to='/register' className='btn'>
            Register
        </Link>
    </div>
    )
}

export default Register;