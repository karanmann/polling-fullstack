import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Voting= () => {
  const { id } = useParams()
  const [ pollDetails, setPollDetails ] = useState({})
  const POLLDETAILS_URL = `http://localhost:9000/poll/${id}`
  const points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


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
      <h1>{pollDetails.pollTopic}</h1>
      <form>
        {pollDetails.pollOptions?.map((item) => (
          <label>{item.text}
              <select>
                {points.map((point) => (
                  <option value={point}>{point}</option>
                ))}
              </select>
            </label>
        ))}
      </form>
      <button>Submit your answer and see results</button>
      <button>Only see results</button>
    </>
  )
}