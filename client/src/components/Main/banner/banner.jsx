import React from 'react'
import "./banner.css"
import MainHeader from '../Header/Navigation'

export default function MainBanner() {
    return (
        <div className='banner' style={{ backgroundImage: `url(/images/anh_nen.jpg)`}}>
            <MainHeader />
            <div className="container">
                <div className="banner-text">
                    <div>
                        <h2>Unlimited movies, TV<br />shows, and more</h2>
                        <p>Watch anywhere. Cancel anytime.</p>
                        <div>
                            <a>Ready to watch? Enter your email to create or restart your membership</a>
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
