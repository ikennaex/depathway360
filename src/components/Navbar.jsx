import React from 'react'
import { pathway360logo } from '../imports'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-div'>
      <div>
        <Link to = "/">
        <img className='logo' src={pathway360logo} alt="" />
        </Link>
      </div>

      <div className='nav-links'>
        <Link to = "/aboutus">
        <p>About Us</p>
        </Link>

        <Link to = "/contact">
        <p>Contact</p>
        </Link>
      </div>

      <div>
        <Link to = "/donate">
        <button className='donate-btn'>Donate</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar