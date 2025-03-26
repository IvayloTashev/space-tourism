import React from 'react'
import bgImage from '../../assets/destination/background-destination-desktop.jpg'
import Nav from '../Nav'
import DestinationHero from './DestinationHero'

const Destination = () => {
  return (
    <div
      className="min-h-[1024px] min-w-[1440px] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Nav />
      <DestinationHero />
    </div>
  )
}

export default Destination
