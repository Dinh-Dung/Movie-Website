import React from 'react'
import './movie.css'

export default function Movie() {
    return (
        <>
        <div className="movie_page">
            <div className="movie_play">
                <div className="container">
                    <div class="embed-responsive embed-responsive-21by9"   >
                         
                        <iframe class="embed-responsive-item"  src="./video/Naruto_HD.mp4" ></iframe>
                    </div>
                </div>
            </div>
            <div className="movie_page_cd">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="movie_page_img">
                                <img src='./images/naruto_toathap.jpg' />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="movie_page_text">
                                <h1>Naruto: Tòa tháp bị mất</h1>
                                <h2>Naruto Shippuuden Movie 4: The Lost Tower (2010)</h2>
                                <div className="movie_icon">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star"></i>
                                    <a> <i class="bi bi-tag"></i>
                                        Phim lẻ
                                    </a>
                                    <a><i class="bi bi-clock"></i>
                                        25/12/2019
                                    </a>
                                </div>
                                
                                <div className="movie_pg_information">
                                    <p>Trạng Thái: Hoàn tất</p>
                                    <p>Thời lượng: 85 phút</p>
                                    <p>Số tập: Chưa rõ</p>
                                    <p>Năm sản xuất: <a href='#1'>2010</a></p>
                                    <p>Quốc gia: <a href='#2'>Nhật Bản</a> </p>
                                    <p>Thể loại: <a href='#3'>Hành Động, Hoạt Hình, Phiêu Lưu</a> </p>
                                    <p>Đạo diễn: <a href='#4'>Masahiko Murata</a></p>
                                    <p>Diễn viên: <a href='#5'>Junko Takeuchi, Chie Nakamura, Rikiya Koyama, Saori Hayami, Satoshi Hino, Nobuaki Fukuda, Kenji Hamada, Keiko Nemoto, Yumi Tôma, Yûko Kobayashi, Fujiko Takimoto, Mutsumi Tamura, Mayuki Makiguchi, Daichi Endo, Ryô Iwasaki</a></p>
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
                            <img src='./images/jujutsu.jpg'></img>
                            <div className="movie_icon_sugest">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            <h2><a href="#1">Jujutsu Kaisen 0: Chú Thuật Hồi Chiến</a></h2>
                            <p>Jujutsu Kaisen 0 Movie (2021)</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <img src='./images/jujutsu.jpg'></img>
                            <div className="movie_icon_sugest">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            <h2><a href="#1">Jujutsu Kaisen 0: Chú Thuật Hồi Chiến</a></h2>
                            <p>Jujutsu Kaisen 0 Movie (2021)</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <img src='./images/jujutsu.jpg'></img>
                            <div className="movie_icon_sugest">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            <h2><a href="#1">Jujutsu Kaisen 0: Chú Thuật Hồi Chiến</a></h2>
                            <p>Jujutsu Kaisen 0 Movie (2021)</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <img src='./images/jujutsu.jpg'></img>
                            <div className="movie_icon_sugest">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            <h2><a href="#1">Jujutsu Kaisen 0: Chú Thuật Hồi Chiến</a></h2>
                            <p>Jujutsu Kaisen 0 Movie (2021)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
