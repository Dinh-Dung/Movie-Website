import React from 'react'
import './Banner.css'
import { useEffect,useState } from 'react'
// import 'antd/dist/antd'
// import {Rate} from 'antd'

export default function Banner() {

  const[mostView,setMosetView] = useState([])


  useEffect(()=>{
    (async ()=>{
      const res = await fetch('/api/mostview/film')
      const data = await res.json()
      setMosetView(data)
    })()
  },[])

  return (
    mostView.map((value,index)=>(
      <div className="Banner container-fluid" key={index}>
       <div className="content row">
       <div className="content-left col-xl-6">
        <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
        <h2>Season 2 now available</h2>
        <p>{value.Description}</p>
        <p>Country: {value.Country}</p>
       
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
          <img className="logo1" src={value.ImageLink} alt="narcos background" />
        </div>
        </div> 
        <div className="overlay"></div> 
    </div>
    ))
  )
}
