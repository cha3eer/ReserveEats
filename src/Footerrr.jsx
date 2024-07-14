import React from 'react'
import './Footerrr.css'


const Footerrr = () => {
  return (
    <div>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h4>Contact Us:</h4>
          <li><a href="tel:+201091003211"  className="call-us">Call Us</a></li>
            <li><a href="mailto:abdelrahmaanelshaeer@yahoo.com"  className="call-us">Email</a></li>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footerrr
