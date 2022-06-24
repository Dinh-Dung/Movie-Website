import React, { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import Banner from "../components/Browse/Banner/Banner";
import TitleList from "../components/Browse/TitleList/TitleList";
import Footer from "../components/Footer/Footer";
import "../styles/index.css";
import { useLogin } from "../contexts/auth";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const [animeFilms, setAnimeFilms] = useState([]);
  const [actionFilms, setActionFilms] = useState([]);
  const [romaticFilms, setRomaticFilms] = useState([]);

  const navigate = useNavigate();

  const { user } = useLogin();
  useEffect(() =>{
    if (!user) navigate("/signin")
  },[user]);

  useEffect(() => {
    (async () => {
      // Fetch top anime films
      const res = await fetch("/api/film/get-top?category=1");
      const data = await res.json();
      setAnimeFilms(data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      // Fetch top anime films
      const res = await fetch("/api/film/get-top?category=2");
      const data = await res.json();
      setActionFilms(data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      // Fetch top anime films
      const res = await fetch("/api/film/get-top?category=3");
      const data = await res.json();
      setRomaticFilms(data);
    })();
  }, []);
  return (
    <div>
      <header className="Header">
        <Header />
      </header>
      <Banner />
      <TitleList
        filmsData={animeFilms}
        title="Top Phim Hoạt Hình Anime Hay Nhất"
        idNav={"1"}
      />
      <TitleList
        filmsData={actionFilms}
        title="Top Phim Hành Động Hay Nhất"
        idNav={"2"}
      />
      <TitleList
        filmsData={romaticFilms}
        title="Top Phim Tình Cảm Hay Nhất"
        idNav={"3"}
      />
      <Footer />
    </div>
  );
}
