import React from 'react'
import './auth.css'
import Logo from "../../assets/Logo/Logo"
export default function SignIn(props) {
      
    const shoot = () => {
        alert("Đăng nhập thành công!");
      }

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
                    <button type="submit" className="btn login-button btn-submit btn-small"  onClick={shoot}>
                    Sign In
                    </button>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label" >
                           Remember me
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}
