import React from 'react'

const Loader = () => {
    return (
        <div>
        <svg className='svg-spinner' viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
            <p>Loading, Please wait...</p>
        </div>
    )
}

export default Loader