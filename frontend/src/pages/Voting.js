import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { VotingContainer, VotingForm, NavigationButton, NavigationInput, YourName } from '../lib/Styling'

export const Voting= () => {
  const history = useHistory()
  const { id } = useParams()
  const [ pollDetails, setPollDetails ] = useState({})
  // const [ name, setName ] = useState('')
  const [ state, setState ] = useState({ voting: [] })
  const POLLDETAILS_URL = `http://localhost:9000/poll/${id}`
  const FINISHED_POLL_URL = `http://localhost:9000/finishedpoll`
  const points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const storePollId = () => {
    setState({
      ...state,
      pollId: id
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    fetch(FINISHED_POLL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(state)
    })
    .then((res) => res.json())
    .then((json) => {
      history.push(`/voting/${id}/results`)
    })
    console.log(state)
  }

  const handleSelect = (event) => {
    setState({
      ...state,
      ...state.voting.push({
        optionId: event.target.name,
        objectionsPoints: event.target.value
      })
    })
  }

  const handleNameInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
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
      <p>
        <i>This is how you vote..</i>
      </p>
      <VotingForm onSubmit={handleSubmit}>
        {pollDetails.pollOptions?.map((item) => (
          <label>{item.text}
              <select 
                onChange={handleSelect} 
                name={item._id}
              >
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
            name='name'
            value={state.example}
            onChange={handleNameInput} 
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