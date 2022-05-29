import React from 'react'
import { useNavigate } from "react-router-dom";

import './Item.css'
export default function Item() {
  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate('/moviepage')} className="item" style={{backgroundImage:'url(https://image.tmdb.org/t/p/w780https://www.themoviedb.org/t/p/original/1qpUk27LVI9UoTS7S0EixUBj5aR.jpg)'}}>
        <div className="overlay">
            <div className="title">
                    Halo
            </div>
            <div className="rating">7/10</div>
            <div className="plot">
            Depicting an epic 26th-century conflict between humanity and an alien threatknown as the Covenant,the series weaves deeply drawn personal stories with action, adventure and a richly imagined vision of the future.</div>
        </div>
    </div>
  )
}
