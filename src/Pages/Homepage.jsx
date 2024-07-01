import React from 'react'
import "./homepage.css"
import Intro from './Intro'
import Aboutus from './Aboutus'
import Gallery from './Gallery'
import Boardmembers from "./Boardmembers/Boardmembers"

const Homepage = () => {
  return (
    <div className='homepage-div'>
        <Intro />
        <Aboutus />
        <Boardmembers />
        <Gallery />
    </div>
  )
}

export default Homepage