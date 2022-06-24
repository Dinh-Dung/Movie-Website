import React from 'react'
import './auth.css'
import { useNavigate } from "react-router-dom";
import { useLogin } from '../../contexts/auth';
import { useState } from 'react';
import { useEffect } from 'react';

export default function SignIn(props) {
    const[userName,setUserName] = useState()
    const[pass,setPass] = useState()

    const {user,login}=useLogin()
    const navigate = useNavigate()
    const onClick = () => navigate("/signup")

    const handleChangeUsername =(e)=>{
        const data = e.target.value;
        setUserName(data)
    }
    const handleChangePass =(e)=>{
        const data = e.target.value;
        setPass(data)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        login(userName,pass)
    }
    useEffect(()=>{
        if (user){
            navigate("/homepage")
        }
        // console.log(user);
    },[user])

    return (
        <div className="bg_img" style={{ backgroundImage: `url(/images/anh_nen.jpg)` }}>

            <div className="banner_login hybrid-login-form">
                <form className="login_form" onSubmit={(e)=>{handleSubmit(e)}}>
                <h1>Sign In</h1>
                <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputUsename1"
                            aria-describedby="UsenameHelp"
                            placeholder='UseName'
                            onChange={(e)=>{handleChangeUsername(e)}}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Password'  
                            onChange={(e)=>{handleChangePass(e)}}
                        />
                    </div>
                    <button type="submit" className="btn login-button btn-submit btn-small">
                    Sign In
                    </button>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label" >
                           Remember me
                        </label>
                      
                    </div>
                    <div onClick={onClick}>
                            Do not have an account? <a href="#undefine">
                            SignUp Now</a>
                        </div>
                </form>
            </div>
        </div>
    )
}
