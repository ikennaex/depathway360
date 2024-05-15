import React from 'react'
import "./blogpage.css"
import { Link } from 'react-router-dom'

const blogData = [
  
  {
    id: 1,
    img: "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veritatis atque voluptate?",
    date: "20th December 2024",
    author: "De Pathway360"
  },
  
  {
    id: 2,
    img: "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veritatis atque voluptate?",
    date: "20th December 2024",
    author: "De Pathway360"
  },
  
  {
    id: 3,
    img: "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veritatis atque voluptate?",
    date: "20th December 2024",
    author: "De Pathway360"
  },
  
  {
    id: 4,
    img: "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veritatis atque voluptate?",
    date: "20th December 2024",
    author: "De Pathway360"
  },
  
  {
    id: 5,
    img: "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veritatis atque voluptate?",
    date: "20th December 2024",
    author: "De Pathway360"
  },
  
  {
    id: 6,
    img: "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veritatis atque voluptate?",
    date: "20th December 2024",
    author: "De Pathway360"
  },
]

const BlogPage = () => {
  return (
    <div className='blogmain-div'>
      <p className='welcomeblog-txt'> Our Blog </p>
      
      <div className='blogbox-maindiv'>
        {blogData.map((data) => {
          return (
            <div className='blogbox-div'> 
            <Link to = "/blog/blogid">
          <img className='blogbox-img' src= {data.img} alt="" />
            <p className='blogbox-title'>{data.title}</p>

            <div className='date-authorinfo'>
            <p>De Pathway360</p>
            <p>March 20, 2024</p>
            </div>
            
            </Link>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlogPage