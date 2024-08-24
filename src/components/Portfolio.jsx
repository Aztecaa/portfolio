import React from 'react'
import '../styles/Portfolio.css'
import PortfolioCard from './PortfolioCard'
import weatherPag from '../assets/portfolio/WeatherPag.jpg'
import rickMortyPag from '../assets/portfolio/RickandMortypag.jpg'
import PokedexPag from '../assets/portfolio/PokedexPag.jpg'

const cards = [
  {
    id: 1,
    title: 'Weather app',
    img: weatherPag,
    url: 'https://weatherpagignesc.netlify.app/',
    description:
      'Pagina para ver el clima utilizando axios para consumir una API',
  },
  {
    id: 2,
    title: 'Rick & Morty Locations',
    img: rickMortyPag,
    url: 'https://rickandmortypag.netlify.app/',
    description:
      'Pagina para buscar distintos planetas y dimensiones del universo de Rick y Morty, utilizando axios para consumir una API',
  },
  {
    id: 3,
    title: 'Pokedex Page',
    img: PokedexPag,
    url: 'https://pokedexignaesc.netlify.app/',
    description:
      'Pokedex para clasificar por tipo, buscar por id o nombre, utilizando Redux, React Router y axios para consumir la API',
  },
]

console.log(cards)

const Portfolio = () => {
  return (
    <section id="portfolio" className='pt-24 m-auto'>
      <div className='section-color mx-5 p-5 flex flex-col rounded-md'>
        <h3 className="text-color1 text-center mb-3">Portafolio</h3>
        <div className="portfolio_container">
          <p className="description">
            Esta seccion muestra los diferentes trabajos que he realizado con las
            diferentes tecnologias anteriormente nombradas
          </p>
          <div className="porfolio-cards">
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
