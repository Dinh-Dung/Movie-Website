import React from 'react'
import Footer from '../components/Footer/Footer'
import MainBanner from '../components/Main/banner/banner'
import MainContent from '../components/Main/content/content'

import "../styles/index.css"

export default function IndexPage() {
  return (
      <>

      <MainBanner />
      <div className="Main-all">
      <MainContent />
    </div>
    <Footer />
    </>
  )
}
