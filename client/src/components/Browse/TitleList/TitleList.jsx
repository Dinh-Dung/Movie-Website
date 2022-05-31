import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TitleList.css";
import Item from "./Item/Item";
import '../../../styles/responsive.css'

export default function TitleList({ filmsData,title }) {
  const [films, setFilms] = useState([])


  useEffect (()=>{
    setFilms(filmsData)
  },[filmsData])


  const navigate = useNavigate()
  const clickHandleChange =()=>{
   navigate("/moviepage")
  }

  const renderFilms = () => {
    return films.map((value, index) => {
      return ( 
        <div className="col-12 col-xl-2dot4" key={index} onClick={()=>{clickHandleChange()}}>
          <Item  data={value} />
        </div>
        )
    })
  }

  return (
    <>
    <div className="titlelist container-fluid">
      <div className=" title">
        <div className="category">
          <h1>{title}</h1>
        </div>
        <div className="row ">
          {renderFilms()}
        </div>
      </div>
    </div>
    </>
  );
}
