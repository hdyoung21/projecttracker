import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormRow from '../components/FormRow';

const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    ghLink: '',
};


const Register = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState(initialState);
    // const [values, setValues] = useState({firstName: '',
    // lastName: '',
    // username: '',
    // email: '',
    // password: '',
    // ghLink: ''}); 
    // global state and useNavigate

    const handleChange = (e) => {console.log(e.target)};
    const onSubmit = (e) => {e.preventDefault();
        const { firstName, lastName, username, email, password, ghLink, labelText, handleChange, value } = values;
        return;
        }
    return (
    <div>
        <form onSubmit={onSubmit}>
            <h3>Login</h3>
            {/* first name input */}
            <div>
                <label>First Name</label>
                <FormRow 
                    type="text" 
                    name='firstName'
                    value={values.firstName} 
                    handleChange={handleChange}
                />
            </div>
            {/* last name input */}
            <div>
                <label>Last Name</label>
                <FormRow 
                    type="text" 
                    name='lastName'
                    value={values.lastName} 
                    handleChange={handleChange}
                />
            </div>
            {/* email input */}
            <div>
                <label>Email Address</label>
                <FormRow 
                    type='email' 
                    name='email'
                    value={values.email} 
                    handleChange={handleChange}
                />
            </div>
            {/* password input */}
            <div>
                <label>Password</label>
                <FormRow
                    type='password' 
                    name='password'
                    value={values.password} 
                    handleChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>        
    </div>
    )
}

export default Register;