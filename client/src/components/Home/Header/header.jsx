import React from 'react'
import Logo from '../../../assets/Logo/Logo'
import './Header.css'
import UserProfile from './UserProfile/UserProfile'
import { useState,useEffect } from 'react'
export default function Header() {

      const [search,setSearch] = useState('')

      const handleChange = (e)=>{
        const value = e.target.value;
        setSearch(value)
      }
      const handleSubmitChange = (e)=>{
        e.preventdefault()
    
      }
      // console.log(search);


  const [navSize, setnavSize] = useState("");
  const [navColor, setnavColor] = useState("transparent");
  const [navColorText,setColorText] = useState("#1b0a0a")
 
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("transparent") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("6rem") : setnavSize("3rem");
    window.scrollY > 10 ? setColorText("white"): setColorText("#1b0a0a")
    
  };
  useEffect(() => {
     //lang nghe su kien scroll khi ma dc loadlai
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
        <div className="Navigation" style={{height:navSize,backgroundColor:navColor,transition:"all 1s"}}>
        <nav className="navbar navbar-expand-lg navbar-light " >
        <a className="navbar-brand" href="#undefine"><Logo/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent" style={{color:navColorText}}>
          <div className="menu" >
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item " >
              <a className="nav-link" href="#undefine" style={{color:navColorText}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#undefine" style={{color:navColorText}}>Hành Động</a>
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
          <div className="Search" >
        <form action='' className="form-inline my-2 my-lg-0" onSubmit={e=>{handleSubmitChange(e)}}>
         <input type="search"
          name='text'
          onChange={e=>{handleChange(e)}}
          placeholder='Search for a title...'
          
          value={search}
          />
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
