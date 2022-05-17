import React from 'react'
import Navigation from "../components/Home/Header/Navigation/Navigation.jsx";
import Banner from "../components/Home/Banner/Banner";
import "../styles/index.css"
export default function IndexPage() {
  return (
    <div className="App">
    <header className="Header">
        <Navigation />
    </header>
    <Banner/>
  </div>
  )
}
