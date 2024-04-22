import React from 'react'
import "./aboutus.css"
import { Link } from 'react-router-dom'

const Aboutus = () => {
  return (
    <div className='aboutus-maindiv'>
        <div>
            <p className='aboutus-text'>About Us</p>

            <p>
            Welcome to DePathway360 Empowerment Initiative

            We are DePathway360 Empowerment Initiative, a non-profit, non-political, and non-governmental organization dedicated to fostering growth and positive change. Our passion lies in helping people grow, empowering lives, and commitment to environmental stewardship.

            At DePathway360, we are guided by a vision to inspire hope among the youth through various educational programmes. We believe in facilitating young individuals to reach their full potential, surmount obstacles, and achieve life-changing, society-enhancing goals. Through our charitable initiatives, we uplift both men and women, striving to lift them out of poverty and into a brighter future.
            </p>
        </div>

        <Link to = "/aboutus">
        <button>Read More</button>
        </Link>

    </div>
  )
}

export default Aboutus