import React from 'react'
import Nav from '../Nav'
import TechnologyHero from './TechnologyHero'
import bgImage from '../../assets/technology/background-technology-desktop.jpg'

const Technology = () => {
  return (
    <div
    className="min-h-[1024px] min-w-[1440px] bg-no-repeat bg-cover"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <Nav />
    <TechnologyHero />
  </div>
  )
}

export default Technology
