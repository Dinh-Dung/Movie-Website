import React from 'react'
import "./banner.css"
import MainHeader from '../Header/Navigation'

export default function MainBanner() {
    return (
        <div className="banner-img-color vlv">
        <div className='banner' style={{ backgroundImage: `url(/images/anh_nen.jpg)`}}>
            <div className="banner-img-gradient"></div>
            <MainHeader />
            <div className="container">
                <div className="banner-text">
                    <div>
                        <h2>Unlimited movies, TV<br />shows, and more</h2>
                        <p>Watch anywhere. Cancel anytime.</p>
                        <span className="text-email">
                            <a href='#undefine'>Ready to watch? Enter your email to create or restart your membership</a>
                        </span>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <button type="button" class="btn btn-danger">Get Started <i class="bi bi-chevron-right"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="line"></div>
        </div>
    

             
    )
}
