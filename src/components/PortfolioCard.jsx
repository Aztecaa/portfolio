import React from 'react'

const PortfolioCard = ({ title, img, url , description}) => {
  return (
    <div className="card">
      <a href={url} target="_BLANK">
        <img src={img} alt="" />
      </a>
      <div className="card-body">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default PortfolioCard
