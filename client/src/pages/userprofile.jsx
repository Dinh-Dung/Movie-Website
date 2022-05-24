import React from 'react'
import Header from '../components/Header/Header'
import UserProfile from '../components/UserProfile/UserProfile'
import Footer from '../components/Footer/Footer'
import '../styles/index.css'
export default function userprofile() {
  return (
    <div>
      <header  className="Header">
      <Header/>
      </header>
    <UserProfile/>
    <Footer/>
    </div>
  )
}
