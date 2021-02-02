import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Table } from '../components/Table'

import { VotingDummy } from '../components/VotingDummy'

export const VotingResults= () => {
  const { id } = useParams()
  const FINISHED_POLLS_URL = `http://localhost:9000/finishedpoll/${id}`
  const POLLDETAILS_URL = `http://localhost:9000/poll/${id}`
  const [finishedPolls, setFinishedPolls] = useState([])
  const [pollDetails, setPollDetails] = useState ({})

  useEffect(
    
    () => {
    fetch(FINISHED_POLLS_URL)
    .then(res => res.json())
    .then((json) => {
      setFinishedPolls(json)
    })
    fetch(POLLDETAILS_URL)
    .then(res => res.json())
    .then((json) => {
      setPollDetails(json)
    })
  }, [FINISHED_POLLS_URL, POLLDETAILS_URL])
  
  

  return (
    <>
      <VotingDummy />
      <p>Total</p>
    </>
  )
}