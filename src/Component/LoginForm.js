import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";
import SignupForm from "./SignupForm"
function LoginForm() {
    const [username, setname] = useState();
    const [pass, setPass] = useState();
    const nav = useNavigate()

    // Handle form submission
    const handleSubmit = async (e) => {


        try {
            
            const response = await axios.post('http://localhost:5000/users/login', {
                username: username,
                password: pass,
            }).then((d) => {
                if (d.data.statusCode === 200) {

                    localStorage.setItem("user", JSON.stringify(d.data.myData));

                    console.log(d.data.myData);

                    nav('/profile');

                }
            }).catch((err) => {
                console.log(err)
            });

            // Handle login success



        } catch (error) {
            // Handle login error
            console.error('Login error:', error);
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <>
           

            < div className="main" >
                <input type="checkbox" id="chk" aria-hidden="true"></input>
                <div className="signup">
                    <SignupForm />
                </div>
                <div className="login">

                    <form>
                        <label for="chk" aria-hidden="true">Login</label>

                        <input type="email" name="email" placeholder="User Name" onChange={(e) => setname(e.target.value)} required="" />
                        <input type="password" name="pswd" placeholder="Password" onChange={(e) => setPass(e.target.value)} required="" />
                        <button onClick={handleSubmit}>Login</button>
                    </form>


                </div>
            </div >

        </>
    );
}


export default LoginForm
