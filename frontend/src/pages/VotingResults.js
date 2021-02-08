import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { Confettis} from '../components/Confettis'
import { 
  LinkBorderContainer, 
  EachResult,
  ResultContainer
 } from '../lib/Styling'

export const VotingResults= () => {
  const { id } = useParams()
  const FINISHED_POLLS_URL = `https://systemic-poll-app.herokuapp.com/finishedpoll/${id}`
  const POLLDETAILS_URL = `https://systemic-poll-app.herokuapp.com/poll/${id}`
  const FINISHED_POLLS_URL = `http://localhost:9000/finishedpoll/${id}`
  const POLLDETAILS_URL = `http://localhost:9000/poll/${id}`
  const [finishedPolls, setFinishedPolls] = useState([])
  const [pollDetails, setPollDetails] = useState ({})

  useEffect(() => {
    fetch(FINISHED_POLLS_URL)
    .then(res => res.json())
    .then((json) => {
      setFinishedPolls(json.finishedPolls)
      console.log(finishedPolls)
    })
    fetch(POLLDETAILS_URL)
    .then(res => res.json())
    .then((json) => {
      setPollDetails(json)
      console.log(pollDetails)
    })

  }, [FINISHED_POLLS_URL, POLLDETAILS_URL])

  console.log(finishedPolls)
  console.log(pollDetails)
  
  // // First step: build prel to look like this
  //   // {
  //   //   456: [2,5,8],
  //   //   789: [8,5,1],
  //   //   523: [7,3,2]
  //   // }

    const prel = {}
    for (let i = 0; i < finishedPolls.length; i++) {
      console.log('loop running', i)
      finishedPolls[i].voting.forEach(obj => {
        const {optionId, objectionsPoints} = obj
        if (prel[optionId]) {
          prel[optionId].push(objectionsPoints)
       } else {
          prel[optionId] = [objectionsPoints]
       }
      })
    };
    
    console.log(prel)
  
    // console.log(prel)

    // Second step: build prelAsValuesArray to look like this
    // [ [456,[2,5,8]], [789, [8,5,1]], [523, [7,3,2]] ]

    const prelAsValuesArray = Object.entries(prel)

     // Third step: build result to look like this
    // {
    //   456: 15,
    //   789: 14,
    //   523: 12
    // }

    const result = {}
    prelAsValuesArray.map(item => {
     return result[item[0]] = item[1].reduce((a,b) => a + b)
    })
    console.log(result)

    // Fourth step: Build resultEntries to look like this
    // [[456,12], [789,14], [523,12]]

    const resultEntries = Object.entries(result)
    console.log(resultEntries)

    // In the return statement, map through all the options in the original poll.
    // At the same time, map through the item in resultEntries.
    // If you find a matching option / result-entry, display the option text and the second part (the points) of the result entry.

  return (
    <>
      <ResultContainer>
        <LinkBorderContainer>
            <EachResult>
              <p><b>OPTIONS</b></p> 
              <p><b>TOTAL</b></p>
            
            </EachResult>
            {pollDetails.pollOptions?.map((option) => {
                return (
                  resultEntries.map((pair) => (
                    option._id === pair[0] &&
                      <EachResult>
                        <p>{option.text}</p> 
                        <p>{pair[1]}</p>
                      </EachResult>
                      
                  ))
                )
            })}
        </LinkBorderContainer>  
      </ResultContainer>
      <Confettis />
    </>
  )
}