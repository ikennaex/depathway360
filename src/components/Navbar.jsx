import React, { useState } from 'react'
import "./navbar.css"
import { pathway360logo } from '../imports'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <div className='upper-navbar'>
      <div className='menuandlogo'>
        <Link to = "/">
        <img className='logo' src={pathway360logo} alt="" />
        </Link>

        <span onClick={toggleMenu} className = "menu-icon">
        <ion-icon name= {open? "close-outline" : "menu-outline"} ></ion-icon>
        </span>
      </div>
      <div className='navbar-div'>

      <div className= {open? "innerlinks-div" : "innerlinks-diver"}>
      <div className='nav-links'>
        <Link to = "/aboutus">
        <p>About Us</p>
        </Link>

        <Link to = "/contact">
        <p>Contact</p>
        </Link>

        <Link to= '/programs'>
          <p>Programs</p>
        </Link>
      </div>

      <div className='btn-div'>
        <Link to = "/donate">
        <button className='donate-btn'>Donate</button>
        </Link>
      </div>

      </div>
    </div>
    </div>
  )
}

export default Navbar