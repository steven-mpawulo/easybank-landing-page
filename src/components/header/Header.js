import React from 'react'
import Logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header>
<img src={Logo} alt="logo" className='logo' />
<nav>
<ul>
    <li><a href="#Home">Home</a></li>
    <li><a href="#About">About</a></li>
    <li><a href="#Contact">Contact</a></li>
    <li><a href="#Blog">Blog</a></li>
    <li><a href="#Careers">Careers</a></li>
</ul>
</nav>
    </header>
  )
}

export default Header