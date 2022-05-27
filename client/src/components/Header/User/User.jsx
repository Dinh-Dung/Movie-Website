import React from 'react'
import { useNavigate } from "react-router-dom";
import './User.css'

export default function UserProfile() {

  const navigate = useNavigate()

  const onClick = () => navigate("/userprofile")
  return (
    <div className="UserProfile">
        <div className="User">
            <div className="name">
                Stackoverflow
            </div>
            <div className="image" onClick={onClick}>
               <a href="#undefine"> <img src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png" alt="profile" /></a>
            </div>
        </div>
    </div>
  )
}
