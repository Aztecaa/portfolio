import React from 'react'
import '../styles/Portfolio.css'
import PortfolioCard from './PortfolioCard'
import weatherPag from '../assets/portfolio/WeatherPag.png'
import rickMortyPag from '../assets/portfolio/RickandMortypag.png'
import PokedexPag from '../assets/portfolio/PokedexPag.png'

const cards = [
  {
    id: 1,
    title: 'Weather app',
    img: weatherPag,
    url: 'https://weatherpagignesc.netlify.app/',
    description: 'Pagina para ver el clima utilizando axios oara consumir una API'
  },
  {
    id: 2,
    title: 'Rick & Morty Locations',
    img: rickMortyPag,
    url: 'https://rickandmortypag.netlify.app/',
    description: 'Pagina para buscar distintos planetas y dimensiones del universo de Rick y Morty, utilizando axios para consumir una API'
  },
  {
    id: 3,
    title: 'Pokedex Page',
    img: PokedexPag,
    url: 'https://pokedexignaesc.netlify.app/',
    description: 'Pokedex para clasificar por tipo, buscar por id o nombre, utilizando Redux, React Router y axios para consumir la API'
  },
]

console.log(cards)

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="flicker">Portafolio</h2>
      <p className="description">
        Esta seccion muestra los diferentes trabajos que he realizado con las
        diferentes tecnologias anteriormente nombradas
      </p>
      <div>
        {cards.map((card) => (
          <div className="cards" key={card.id}>
            <PortfolioCard title={card.title} img={card.img} url={card.url} description={card.description}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
