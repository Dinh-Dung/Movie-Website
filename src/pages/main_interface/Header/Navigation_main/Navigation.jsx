import React from 'react'
import Logo from '../../../../assets/logo'
import './Navigation.css'

import Background from '../../../images/anh_nen.jpg'


export default function Navigation_main() {
  return (

    <div className="Header_img "style={{backgroundImage: `url(${Background})`,height:"600px" ,}}>
    <div className="header" >
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
  );

}
