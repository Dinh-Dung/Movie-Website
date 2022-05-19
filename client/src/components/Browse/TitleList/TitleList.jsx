import React from 'react'
import './TitleList.css'
import Item from './Item/Item'


export default function TitleList() {
//chua logic de truy xuat ket qua tu API   ,o day se fetch api
  return (
    
    <div className="titlelist">
        <div className="title">
            <h1>Top TV picks for Jack</h1>
            <div className="titles-wrapper">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    </div>
  )
}
