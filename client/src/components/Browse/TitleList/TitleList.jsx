import React from "react";
import "./TitleList.css";
import Item from "./Item/Item";
import '../../../styles/responsive.css'
export default function TitleList() {
  //chua logic de truy xuat ket qua tu API   ,o day se fetch api
  return (
    <>
    <div className="titlelist container-fluid">
      <div className=" title">
        <div className="category">
          <h1>Top TV picks for Jack</h1>
        </div>
        <div className="row ">
          <div className="col-12 col-xl-2dot4">
            <Item />
          </div>
          <div className="col-12 col-xl-2dot4">
            <Item />
          </div>
          <div className="col-12 col-xl-2dot4">
            <Item />
          </div>
          <div className="col-12 col-xl-2dot4">
            <Item />
          </div>
          <div className="col-12 col-xl-2dot4">
            <Item />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
