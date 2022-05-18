import React from 'react'
import './Banner.css'
// import 'antd/dist/antd'
// import {Rate} from 'antd'

export default function Banner() {


  return (
    <div className="Banner" style={{}}>
        <div className="Content">
        <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
        <h2>Season 2 now available</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat atque ipsum, quidem reprehenderit deleniti. Fugit quisquam iusto rerum dicta. Quas cupiditate quam, mollitia incidunt unde reprehenderit tempora at aut.</p>
       
        <div className="Button-wrapper">
          <button className="Button" data-primary="true">
            Watch Now
          </button>
          <button className="Button" data-primary="false">
            + Watch List
          </button>
        </div>
            
        </div>
        <div className="overlay"></div> 
    </div>
  )
}
