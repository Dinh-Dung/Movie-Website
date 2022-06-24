import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TitleList.css";
import Item from "./Item/Item";
import '../../../styles/responsive.css'

export default function TitleList({ filmsData,title,idNav}) {
  const [films, setFilms] = useState([])


    useEffect (()=>{
      setFilms(filmsData)
    },[filmsData])


    const navigate = useNavigate()
    const onClickHandle =(id)=>{
    navigate(`/movie?filmID=${id}`)
    }

  const renderFilms = () => {
    return films.map((value, index) => {
       if(index <= 7){
        return(
          <div className="col-12 col-xl-2dot4 col-md-6 mt-2" key={index} onClick={()=>{onClickHandle(value.ID)}}>
          <Item  data={value} />
        </div>
        )
      }else{
        return null
      }}
      
        )
  }

  return (
    <>
    <div className="titlelist container-fluid" id={idNav}>
      <div className=" title">
        <div className="category">
          <h1>{title}</h1>
        </div>
        <div className="row " >
          {renderFilms()}
        </div>
      </div>
    </div>
    </>
  );
}
