import React from 'react'
import './TitleList.css'



export default function TitleList() {

  return (
    //chua logic de truy xuat ket qua tu API   ,o day se fetch api
    <div className="TitleList">
        <div className="Title">
            <h1>props.title</h1>
            <div className="Titles-wrapper">
                titles
            </div>
        </div>
    </div>
  )
}
