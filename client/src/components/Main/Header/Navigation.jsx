import React from 'react'
import Logo from '../../../assets/Logo/Logo';
import './Navigation.css'
import { useNavigate } from "react-router-dom";

export default function MainHeader() {
  
const navigate = useNavigate()

const onClick = () => navigate("/signin")
  return (
    <div className='header'>
      <div className="header_img ">
        <div className="header_nav">
          <nav className="navbar navbar-light  justify-content-between">
            <a className="navbar-brand" href="#undefine">   <img src="./images/logonew.png" alt="no img" style={{width:'200px'}}/></a>
            <div>
              <div className="btn-group language">
                <button type="button" className={'btn dropdown-toggle '} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bi bi-globe" /> Language
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#undefine">English</a>
                  <a className="dropdown-item" href="#undefine">Tiếng Việt</a>
                </div>
              </div>
              <button type="button" className="btn btn-danger" onClick={()=>{onClick()}}>Đăng Nhập</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );

}
