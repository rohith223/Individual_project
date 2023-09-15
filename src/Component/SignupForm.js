import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import './login.css';
function SignupForm() 
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;


    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    
    const handleSubmit = async (e) => {
       

        if (!emailRegex.test(email)) {
            alert('Invalid email address');
            e.preventDefault()
            return;
        }

        
        if (!passwordRegex.test(password)) {
            alert(
                'Password should contain at least one uppercase letter, one number, one special character, and be at least 6 characters long.'
            );
            e.preventDefault()
            return;
        }

        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            e.preventDefault()
            return;
        }

        let sendData = await axios
            .post('http://localhost:5000/', {
                username: username,
                password: password,
                email: email,
            })
            .then((d) => {
                console.log(d);
                alert('Registration Successful');

            })
            .catch((error) => {
                console.log(error.response.data.message);
                alert('Email or Username Already Exists');
            });
    };

    return (
        <div className="container">
            <form>
                <label htmlFor="chk" aria-hidden="true">
                    Sign up
                </label>
                <input
                    type="text"
                    name="txt"
                    placeholder="User name"
                    onChange={(e) => setUsername(e.target.value)}
                    required=""
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required=""
                />
                <input
                    type="password"
                    name="pswd"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required=""
                />
                <input
                    type="password"
                    name="confirmPswd"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required=""
                />
                <button onClick={handleSubmit}>Sign up</button>
            </form>


        </div>
    );
}

export default SignupForm