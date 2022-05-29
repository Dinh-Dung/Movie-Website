import React from 'react'
import './movie.css'

export default function Movie() {
    return (
        <>
        <div className="movie_page">
            <div className="movie_play">
                <div className="container">
                    <div className="embed-responsive embed-responsive-21by9"   >  
                        <iframe className="embed-responsive-item"  src="./video/Naruto_HD.mp4" ></iframe>
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
                                <h1>Naruto Shippuuden Movie 4: The Lost Tower (2010)</h1>
                                <div className="movie_icon">
                                <p>5/10</p>
                                    <a> <i className="bi bi-tag"></i>
                                        Phim lẻ
                                    </a>
                                    <a><i className="bi bi-clock"></i>
                                        25/12/2019
                                    </a>
                                </div>
                                
                                <div className="movie_pg_information">
                                    <p>Thời lượng: 85 phút</p>
                                    <p>Số tập: Chưa rõ</p>
                                    <p>Năm sản xuất: <a href='#1'>2010</a></p>
                                    <p>Quốc gia: <a href='#2'>Nhật Bản</a> </p>
                                    <p>Thể loại: <a href='#3'>Hoạt Hình</a> </p>
                                    <p>Đạo diễn: <a href='#4'>Masahiko Murata</a></p>
                                    <p>Mô tả: Được giao nhiệm vụ một để đi bắt Mukade, một missing-nin ( ninja bỏ trốn ). Uzumaki Naruto đc sắp đặt vào di tích lịch sử vẻ vang đã bị tàn phá: Ouran, nơi Naruto truy đuổi các ninja đang làm việc cho Mukade và Mukade. Mục tiêu của Mukade đã được tiết lộ là để có một leyline hoạt động bên trong những sự tàn phá và hắn sẽ giải phóng sức mạnh của leyline, gây ra một ánh sáng để bao bọc Naruto và gửi Nar vào quá khứ, 20 năm trước khi mọi chuyện bắt đầu. Khi Naruto thức dậy trong quá khứ, Nar đã đc tiếp xúc, nói chuyện và chiến đấu cùng Người Cha Vĩ Đại, Hokage Đệ Tứ, Namikaze</p>
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
        </>
    )
}
