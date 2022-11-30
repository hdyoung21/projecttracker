import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Alert, FormRow } from '../components';
import { useAppContext } from '../context/appContext';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    };

const Register = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState(initialState);
    // global state and useNavigate
    const { user, isLoading, showAlert, displayAlert } = useAppContext();
    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values;
        if(!email || !password || (!isMember && !name)) {
            displayAlert();
            return;
        }
        console.log(values);
    };
    return (
    <div>
        <form onSubmit={onSubmit}>
            <h3>Login</h3>
            {values.showAlert && <Alert />}
            {/* first name input */}
            {!values.isMember && (
                <FormRow 
                    type="text" 
                    name='name'
                    value={values.name} 
                    handleChange={handleChange}
                />
                )}
                
                {/* email input */}
                <FormRow 
                    type='email' 
                    name='email'
                    value={values.email} 
                    handleChange={handleChange}
                />
            {/* password input */}
                <FormRow
                    type='password' 
                    name='password'
                    value={values.password} 
                    handleChange={handleChange}
                />
           
            <button type="submit" disabled={isLoading}>Submit</button>
            <p>
                {values.isMember ? 'I do not have an account yet.' : 'Already have an account?'}
                <button type="button" onClick={toggleMember}>{values.isMember ? 'Register' : 'Login'}</button>
            </p>
        </form>        
    </div>
    );
};

export default Register;

