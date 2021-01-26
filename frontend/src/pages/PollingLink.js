import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { poll } from '../reducer/poll'

export const PollingLink= () => {
  const pollId = useSelector((store) => store.poll.pollId.pollId) // change if we solve the nesting problem
  const url = `http://localhost:3000/voting/${pollId}`
  return (
    <>
      <h1>Tadaa your link</h1>
      <p>{url}</p>
       {/* <a href="#">www.example.com/yourlink</a> */}
      <button>Copy Link</button>
      <Link to='/'>
        <button>Back to Start Page</button>
      </Link>
    </>
  )
}