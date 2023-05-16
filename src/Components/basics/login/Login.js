import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './login.css';
async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}
export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        if (username.length >= 5) {
            console.log("hhh", username.length)
        }
        setToken(token);
    }

    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const isFormValid = () => {
        // Check if the email and password are valid
        return username && password;
    };
    return (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit} className='formclass'>
                <h1 className='loginheader'>Login</h1>
                <label>
                    {/* <span>username must be have 8 characters or more</span> */}
                    <input type="text" placeholder='Enter Username' maxLength={16} minLength={8} className='inputtype' onChange={handleUsernameChange} />
                </label><br /><br /><br />
                <label>
                    <input type="password" placeholder='Enter Password' className='inputtype' onChange={handlePasswordChange} />
                </label><br /><br /><br />
                {/* <label>
                      <input type="password" placeholder='Password' className='inputtype'  onChange={e => setPassword(e.target.value)} />
                </label><br /><br /> */}
                <div>
                    <button disabled={!isFormValid()} type="submit" className='loginbutton'>Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};