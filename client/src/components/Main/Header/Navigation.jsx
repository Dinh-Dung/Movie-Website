import React from 'react'
import Logo from '../../../assets/Logo/Logo';
import './Navigation.css'
<<<<<<< HEAD
// // import Background from '../../../images/anh_nen.jpg'
// import Background from '../../../../public/images/anh_nen.jpg'
=======


>>>>>>> f91384b0393d58a483e49c0fc06f2c305515560c

export default function MainHeader() {
  return (
    <div className='header'>
      <div className="header_img ">
        <div className="header_nav">
          <nav className="navbar navbar-light  justify-content-between">
            <a className="navbar-brand" href="#undefine"> <Logo /></a>
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
              <button type="button" className="btn btn-danger">Sign In</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );

}