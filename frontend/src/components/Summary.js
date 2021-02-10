import React from 'react'

import { 
  SummaryContainer, 
  SummaryForm,
  SummaryFormLabel,
  Select,
  VotingTextContainer,
  VotingP,
  VotingPI 
  } from '../lib/Styling'

export const Summary = ({allOptions, pollTopic}) => {
  const points = ["-", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <SummaryContainer>
      <VotingPI><i>This is what your poll will look like :</i></VotingPI>
      <VotingP><b>{pollTopic}</b></VotingP>
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
      <SummaryForm>
        {allOptions.map((item) => (
          <SummaryFormLabel key={item.optionId}>
            <>
              <p className='summary-text'>{item.text}</p>
              <Select>
                {points.map((point) => (
                  <option 
                    value={point}
                    key={point}
                    disabled>
                    {point}
                  </option>
                ))}
              </Select>
            </>
          </SummaryFormLabel>
        ))}
      </SummaryForm>
    </SummaryContainer>
  )
}