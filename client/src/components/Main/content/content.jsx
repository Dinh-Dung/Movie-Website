import React from 'react'
import './content.css'

export default function MainContent() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="content_text ">
              <h1>Have an Android Phone? Get our new free plan!</h1>
              <h2>Watch a selection of new movies and TV shows without adding any payment details!</h2>
              <div className="content_link">
                <a href='#undefine'>Get the app <i className="bi bi-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="content_img ">
              <img src='./images/img_content_text.jpg' />
            </div>
          </div>
        </div>

      </div>
      <div className="line"></div>
      <div className="content_tv">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content_text">
              <h1>Enjoy on your TV.</h1>
              <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content_img">
              <img className="content_img_card" src='./images/tv.png' />
              <div className="content_video">
                <div>
                  <iframe className="embed-responsive-item" src="./video/video-tv-0819.m4v? autoPlay=1&loop=1&controls=0 "></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="line"></div>
      <div className="content_watch">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content_text">
              <h1>Watch everywhere.</h1>
              <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
            </div>  
          </div>
          <div className="col-md-6"></div>  
        </div>
      </div>
      </div>
      <div className="line"></div>
      <div className="content_create">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content_img">
              <img src='./images/kids.png'></img>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content_text">
              <h1>Create profiles for kids.</h1>
              <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
