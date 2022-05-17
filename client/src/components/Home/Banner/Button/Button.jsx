import React from 'react'
import './Button.css'
export default function Button(props) {
  return (
    <div>
        <a href="#undefine" className="Button" data-primary={props.primary}>{props.text}</a>
    </div>
  )
}
