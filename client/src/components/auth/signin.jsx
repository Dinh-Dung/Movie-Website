import React from 'react'
import './auth.css'
import { useNavigate } from "react-router-dom";
export default function SignIn(props) {
      

    const navigate = useNavigate()
    const onClick = () => navigate("/signup")
       

    return (
        <div className="bg_img" style={{ backgroundImage: `url(/images/anh_nen.jpg)` }}>

            <div className="banner_login hybrid-login-form">
                <form className="login_form">
                <h1>Sign In</h1>
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
