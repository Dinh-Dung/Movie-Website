import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import './movie.css'

export default function Movie() {
    const [showfilm,setShowFilm] = useState([])

    const { search } = useLocation()

    useEffect(()=>{
        (async()=>{
            const res = await fetch(`/api/showfilm/film${search}`)
            const result = await res.json()
            setShowFilm(result)
        })()
    })
        
    return (
       showfilm.map((val,ind)=>(
        <div className="movie_page">
        <div className="movie_play">
            <div className="container">
                <div className="embed-responsive embed-responsive-21by9"   >  
                    <iframe className="embed-responsive-item" title="linkmovie"  src={val.VideoLink} ></iframe>
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
                            <p>{val.Rate}/10</p>
                                <p> 
                                    <i className="bi bi-tag"></i>
                                   {val.Tag}
                                </p>
                                <p><i className="bi bi-clock"></i>
                                    25/12/2019
                                </p>
                            </div>
                            
                            <div className="movie_pg_information">
                                {/* <p>Trạng Thái: Hoàn tất</p> */}
                                <p>Thời lượng: {val.Duration} phút</p>
                                <p>Năm sản xuất: <a href='#1'>{val.PublicYear}</a></p>
                                <p>Quốc gia: <a href='#2'>{val.Country}</a> </p>
                                <p>Thể loại: <a href='#3'>{val.Category}</a> </p>
                                <p>Đạo diễn: <a href='#4'>{val.Director}</a></p>
                                <p>Mô tả: {val.Description} </p>
                                {/* <p>Diễn viên: <a href='#5'>Junko Takeuchi, Chie Nakamura, Rikiya Koyama, Saori Hayami, Satoshi Hino, Nobuaki Fukuda, Kenji Hamada, Keiko Nemoto, Yumi Tôma, Yûko Kobayashi, Fujiko Takimoto, Mutsumi Tamura, Mayuki Makiguchi, Daichi Endo, Ryô Iwasaki</a></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="movie_page_sugest">
            <div className="container">
                <div className="line_movie">
                </div>
                <h1>CÓ THỂ BẠN CŨNG MUỐN XEM</h1>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src="./images/jujutsu.jpg" />
                        <div className="movie_icon_sugest">
                            <p>5/10</p>
                        </div>
                        <h2><a href="#1">Jujutsu Kaisen 0: Chú Thuật Hồi Chiến</a></h2>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src='./images/jujutsu.jpg'></img>
                        <div className="movie_icon_sugest">
                        <p>5/10</p>
                        </div>
                        <h2><a href="#1">Jujutsu Kaisen 0: Chú Thuật Hồi Chiến</a></h2>
                        
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src='./images/jujutsu.jpg'></img>
                        <div className="movie_icon_sugest">
                        <p>5/10</p>
                        </div>
                        <h2><a href="#1">Jujutsu Kaisen 0: Chú Thuật Hồi Chiến</a></h2>
                        
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src='./images/jujutsu.jpg'></img>
                        <div className="movie_icon_sugest">
                        <p>5/10</p>
                        </div>
                        <h2><a href="#1">Jujutsu Kaisen 0: Chú Thuật Hồi Chiến</a></h2>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
       ))
    )
}
