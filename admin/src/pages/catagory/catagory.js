import React, { useEffect, useState } from 'react'
import PageTitle from "../../components/PageTitle/PageTitle";
// import { useState, defaultList} from "react";
export default function Catagory() {
  const [navcategory, setNavCategory] = useState("");
  const [navList, setNavList] = useState([])

  useEffect(() => {
    fetch('/api/nav/category')
      .then(res => res.json())
      .then(data => setNavList(data))
  }, [])

  const handleChange = (e) => {
    let value = e.target.value
    setNavCategory(value)
  }
  const handlSubmitChange = (e) => {
    e.preventDefault();

    //POST
    fetch('/api/new/category', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: navcategory
      })
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <>
      <PageTitle title="MovieCategory" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div>Information</div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {navList.map((nav, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>{nav.CateName}</td>
                      <td><a className="btn btn-sm btn-primary" href="">Delete</a></td>
                    </tr>
                  )
                })

                }
    
              </tbody>
            </table>
          </div>

          <div className="col-md-6 col-sm-12">
            Import
            <form onSubmit={(e) => { handlSubmitChange(e) }}>
              <div className="col-md-6 mb-3">
                <label htmlFor="validationServer01">Name</label>
                <input type="search" className="form-control " id="validationServer01" value={navcategory} placeholder="Name" required
                  onChange={(e) => { handleChange(e) }} />
              </div>
              <button className="btn btn-primary " type="submit">Submit form</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
