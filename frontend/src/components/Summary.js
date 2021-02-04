import React from 'react'
/* import { useSelector } from 'react-redux' */
import { 
  SummaryContainer, 
  SummaryForm,
  SummaryFormLabel,
  Select 
  } from '../lib/Styling'

export const Summary = ({allOptions, pollTopic}) => {
  const points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <SummaryContainer>
      <p><i>This is what your poll will look like :</i></p>
      <h3>{pollTopic}</h3>
      <SummaryForm>
        {allOptions.map((item) => (
          <SummaryFormLabel>{item.text}
            <Select>
              {points.map((point) => (
                <option value={point}>{point}</option>
              ))}
            </Select>
          </SummaryFormLabel>
        ))}
      </SummaryForm>
    </SummaryContainer>
  )
}