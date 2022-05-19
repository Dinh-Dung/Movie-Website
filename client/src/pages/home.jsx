import React from 'react'

import Header from '../components/Header/Header'
import Banner from '../components/Browse/Banner/Banner'
import TitleList from '../components/Browse/TitleList/TitleList'
import Footer from '../components/Footer/Footer'
import '../styles/index.css'
export default function homePage() {
  return (
    <div>
      <header className="Header">
        <Header/>
      </header>  
      <Banner/>
      <TitleList/>
      <TitleList/>
      <TitleList/>
      <Footer/>
    </div>
  )
}
