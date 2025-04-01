import React from 'react'
import Nav from '../Nav'
import TechnologyHero from './TechnologyHero'
import bgImage from '../../assets/technology/background-technology-desktop.jpg'

const Technology = () => {
  return (
    <div
    className="bg-no-repeat h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <Nav />
    <TechnologyHero />
  </div>
  )
}

export default Technology
