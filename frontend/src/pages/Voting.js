import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import swal from 'sweetalert'


import { TextField } from '@material-ui/core'
import { 
  VotingContainer, 
  VotingForm, 
  NavigationButton, 
  NavigationInput,
  VotingP,
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


/*   const POLLDETAILS_URL = `https://systemic-poll-app.herokuapp.com/poll/${id}`
  const FINISHED_POLL_URL = `https://systemic-poll-app.herokuapp.com/finishedpoll` */
  const POLLDETAILS_URL = `http://localhost:9000/poll/${id}`
  const FINISHED_POLL_URL = `http://localhost:9000/finishedpoll`
  const points = ["-", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const storePollId = () => {
    setState({
      ...state,
      pollId: id
    })
  }
  
  const handleFailedFetch = err => {
    swal({
      title: 'Oh no!',
      text: 'Sorry! We couldn\'t find the poll you were looking for!',
      icon: 'error',
      closeOnClickOutside: 'false',
    })
  }

  const handleFailedPost = err => {
    swal({
      title: 'Oh no!',
      text: 'We couldn\'t send your voting. Make sure to add your name and a number of objection points to each option.',
      icon: 'error',
      closeOnClickOutside: false,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (state.voting.length < pollDetails.pollOptions.length) {
      swal({
        title: 'All complete?',
        text: 'Please make sure to add a number of objection points to each option.',
        icon: 'info',
        closeOnClickOutside: 'false',
      })
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
    }
  }

const handleResults = () => {
  history.push(`/voting/${id}/results`)
}

  const handleSelect = (event) => {
    let itemIndex = null

    state.voting.map((item) => {
      if (item.pollOptionId === event.target.name) {
        itemIndex = state.voting.indexOf(item)
      }
      return itemIndex
    })

    if (itemIndex === null) {
      setState({
        ...state,
        ...state.voting.push({
          pollOptionId: event.target.name,
          objectionsPoints: event.target.value
        })
      })
    } else {
      setState({
        ...state,
        ...state.voting.splice(itemIndex, 1, {
          pollOptionId: event.target.name,
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

  return (
    <VotingContainer>
      <LinkBorderContainer>
        <VotingP><b>{pollDetails.pollTopic}</b></VotingP>
        <VotingTextContainer>
          <div className='voting-text-top'>
            <p>
              <i><b>This is how you vote:</b></i>
            </p>
            <ul >
              <p>
                <li className='bullet'>You will vote for every option in the list.</li>
              </p>
              <p>
                <li className='bullet'>"0" means absolutely no resistance — "I have no objection, I support this proposal strongly."</li>
              </p>
              <p>
                <li className='bullet'>"10" means maximum resistance — "I have huge objections, I refuse this proposal heavily."</li>
              </p>
            </ul>
          </div>
          
        </VotingTextContainer>
        <NavLink to='/systemicconsensing' style={{ textDecoration: 'none' }}>Read more about Systemic consensing.</NavLink>
        <VotingForm onSubmit={handleSubmit}>
          {pollDetails.pollOptions?.map((item) => (
            <SummaryFormLabel key={item._id}>
              <p className='summary-form-label-text'>
                {item.text}
              </p>
              <Select 
                onChange={handleSelect} 
                name={item._id}
              >
                {points.map((point) => (
                  <option 
                    value={point}
                    key={point}>
                    {point}
                  </option>
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
              onChange={handleNameInput} 
              placeholder='Enter your name ...'
              required>
            </TextField>
          </YourName>
          <ButtonContainer>
            <NavigationInput type='submit' value='Submit and see results'/>
          </ButtonContainer>
        </VotingForm>
        <NavigationButton onClick={handleResults}>Only see results</NavigationButton> 
      </LinkBorderContainer>
    </VotingContainer>
  )
}