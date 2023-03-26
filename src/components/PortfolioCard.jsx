import React from 'react'

const PortfolioCard = ({ title, img, url, description }) => {
  return (
    <div className="card">
      <div className="card-img"></div>
      <a href={url} target="_BLANK">
        <img src={img} alt="web-capture" />
      </a>
      <div className="card-body">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default PortfolioCard
