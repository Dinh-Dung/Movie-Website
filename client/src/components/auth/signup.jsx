import React from 'react'
import './auth.css'
import Logo from "../../assets/Logo/Logo"
import { useNavigate } from "react-router-dom";
export default function SignUp() {
    const shoot = () => {
        alert("Đăng ký thành công!") ;
      }
      const navigate = useNavigate()
    
      const onClick = () => navigate("/signin")
    return (
        <div className="bg_img" style={{ backgroundImage: `url(/images/anh_nen.jpg)` }}>
            <div className="banner_login hybrid-login-form"> 
                <form className="login_form">
                <h1>Sign Up</h1>
                <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputUsename1"
                            aria-describedby="UsenameHelp"
                            placeholder='UseName'
                        />
                    </div>
                   
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Password'  
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Retype password'  
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Your Name'
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder='Email'
                        />
                    </div>
                    <button type="submit" className="btn login-button btn-submit btn-small"  onClick={shoot}>
                    Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}
