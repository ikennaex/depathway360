import React from 'react'
import "./programs.css"
import { sendachild } from '../../imports'
import { Link } from 'react-router-dom'

const data = [
    {
        img: sendachild,
        title: "Send A Child to School Project",
        subtitle: "Join the impactful mission of De Pathway360 Empowerment Initiative as we drive change through our scholarship project, Send A Child to School. This initiative is a lifeline for vulnerable, less privileged, downtrodden, and hopeless children in Nigeria who are denied the basic right to education.",
    }, 

]

const Programs = () => {
  return (
    <div className='programs-maindiv'>
        <p className='program-introtxt'>Our Programs </p>

        {data.map((data) => {
            return (

        <Link to = "/programs/sendachildtoschoolproject">
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
  )
}

export default Programs