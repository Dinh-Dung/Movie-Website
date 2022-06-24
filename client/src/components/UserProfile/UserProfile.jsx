import React, { useState,useEffect   } from 'react'
import './UserProfile.css'
import { useLocation } from "react-router-dom";
export default function UserProfile() {

    // const [user,setUser]= useState([])
    // const { search } = useLocation();

    // useEffect(()=>{
    //         (async()=>{
    //             const res = await fetch(`/api/users/user${search}`)
    //             const data = await res.json()
    //             setUser(data)
    //         })()
    // })
  return (
    // user.map((val,ind)=>(
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
                   <div className="fullName"><i className="bi bi-person-circle"></i>Vương Thành Đạt</div>
                    <div className="phone_number"><i className="bi bi-telephone-fill"></i>0333717962</div>
                    <div className="gmail"><i className="bi bi-envelope-fill"></i>vuongthanhdat2703@gmail.com</div>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    // ))
  )
}
