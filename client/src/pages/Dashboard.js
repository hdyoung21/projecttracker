import { Link } from 'react-router-dom';
import React from 'react';

const Dashboard = () => {
    return (
    <div>
        <h1>Dashboard</h1>
        <Link to='/register' className='btn'>
            Register
        </Link>
    </div>
    )
}


export default Dashboard;