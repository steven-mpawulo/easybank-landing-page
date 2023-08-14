import React from 'react'
import Logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header>
<img src={Logo} alt="logo" className='logo' />
<ul>
    <li><a href="#Home">Home</a></li>
    <li><a href="#About">About</a></li>
    <li><a href="#Contact">Contact</a></li>
    <li></li>
    <li></li>
</ul>
    </header>
  )
}

export default Header