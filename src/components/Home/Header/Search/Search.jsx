import React from 'react'
import'./Search.css'
export default function Search() {
  return (
    <div className='Search'>
      <form action='' className="form-inline my-2 my-lg-0">
         <input type="search"
         className="form-control" 
        //  onChange=''
        //  onKeyUp=''
         placeholder='Search for a title...'
        //  value=''
          />
      </form>
    </div>
  )
}
