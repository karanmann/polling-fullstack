import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Table } from '../components/Table'

export const Voting= () => {
  const { id } = useParams()
  const [ pollDetails, setPollDetails ] = useState({})
  const POLLDETAILS_URL = `http://localhost:9000/poll/${id}`

  useEffect(() => {
    fetch(POLLDETAILS_URL)
    .then(res => res.json())
    .then((json) => {
      setPollDetails(json)
    })
  }, [POLLDETAILS_URL])

  console.log('current poll id', id)
  console.log("polldetails", pollDetails)

  return (
    <>
      <Table />
      <button>Submit your answer and see results</button>
      <button>Only see results</button>
    </>
  )
}