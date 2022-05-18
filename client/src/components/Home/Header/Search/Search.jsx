import React from 'react'
import'./Search.css'
import { useState } from 'react'
export default function Search() {

  const [search,setSearch] = useState('')

  const handleChange = (e)=>{
    const value = e.target.value;
    setSearch(value)
  }
  const handleSubmitChange = (e)=>{
    e.preventdefault()

  }
  console.log(search);

  return (
    <div className='Search' >
      <form action='' className="form-inline my-2 my-lg-0" onSubmit={e=>{handleSubmitChange(e)}}>
         <input type="search"
          name='text'
          onChange={e=>{handleChange(e)}}
          placeholder='Search for a title...'
          value={search}
          />
      </form>
    </div>
  )
}
