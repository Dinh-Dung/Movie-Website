import React, { useEffect, useState } from "react";
import "./TitleList.css";
import Item from "./Item/Item";
import '../../../styles/responsive.css'

export default function TitleList({ filmsData,title }) {
  const [films, setFilms] = useState([])
  //chua logic de truy xuat ket qua tu API   ,o day se fetch api


  useEffect (()=>{
    setFilms(filmsData)
  },[filmsData])


  const renderFilms = () => {
    return films.map((value, index) => {
      return (
        <div className="col-12 col-xl-2dot4" key={index}>
          <Item  data={value}/>
        </div>)
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
