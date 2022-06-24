import React from 'react'
import { useNavigate } from "react-router-dom";
import './User.css'

export default function UserProfile() {

  const navigate = useNavigate()

  const onClick = (id) => navigate(`/userprofile?userId${id}`)
  return (
    <div className="UserProfile">
        <div className="User">
            <div className="name">
                Dat
            </div>
            <div className="image" onClick={onClick}>
               <a href="#undefine"> <img src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png" alt="profile" /></a>
            </div>
        </div>
    </div>
  )
}
