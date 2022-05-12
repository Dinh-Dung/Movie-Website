import React from 'react'
import Logo from '../../../../assets/Logo'
import './Navigation.css'
import Search from '../Search/Search'
import UserProfile from '../UserProfile/UserProfile'
export default function Header() {
  return (
        <div className="Navigation">
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#undefine"><Logo/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent" >
          <div className="menu">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item ">
              <a className="nav-link" href="#undefine">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#undefine">Hành Động</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#undefine" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Anime
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#undefine">Anime 2018</a>
                <a className="dropdown-item" href="#undefine">Naruto</a>
                <a className="dropdown-item" href="#undefine">Luffy</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#undefine">Hoạt Hình</a>
            </li>
          </ul>
          </div>
         
        </div>
      </nav>
        <div className="formSearch">
          <Search/>
        </div>
        <div className="User">
            <UserProfile/>
        </div>
      </div>
  )
}
