import React from 'react'

export const VotingDummy = () => {
    const poll = { 
        _id: '123',
        pollTopic: 'Example Poll',
        pollOptions: [{
            _id: '456',
            text: 'First option'
        },
        {
            _id: '789',
            text: 'Second option'
        },
        {
            _id: '523',
            text: 'Third option'
        }
        ]
      } 
    const finishedPolls = [
        {
           name: 'Bob',
           pollId: '123',
           voting: 
           [
               {
                   optionId: '456',
                   objectionsPoints: 2,
               },

               {
                    optionId: '789',
                    objectionsPoints: 8,
            },
            {
                    optionId: '523',
                    objectionsPoints: 7,
            }
           ] 
        },

        {
            name: 'Ann',
            pollId: '123',
            voting: 
            [
                {
                    optionId: '456',
                    objectionsPoints: 5,
                },
                {
                    optionId: '789',
                    objectionsPoints: 5,
            },
            {
                    optionId: '523',
                    objectionsPoints: 3,
            }
            ] 
         },

         {
            name: 'Kim',
            pollId: '123',
            voting: 
            [
                {
                    optionId: '456',
                    objectionsPoints: 8,
                },
                {
                    optionId: '789',
                    objectionsPoints: 1,
            },
            {
                    optionId: '523',
                    objectionsPoints: 2,
            }
            ] 
         }
    ]

    
    // code from Maks. OBS result !=== our result
    // const result = {}; xAsValuesArray.map(item => { result[item[0]] = item[1].reduce((a, b) => a + b); });
    // const xAsValuesArray = Object.entries(x);

    
    // Changing the structure of our data to make it more accessible for JSX

    // First step: build prel to look like this
    // {
    //   456: [2,5,8],
    //   789: [8,5,1],
    //   523: [7,3,2]
    // }

    const prel = {}
    for (let i = 0; i < finishedPolls.length; i++) {
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

    // Second step: build prelAsValuesArray to look like this
    // [ [456,[2,5,8]], [789, [8,5,1]], [523, [7,3,2]] ]

    const prelAsValuesArray = Object.entries(prel)

    // Thirs step: build result to look like this
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
        {poll.pollOptions.map(option => {
          return (
            resultEntries.map((pair) => (
              option._id === pair[0] &&
                <p>{option.text} {pair[1]}</p>
            ))
          )
        })}
      </>
    )
}
