import React from 'react'
import "./programs.css"
import { sendachild, actofkindness } from '../../imports'
import { Link } from 'react-router-dom'

const data = [
    {
        id: 1,
        img: sendachild,
        title: "Send A Child to School Project",
        subtitle: "Join the impactful mission of De Pathway360 Empowerment Initiative as we drive change through our scholarship project, Send A Child to School. This initiative is a lifeline for vulnerable, less privileged, downtrodden, and hopeless children in Nigeria who are denied the basic right to education.",
        link: "/programs/sendachildtoschoolproject",
    },

    {
        id: 2,
        img: actofkindness,
        title: "Acts of Kindness Projects",
        subtitle: "In line with the De Pathway360 Empowerment Initiative’s objectives of instilling hope and empowering lives, the Acts of Kindness Projects were launched. The project encapsulates elements of our strategic pillars, objectives, and core values, and it is aimed... ",
        link: "/programs/actofkindness"
    }, 

]

const Programs = () => {
  return (
    <div className='programs-maindiv'>
        <p className='program-introtxt'>Our Programs </p>

        <div className='programflex-div'>
        {data.map((data) => {
            return (

        <Link to = {data.link} >
        <div className='programlist-div'>
            <div>
                <img className='program-img' src= {data.img} alt="" />
            </div>

            <div>
                <p className='programs-title'>{data.title}</p>
                <p className='program-subtitle'>{data.subtitle}</p>
            </div>
        </div>
        </Link>
            )
        })}
        </div>
    </div>
  )
}

export default Programs