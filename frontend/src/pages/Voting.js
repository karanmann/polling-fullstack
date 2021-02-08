import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'


import { TextField } from '@material-ui/core'
import { 
  VotingContainer, 
  VotingForm, 
  NavigationButton, 
  NavigationInput,
  // VotingButton,
  YourName,
  Select,
  LinkBorderContainer,
  SummaryFormLabel, 
  ButtonContainer,
  VotingTextContainer} from '../lib/Styling'


export const Voting= () => {
  const history = useHistory()
  const { id } = useParams()
  const [ pollDetails, setPollDetails ] = useState({})
  const [ state, setState ] = useState({ voting: [] })

  // const POLLDETAILS_URL = `https://systemic-poll-app.herokuapp.com/poll/${id}`
  // const FINISHED_POLL_URL = `https://systemic-poll-app.herokuapp.com/finishedpoll`
  const POLLDETAILS_URL = `http://localhost:9000/poll/${id}`
  const FINISHED_POLL_URL = `http://localhost:9000/finishedpoll`
  const points = [ "-", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const storePollId = () => {
    setState({
      ...state,
      pollId: id
    })
  }
  
  const handleFailedFetch = err => {
    alert(err)
  }

  const handleFailedPost = err => {
    alert(err)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (state.voting.length < pollDetails.pollOptions.length) {
      alert('Please add a number of objection points to each option.')
    } else {
      fetch(FINISHED_POLL_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(state)
      })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json()
            .then((res) => {
              throw new Error(res.message)
            })
        } 
      })
      .then((json) => {
        history.push(`/voting/${id}/results`)
      })
      .catch((err) => handleFailedPost(err))
      console.log(state)
    }
  }

  const handleSelect = (event) => {
    let itemIndex = null

    state.voting.map((item) => {
      if (item.optionId === event.target.name) {
        itemIndex = state.voting.indexOf(item)
      }
      return itemIndex
    })

    if (itemIndex === null) {
      setState({
        ...state,
        ...state.voting.push({
          optionId: event.target.name,
          objectionsPoints: event.target.value
        })
      })
    } else {
      setState({
        ...state,
        ...state.voting.splice(itemIndex, 1, {
          optionId: event.target.name,
          objectionsPoints: event.target.value
        })
      })
    }

    
  }

  const handleNameInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    fetch(POLLDETAILS_URL)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return res.json()
          .then((res) => {
            throw new Error(res.message)
          })
      }
    })
    .then((json) => {
      setPollDetails(json)
      storePollId()
    })
    .catch((err) => handleFailedFetch(err))
  }, [POLLDETAILS_URL])

  console.log('current poll id', id)
  console.log("polldetails", pollDetails)

  return (
    <VotingContainer>
      <LinkBorderContainer>
        <h1>{pollDetails.pollTopic}</h1>
        <VotingTextContainer>
          <p>
            <i><b>This is how you vote:</b></i>
          </p>
          <ul>
            <p>
              <li>You will vote for every option in the list. "0" means absolutely no resistance — "I have no objection, I support this proposal strongly."</li>
            </p>
            <p>
              <li>"10" means maximum resistance — "I have huge objections, I refuse this proposal heavily."</li>
            </p>
          </ul>
        </VotingTextContainer>
        <NavLink to='/systemicconsensing' style={{ textDecoration: 'none' }}>Read more about the principle behind Systemic consensing.</NavLink>
        <VotingForm onSubmit={handleSubmit}>
          {pollDetails.pollOptions?.map((item) => (
            <SummaryFormLabel>{item.text}
              <Select 
                onChange={handleSelect} 
                name={item._id}
              >
                {points.map((point) => (
                  <option value={point}>{point}</option>
                ))}
              </Select>
            </SummaryFormLabel>
          ))}
          <YourName>
            <p>Your name:</p>
            <TextField
              variant='filled'
              color='primary'
              style={{ margin: 10, maxWidth: 300 }}
              type='text'
              name='name'
              value={state.example}
              onChange={handleNameInput} 
              placeholder='Enter your name ...'
              required>
            </TextField>
          </YourName>
          <ButtonContainer>
            <NavigationInput type='submit' value='Submit your answer and see results'/>
            <NavigationButton>Only see results</NavigationButton>
          </ButtonContainer>
        </VotingForm> 
      </LinkBorderContainer>
    </VotingContainer>
  )
}