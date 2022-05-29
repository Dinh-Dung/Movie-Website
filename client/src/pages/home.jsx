import React, { useEffect, useState } from 'react'

import Header from '../components/Header/Header'
import Banner from '../components/Browse/Banner/Banner'
import TitleList from '../components/Browse/TitleList/TitleList'
import Footer from '../components/Footer/Footer'
import '../styles/index.css'

export default function HomePage() {
  const [animeFilms, setAnimeFilms] = useState([])
  const [actionFilms, setActionFilms] = useState([])
  const [romaticFilms, setRomaticFilms] = useState([])

  useEffect(() => {
      (async () => {
        // Fetch top anime films
        const res = await fetch('/api/film/get-top?category=1')
        const data = await res.json()
        setAnimeFilms(data)

        // 
      })()
  }, [])


  return (
    <div>
      <header className="Header">
        <Header />
      </header>
      <Banner />
      <TitleList filmsData={animeFilms} title="Top Phim Hoạt Hình Anime Hay Nhất"/>
      <TitleList filmsData={actionFilms} title="Top Phim Hành Động Hay Nhất"/>
      <TitleList filmsData={romaticFilms} title="Top Phim Tình Cảm Hay Nhất"/>
      <Footer />
    </div>
  )
}
