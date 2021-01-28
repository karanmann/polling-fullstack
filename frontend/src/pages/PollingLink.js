import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@material-ui/core'

import {  HeaderPoll, Container } from '../lib/Styling'
import { useSelector, useDispatch } from 'react-redux'

import { poll } from '../reducer/poll'

export const PollingLink= () => {
  const dispatch = useDispatch()
  const pollId = useSelector((store) => store.poll.pollId) // change if we solve the nesting problem
  const url = `http://localhost:3000/voting/${pollId}`

  const resetState = () => {
    dispatch(poll.actions.setPollTopic({ topic: ''}))
    dispatch(poll.actions.setPollId(null))
    dispatch(poll.actions.setPollOptions({ options: [] }))
  }

  return (
    <Container>
      <HeaderPoll>Tadaa your link</HeaderPoll>
      <p>{url}</p>
      <Button variant='contained' color='secondary'>Copy Link</Button>
      <Link to='/'>
        <Button onClick={resetState} variant='contained' color='primary'>Back to Start Page</Button>
      </Link>
    </Container>
  )
}