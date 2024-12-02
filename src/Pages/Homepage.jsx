import React from 'react'
import "./homepage.css"
import Intro from './Intro'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import HomeGallery from './HomeGallery'

const Homepage = () => {
  return (
    <div className='homepage-div'>
        <Intro />
        <Aboutus />
        <HomeGallery />
        <Contactus />
    </div>
  )
}

export default Homepage