import React from 'react'
import './Login.css'
import { useRef } from 'react'
import {  useNavigate } from 'react-router-dom';

const Login = () => {
    let email_ref = useRef("");
    let pass_ref = useRef("");
    let navigate = useNavigate()
    const handle_submit = (e) => {
        e.preventDefault()
        let email = email_ref.current.value;
        let pass = pass_ref.current.value;
        console.log(email);
        console.log(pass);
        if(!email || !pass ){
            alert("Enter Correct EMail and Password")
            return
        }
        
        localStorage.setItem("loginStatus", true)
        navigate("/Home")
    }
    return (
        <>
            <div className="main_form">
                <div className="form">
                    <h1>Login</h1>
                    <form onSubmit={handle_submit}>
                        <input ref={email_ref} type="email" placeholder='Enter Email' />
                        <input ref={pass_ref} type="password" placeholder='Enter Password' />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login