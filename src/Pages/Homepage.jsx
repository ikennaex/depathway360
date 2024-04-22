import React from 'react'
import "./homepage.css"
import Intro from './Intro'
import Aboutus from './Aboutus'

const Homepage = () => {
  return (
    <div className='homepage-div'>
        <Intro />
        <Aboutus />
    </div>
  )
}

export default Homepage