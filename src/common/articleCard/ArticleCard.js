import React from 'react'

const ArticleCard = ({image, author, title, message, }) => {
  return (
    <div>
        <img src={image} alt="article" />
        <p>By {author}</p>
        <h3>{title}</h3>
        <p>{message}</p>
    </div>

  )
}

export default ArticleCard