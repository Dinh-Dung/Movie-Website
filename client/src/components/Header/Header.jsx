import React from 'react'
import Logo from '../../assets/Logo/Logo'
import './Header.css'
import { Link } from 'react-router-dom'
import UserProfile from './User/User'
import { useState,useEffect } from 'react'
export default function Header() {

     


  const [navSize, setnavSize] = useState("");
  const [navColorText,setColorText] = useState("#1b0a0a") 
  
  const [searchValue,setsearchValue] = useState('')

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavSize("4rem") : setnavSize("2rem");
    window.scrollY > 10 ? setColorText("white"): setColorText("#1b0a0a")
  };

    const handleClear = ()=>{
      setsearchValue('')
    }
    const handleSubmitChange = (e)=>{
      e.preventdefault()
    }



  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
        <div className="Navigation"  style={{height:navSize,transition:"all 1s"}}>
        <nav className="navbar navbar-expand-lg navbar-light " >
        <a className="navbar-brand" href="#undefine"><Link to="/homepage"><Logo/></Link></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent" style={{color:navColorText}}>
          <div className="menu" >
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item " >
              <Link className="nav-link" to="/homepage" style={{color:navColorText}} >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="" style={{color:navColorText}}>Hành Động</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#undefine"style={{color:navColorText}} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Anime
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#undefine" >Anime 2018</a>
                <a className="dropdown-item" href="#undefine">Naruto</a>
                <a className="dropdown-item" href="#undefine">Luffy</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#undefine" style={{color:navColorText}}>Hoạt Hình</a>
            </li>
          </ul>

          <div className="Search " >
          <form action='' className=""  onSubmit={e=>{handleSubmitChange(e)}}>
          <input
            type="search"
            name='text'
            onChange={(e)=>setsearchValue(e.target.value)}
            value={searchValue}
            placeholder='Search for a title...'
            
          />
          {/* render co dieu kien */}
          { !!searchValue && (
            <button className="clear" style={{color:navColorText}} onClick={handleClear}>
              <i className="bi bi-x-circle-fill"></i>
            </button>
          )}
          {
            // loading 
          }

          <button className="search-btn "  style={{color:navColorText}}>
          <i className="bi bi-search"></i>
          </button>

          </form>
        </div>
        <div className="User">
            <UserProfile/>
        </div>
          </div>
         
        </div>
   
        
        </nav>
      </div>
  )
}
