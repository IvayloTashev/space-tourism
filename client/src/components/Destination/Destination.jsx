import React from 'react'
import bgImage from '../../assets/destination/background-destination-desktop.jpg'
import Nav from '../Nav'
import DestinationHero from './DestinationHero'

const Destination = () => {
  return (
    <div
      className="bg-no-repeat h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Nav />
      <DestinationHero />
    </div>
  )
}

export default Destination
