import React, { useEffect, useState } from 'react'
import "./blogpage.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { baseUrl } from '../../baseUrl'
import {format} from "date-fns"
import Loader from '../../Loader'


const BlogPage = () => {

  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/publish`)
    .then(response => {
      setPost(response.data)
    })
  }, [])

  return (
    <div className='blogmain-div'>
      <p className='welcomeblog-txt'> Our Blog </p>
      
      <div className='blogbox-maindiv'>
        {post.length > 0 ? post.map((data) => {
          return (
            <div className='blogbox-div'> 
            <Link to = {`/blog/${data._id}`}>
          <img className='blogbox-img' src= {`${baseUrl}`+'/'+ data.image} alt="" />
            <p className='blogbox-title'>{data.title}</p>

            <div className='date-authorinfo'>
            <p>De Pathway360</p>
            <p>
              <time>{format(new Date(data.createdAt), 'MMM d, yyyy HH:mm')}</time>
              </p>
            </div>
            
            </Link>
          </div>
          )
        }) : <Loader />}
      </div>
    </div>
  )
}

export default BlogPage