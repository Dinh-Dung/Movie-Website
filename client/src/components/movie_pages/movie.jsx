import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./movie.css";

export default function Movie() {
  const [showfilm, setShowFilm] = useState([]);
  const [listFilm, setListFilm] = useState([]);

  const { search } = useLocation();

  const navigate = useNavigate();
  
  const onClickHandle = (id) => {
    navigate(`/movie?filmID=${id}`);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/showfilm/film${search}`);
      const result = await res.json();
      setShowFilm(result);
    })();
  }, [search]);

  useEffect(() => {
    (async () => {
      // Fetch top hanh dong films
      const res = await fetch("/api/film/get-top?category=2");
      const data = await res.json();
      setListFilm(data);

      //
    })();
  }, []);

  const showFilms = () => {
    return showfilm.map((val, ind) => (
      <div className="movie_page" key={ind}>
        <div className="movie_play">
          <div className="container">
            <div className="embed-responsive embed-responsive-21by9">
              <iframe
                className="embed-responsive-item"
                title="linkmovie"
                src={val.VideoLink}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="movie_page_cd">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="movie_page_img">
                  <img src={val.ImageLinkMoviePage} alt="no imgage" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="movie_page_text">
                  <h1>{val.filmName}</h1>
                  {/* <h2>Naruto Shippuuden Movie 4: The Lost Tower (2010)</h2> */}
                  <div className="movie_icon">
                    <p>
                      <i className="bi bi-star-fill "></i>
                      {val.Rate}/10
                    </p>
                    <p>
                      <i className="bi bi-tag"></i>
                      {val.Tag}
                    </p>
                    <p>
                      <i className="bi bi-clock"></i>
                      25/12/2019
                    </p>
                  </div>

                  <div className="movie_pg_information">
                    <p>Thời lượng: {val.Duration} phút</p>
                    <p>
                      Năm sản xuất: <a href="#1">{val.PublicYear}</a>
                    </p>
                    <p>
                      Quốc gia: <a href="#2">{val.Country}</a>{" "}
                    </p>
                    <p>
                      Thể loại: <a href="#3">{val.Category}</a>{" "}
                    </p>
                    <p>
                      Đạo diễn: <a href="#4">{val.Director}</a>
                    </p>
                    <p>Mô tả: {val.Description} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };
  const showListFilm = () => {
    return listFilm.map((val, ind) => {
      if (ind <= 3) {
        return (
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            key={ind}
            onClick={() => {
              onClickHandle(val.ID);
            }}
          >
            <img src={val.ImageLinkMoviePage} alt="no img"></img>
            <div className="movie_icon_sugest">
              <p>{val.Rate}/10</p>
            </div>
            <h2>
              <a href="#1">{val.Name}</a>
            </h2>
          </div>
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div>
      {showFilms()}
      <div className="movie_page_sugest">
        <div className="container">
          <div className="line_movie"></div>
          <h1>CÓ THỂ BẠN CŨNG MUỐN XEM</h1>

          <div className="row">{showListFilm()}</div>
        </div>
      </div>
    </div>
  );
}
