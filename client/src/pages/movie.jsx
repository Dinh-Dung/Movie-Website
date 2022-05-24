import React from 'react'
import Movie from '../components/movie_pages/movie'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function MoviePage() {
  return (
    <>
 <header className="Header">
        <Header/>
      </header>  
    <Movie />
    <Footer />
      
    </>
  )
}
