import React from 'react'
import './style.css'

export default function index() {
  return (
    <div className='Banner'>
      <div className="container">
        <h2>Unlimited movies, TV<br/>shows, and more</h2>
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
  )
}
