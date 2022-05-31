import React from 'react'

import './Item.css'
export default function Item({ data }) {
  return (
    <div className="item" style={{backgroundImage:`url(${data.ImageLink})`}}>
        <div className="overlay">
            <div className="title">
                {data.Name}
            </div>
            <div className="rating">{data.Rate}/10</div>
            <div className="plot">
              {data.Description}
            </div>
        </div>
    </div>
  )
}
