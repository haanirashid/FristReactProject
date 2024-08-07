import React from 'react'
import './Contact.css'
import {Link} from 'react-router-dom'
const Contact = () => {
  return (
    <>
    <div className="main">
        <div className="container">
            <div className="top">
                <h1>Contact Page</h1>
            </div>
            <div className="bottom">
                <Link to='/Contact/Email'>Email</Link>
                <Link to='/Contact/Number'>Number</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact