import React from 'react'
import Header from '../components/Home/Header/Header';
import Banner from "../components/Home/Banner/Banner";
import TitleList from "../components/Home/TitleList/TitleList"
import Footer from '../components/Home/Footer/Footer';
import "../styles/index.css"
export default function IndexPage() {
  return (
    <div className="App">
    <header className="Header">
        <Header />
    </header>
    <Banner/>
    <TitleList/>
    <Footer/>
  </div>
  )
}
