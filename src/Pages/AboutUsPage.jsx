import React from 'react'
import "./aboutuspage.css"
import { organs } from "../imports";

const AboutUsPage = () => {
  return (
    <div className='aboutus-maindiv'>
        <div className='about-div'>
            <p className='aboutuspageheader-txt'>About Us</p>
            <p className='about-us-p'>
            Welcome to De Pathway360 Empowerment Initiative

            We are De Pathway360 Empowerment Initiative, a non-profit, non-political, and non-governmental organization dedicated to fostering growth and positive change. Our passion lies in helping people grow, empowering lives, and commitment to environmental stewardship.

            At De Pathway360, we are guided by a vision to inspire hope among the youth through various educational programmes. We believe in facilitating young individuals to reach their full potential, surmount obstacles, and achieve life-changing, society-enhancing goals. Through our charitable initiatives, we uplift both men and women, striving to lift them out of poverty and into a brighter future.

            In addition to our focus on individual empowerment, DePathway360 is committed to promoting attitudinal shifts and advocating a cleaner, safer environment. Our advocacy programs aim to raise awareness and foster a culture of environmental consciousness.

            We invite you to partner with DePathway360 Empowerment Initiative today. Together, we can make a tangible difference in lives, improve living conditions, and cultivate a greater sense of environmental responsibility in our communities.

            Consider donating to support our worthy cause today and contribute to positive change.

            <p className='aboutuspageheader-txt'>The Organs</p>
            <p>
            The Organs

            Our organization has three main organs: the Board of Trustees, Advisory Board, and Management.

            The Board of Trustees and Advisory Board of DePathway360 Empowerment Initiative comprises seven members, including three females and four males. This board serves as the organization's decision-making body, convening annually to assess performance, approve programs, and establish budgets.

            The Management team oversees the execution of decisions and manages the day-to-day operations. This team is led by the Executive Director (ED), who is also a member of the Board. Additionally, the Management includes the Project Implementation Body and Support Staff, ensuring effective implementation and support for our initiatives.
            </p>
            </p>


            <div className='organ-container'>
            <img className='organ-img' src= {organs} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutUsPage