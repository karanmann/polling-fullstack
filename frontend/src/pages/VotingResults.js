import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'

import { Confettis} from '../components/Confettis'
import { 
  LinkBorderContainer, 
  EachResult,
  ResultContainer
 } from '../lib/Styling'

export const VotingResults= () => {
  const { id } = useParams()

  // const FINISHED_POLLS_URL = `https://systemic-poll-app.herokuapp.com/finishedpoll/${id}`
  // const POLLDETAILS_URL = `https://systemic-poll-app.herokuapp.com/poll/${id}`
  const FINISHED_POLLS_URL = `http://localhost:9000/finishedpoll/${id}`
  const POLLDETAILS_URL = `http://localhost:9000/poll/${id}`
  const [finishedPolls, setFinishedPolls] = useState([])
  const [pollDetails, setPollDetails] = useState ({})

  const handleFailedFetch = (err) => {
    swal({
      title: 'Oh no!',
      text: 'Sorry! We couldn\'t find the poll you were looking for!',
      icon: 'error',
      closeOnClickOutside: 'false',
    })
  }

  useEffect(() => {
    fetch(FINISHED_POLLS_URL)
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
      if (json.finishedPolls.length === 0) {
        swal({
          title: 'Ooops!',
          text: 'No one has voted on your poll yet.',
          icon: 'info',
          closeOnClickOutside: 'false',
        })
      } else {
        setFinishedPolls(json.finishedPolls)
      }
    })
    .catch((err) => handleFailedFetch(err))

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
    })
    .catch((err) => handleFailedFetch(err))

  }, [FINISHED_POLLS_URL, POLLDETAILS_URL])

  
    // First step: build prel to have a data structure like this
    // {
    //   456: [2,5,8],
    //   789: [8,5,1],
    //   523: [7,3,2]
    // }

    const prel = {}
    for (let i = 0; i < finishedPolls.length; i++) {
      finishedPolls[i].voting.forEach(obj => {
        const {pollOptionId, objectionsPoints} = obj
        if (prel[pollOptionId]) {
          prel[pollOptionId].push(objectionsPoints)
       } else {
          prel[pollOptionId] = [objectionsPoints]
       }
      })
    };

    // Second step: build prelAsValuesArray to have a data structure like this
    // [ [456,[2,5,8]], [789, [8,5,1]], [523, [7,3,2]] ]

    const prelAsValuesArray = Object.entries(prel)

    // Third step: build result to have a data structure like this
    // {
    //   456: 15,
    //   789: 14,
    //   523: 12
    // }

    const result = {}
    prelAsValuesArray.map(item => {
     return result[item[0]] = item[1].reduce((a,b) => a + b)
    })

    // Fourth step: Build resultEntries to have a data structure like this
    // [[456,12], [789,14], [523,12]]

    const resultEntries = Object.entries(result)

    resultEntries.sort((a,b) => {
      return a[1] - b[1]
    })

    // In the return statement, map through all the options in the original poll.
    // At the same time, map through the item in resultEntries.
    // If you find a matching option / result-entry, display the option text and the second part (the points) of the result entry.

   
  
  
    return (
    <>
      <ResultContainer>
      <LinkBorderContainer>
          <EachResult>
            <p><b>OPTIONS</b></p> 
            <div className='objectionPoints'>
              <p><b>OBJECTION</b></p>
              <p><b>POINTS</b></p>
            </div>
          </EachResult>
          <br></br>
          {resultEntries.map((pair, index) => {
              return (
                pollDetails.pollOptions?.map((option) => (
                  option._id === pair[0] &&
                      <EachResult 
                      true={index}>
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
