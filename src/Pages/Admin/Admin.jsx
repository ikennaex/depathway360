import React from 'react'
import "./admin.css"
import Blogdisplay from './BlogPost/Blogdisplay'

const Admin = () => {
  return (
    <div className='admin-main'>
      <div className='depathwayadmintxt-div'>
        <p className='depathwayadmin-txt'>De Pathway360 Admin Panel</p>
      </div>

        <div className='admin-innerdiv'>
        <div>
          <p className='adminpage-options'>Blog Posts</p>
          <p className='adminpage-options'>Programs</p>
        </div>

        <div className='divide-div'></div>

        <div>
          <Blogdisplay />
        </div>
        </div>
    </div>
  )
}

export default Admin