import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <a href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw"><i class="icon" className="fab fa-youtube footer-icon"></i></a>
        <a href="https://www.facebook.com/NetflixIndia"><i class="icon" className="fab fa-facebook-f footer-icon"></i></a>
        <a href="https://twitter.com/NetflixIndia"><i class="icon" className="fab fa-twitter footer-icon"></i></a>
        <a href="https://www.instagram.com/netflix_in/?hl=en"><i class="icon" className="fab fa-instagram footer-icon"></i></a>
      </div>
      <ul>
        <a href="#"><li>Audio and Subtitles</li></a>
        <a href="#"><li>Help Center</li></a>
        <a href="#"><li>Gift Cards</li></a>
        <a href="#"><li>Media Center</li></a>
        <a href="#"><li>Investor Relations</li></a>
        <a href="#"><li>Jobs</li></a>
        <a href="#"><li>Terms of Use</li></a>
        <a href="#"><li>Privacy</li></a>
        <a href="#"><li>Legal Notices</li></a>
        <a href="#"><li>Cookies</li></a>
        <a href="#"><li>Corporate Information</li></a>
        <a href="#"><li>Contact Us</li></a>
      </ul>
      <div className='copyright'>
        <b>Netflix India</b>
        <p>© 2023 Netflix Clone. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer