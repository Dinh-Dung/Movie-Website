import React from 'react'
import './Banner.css'
// import 'antd/dist/antd'
// import {Rate} from 'antd'

export default function Banner() {


  return (
    <div className="Banner container-fluid">
       <div className="content row">
       <div className="content-left col-xl-6">
        <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
        <h2>Season 2 now available</h2>
        <p>Chilean drug chemist Cockroach brings his product to Colombian smuggler Pablo Escobar. 
          DEA agent Steve Murphy joins the war on drugs in Bogotá.</p>
       
          <div className="Button-wrapper">
            <button className="Button" data-primary="true">
              Watch Now
            </button>
            <button className="Button" data-primary="false">
              + Watch List
            </button>
          </div>
        </div> 
        <div className="content-right col-xl-6">
          <img className="logo1" src='./images/narcos.png' alt="narcos background" />
        </div>
        </div> 
        <div className="overlay"></div> 
    </div>
  )
}
