import React from 'react'
import Logo from '../../../assets/Logo'
import './Navigation.css'
import Background from '../../../images/anh_nen.jpg'


export default function Header() {
  return (
    <div className='header'>
      <div className="header_img " style={{ backgroundImage: `url(${Background})`, height: "800px" }}>
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
      <div className='Banner'>
        <div className="container">
          <h2>Unlimited movies, TV<br />shows, and more</h2>
          <p>Watch anywhere. Cancel anytime.</p>
          <div>
            <a>Ready to watch? Enter your email to create or restart your membership</a>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}
