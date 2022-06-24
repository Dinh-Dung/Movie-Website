import React, { useState,useEffect } from 'react'
import './auth.css'
import Logo from "../../assets/Logo/Logo"
import { useNavigate } from "react-router-dom";
export default function SignUp() {

    const [newUser,setNewUser]= useState({
        Name: '',
        Phone: '',
        Email: "",
        UserName: "",
        Pass: ""
    })

    const handleChange = (e) => {
        let {value, name} = e.target
        setNewUser(s => ({
          ...s, 
          [name]: value
        }))
      }

    const onSubmit = (e)=> {
        e.preventDefault()

        fetch('/auth/signup',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


    return (
        <div className="bg_img" style={{ backgroundImage: `url(/images/anh_nen.jpg)` }}>
            <div className="banner_login hybrid-login-form"> 
                <form className="login_form" onSubmit={(e)=>{onSubmit(e)}}>
                <h1>Sign Up</h1>
                <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputUsename1"
                            aria-describedby="UsenameHelp"
                            placeholder='UserName'
                            value={newUser.UserName}
                            name="UserName"
                            onChange={e=>handleChange(e)}
                        />
                    </div>
                   
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Password'  
                            value={newUser.Pass}
                            name="Pass"
                            onChange={e=>handleChange(e)}

                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Your Name'
                            value={newUser.Name}
                            name="Name"
                            onChange={e=>handleChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder='Email'
                            value={newUser.Email}
                            name="Email"
                            onChange={e=>handleChange(e)}
                        />
                    </div>
                    <button type="submit" className="btn login-button btn-submit btn-small"  >
                    Sign In
                    </button>
                   
                    {
                        setNewUser ?(
                            <p className="text-success">You are Registered  Successfully </p>
                            
                        ):(
                            <p className="text-danger"> You are not Registered</p>
                        )}
                </form>
            </div>
        </div>
    )
}
