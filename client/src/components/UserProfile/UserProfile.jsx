import React, { useState,useEffect   } from 'react'
import './UserProfile.css'
import { useLogin } from '../../contexts/auth';
import { useNavigate } from "react-router-dom";
export default function UserProfile() {

   const navigate = useNavigate()

   const {user}= useLogin()
     useEffect(()=>{
       if(!user)
       navigate('/signin')
     },[user])

  return (
    
        <section className="userProfile">
        <div className="container">
            <div className="row">
                <div className="col-xl-4  col-12 avatar-user">
                    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="#" />
                </div>
                <div className="col-xl-8  col-12">
                    <div className="description">
                    <h2 className="description_title"><i className="bi bi-card-list"></i> Information</h2>
                   <div className="info">
                   <div className="fullName"><i className="bi bi-person-circle"></i> {user?.Name ? user.Name : ' '}</div>
                    <div className="phone_number"><i className="bi bi-telephone-fill"></i> {user?.Phone ? user.Phone : ' '}</div>
                    <div className="gmail"><i className="bi bi-envelope-fill"></i> {user?.Email ? user.Email : ' '}</div>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    // ))
  )
}
