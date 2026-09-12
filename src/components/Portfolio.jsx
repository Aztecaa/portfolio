import React from 'react'
import '../styles/Portfolio.css'
import PortfolioCard from './PortfolioCard'

const cards = [
  {
    id: 1,
    title: "Proyecto 1",
    img: "path/to/image1.jpg",
    url: "https://example.com/project1",
    description: "Descripción del proyecto 1"
  },
  {
    id: 2,
    title: "Proyecto 2",
    img: "path/to/image2.jpg",
    url: "https://example.com/project2",
    description: "Descripción del proyecto 2"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio" className='pt-24 m-auto'>
      <div className='section-color mx-5 flex flex-col rounded-md'>
        <h3 className="text-color1 text-center mt-3">Portafolio</h3>
        <div className="portfolio_container">
          <p className="description">
            Esta seccion muestra los diferentes trabajos que he realizado con las
            diferentes tecnologias anteriormente nombradas
          </p>
          <div className="portfolio-cards">
            {cards.map((card) => (
              <div className="cards" key={card.id}>
                <PortfolioCard
                  title={card.title}
                  img={card.img}
                  url={card.url}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
