export const VotingDummy = () => {
 /*    const poll = { 
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
    } */
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

   /*  const finalData = [
        finishedPoll.map((item) => item.voting.map((vote) => vote.optionId))
    ]
 */
    const result = {}
    // finishedPolls.forEach(arr => {
    for (let i = 0; i < finishedPolls.length; i++) {
      finishedPolls[i].voting.forEach(obj => {
        const {optionId, objectionsPoints} = obj
        if (result[optionId]) {
          result[optionId].push(objectionsPoints)
       } else {
          result[optionId] = [objectionsPoints]
       }
      })
    };
    console.log(result)


    const result = {}; xAsValuesArray.map(item => { result[item[0]] = item[1].reduce((a, b) => a + b); });

    const xAsValuesArray = Object.entries(x);

    // {
    //   456: [2,5,8],
    //   789: [8,5,1],
    //   523: [7,3,2]
    // }

    // return null
}