import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const PollingLink= () => {
  return (
    <>
      <h1>Tadaa your link</h1>
      <p>www.example.com/yourlink</p>
       {/* <a href="#">www.example.com/yourlink</a> */}
      <button>Copy Link</button>
      <Link to='/'>
        <button>Back to Start Page</button>
      </Link>
    </>
  )
}