import React from 'react'
import "./homepage.css"
import Intro from './Intro'
import Aboutus from './Aboutus'
import Gallery from './Gallery'

const Homepage = () => {
  return (
    <div className='homepage-div'>
        <Intro />
        <Aboutus />
        <Gallery />
    </div>
  )
}

export default Homepage