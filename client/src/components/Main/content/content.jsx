import React from 'react'
import './content.css'

export default function MainContent() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content_text">
              <h1>Have an Android Phone? Get our new free plan!</h1>
              <h2>Watch a selection of new movies and TV shows without adding any payment details!</h2>
              <div className="content_link">
                <a href='#'>Get the app <i class="bi bi-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content_img">
              <img src='./images/img_content_text.jpg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
