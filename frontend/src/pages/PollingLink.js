import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@material-ui/core'

import {  HeaderPoll, Container } from '../lib/Styling'
import { useSelector } from 'react-redux'

import { poll } from '../reducer/poll'

export const PollingLink= () => {
  const pollId = useSelector((store) => store.poll.pollId) // change if we solve the nesting problem
  const url = `http://localhost:3000/voting/${pollId}`
  return (
    <Container>
      <HeaderPoll>Tadaa your link</HeaderPoll>
      <p>{url}</p>
      <Button variant='contained' color='secondary'>Copy Link</Button>
      <Link to='/'>
        <Button variant='contained' color='primary'>Back to Start Page</Button>
      </Link>
    </Container>
  )
}