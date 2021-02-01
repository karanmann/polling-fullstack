import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { voting } from '../reducer/voting'
import { VotingContainer, VotingForm, NavigationButton, NavigationInput, YourName, InputOptions } from '../lib/Styling'

export const Voting= () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [ pollDetails, setPollDetails ] = useState({})
  const [ name, setName ] = useState('')
  const POLLDETAILS_URL = `http://localhost:9000/poll/${id}`
  const points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const storePollId = () => {
    dispatch(voting.actions.addPollId(id))
  }

  const handleSubmit = () => {
    dispatch(voting.actions.addName(name))
  }

  useEffect(() => {
    fetch(POLLDETAILS_URL)
    .then(res => res.json())
    .then((json) => {
      setPollDetails(json)
      storePollId()
    })
  }, [POLLDETAILS_URL])

  console.log('current poll id', id)
  console.log("polldetails", pollDetails)

  return (
    <VotingContainer>
      <h1>{pollDetails.pollTopic}</h1>
      <VotingForm onSubmit={handleSubmit}>
        {pollDetails.pollOptions?.map((item) => (
          <label>{item.text}
              <select>
                {points.map((point) => (
                  <option value={point}>{point}</option>
                ))}
              </select>
            </label>
        ))}
        <YourName>
          <p>Your name:</p>
          <input
            type='text'
            value={name}
            onChange={event => setName(event.target.value)} 
            placeholder='Enter your name ...'
            required>
          </input>
        </YourName>
        <NavigationInput type='submit' value='Submit your answer and see results'/>
      </VotingForm>
      <NavigationButton>Only see results</NavigationButton>
    </VotingContainer>
  )
}