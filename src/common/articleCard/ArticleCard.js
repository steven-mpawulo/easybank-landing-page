import React from 'react'
import './articlecard.css'

const ArticleCard = ({image, author, title, message, }) => {
  return (
    <div className='article-card'>
        <img src={image} alt="article" className='article-image'/>
        <p>By {author}</p>
        <h3>{title}</h3>
        <p>{message}</p>
    </div>

  )
}

export default ArticleCard