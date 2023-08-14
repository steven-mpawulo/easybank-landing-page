import React from 'react'
import Logo from '../../images/logo.svg'
import Facebook from '../../images/icon-facebook.svg'
import Youtube from '../../images/icon-youtube.svg'
import Twitter from '../../images/icon-twitter.svg'
import Pinterest from '../../images/icon-pinterest.svg'
import Instagram from '../../images/icon-instagram.svg'
import Button  from '../../common/button/Button'


const Footer = () => {
  return (
    <footer>
        <div className="footer-first-column">
            <img src={Logo} alt="logo" className='logo' />
            <div className="container-for-icons">
                <img src={Facebook} alt="facebook" />
                <img src={Youtube} alt="youtube" />
                <img src={Twitter} alt="twitter" />
                <img src={Pinterest} alt="pinterest" />
                <img src={Instagram} alt="instagram" />

            </div>
        </div>
        <div className="footer-second-column">
            <ul>
                <li><a href="#About Us">About Us</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#Blog">Blog</a></li>
            </ul>
        </div>
        <div className="footer-third-column">
            <ul>
                <li><a href="#Careers">Careers</a></li>
                <li><a href="#Support">Support</a></li>
                <li><a href="#Privacy Policy">Privacy Policy</a></li>
            </ul>
        </div>
        <div className="footer-fourth-column">
        <Button buttonText={"Request Invite"}/>
        <p>&copy;Easybank. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer