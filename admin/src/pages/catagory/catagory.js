import React, { useState } from 'react'
import PageTitle from "../../components/PageTitle/PageTitle";
// import { useState, defaultList} from "react";
export default function Catagory() {
  const [navcategory, setNavCategory] = useState([]);

  const handleChange = (e) => {
    let value = e.target.value
    setNavCategory(value)
  }
  const handlSubmitChange =(e)=>{
    e.prevendefault();
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
                <tr>
                  <th scope="row">1</th>
                  <td>Hành Động</td>
                  <td><a className="btn btn-sm btn-primary" href="">Delete</a></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Hoạt Hình</td>
                  <td><a className="btn btn-sm btn-primary" href="">Delete</a></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Tình Cảm</td>
                  <td><a className="remove btn btn-sm btn-primary" href="#" >Delete</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-6 col-sm-12">
            Import
            <form onSubmit={(e)=>{handlSubmitChange(e)}}>
            <div className="col-md-6 mb-3">
                <label htmlFor="validationServer01">Name</label>
                <input type="search" className="form-control " id="validationServer01" value={navcategory} placeholder="Name" required
                onChange={(e)=>{handleChange(e)}}/>
            </div>
            <button className="btn btn-primary " type="submit">Submit form</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
