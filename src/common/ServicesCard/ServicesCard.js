import React from 'react'
import './servicescard.css'

const ServicesCard = ({icon, title, message }) => {
  return (
    <div className="services-card">
        <img src={icon} alt="icon" className='icon' />
        <h3>{title}</h3>
        <p>{message}</p>
    </div>
  )
}

export default ServicesCard