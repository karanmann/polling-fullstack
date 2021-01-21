import { createSlice } from '@reduxjs/toolkit'

export const poll = createSlice({
    name: 'poll',
    initialState: {
        topic: 'Where to go on holiday?',
        id: 100,
        options: [
        { 
          id: 1,
          text: 'Greece'
        },
        { 
          id: 2,
          text: 'Thailand', 
        },
        { 
          id: 3,
          text: 'India'
        },
      ]
    },
    reducers: {
      addOneOption: (store, action) => {
        const newOption = {
          id: store.options.length === 0 ? 0 : Math.max(...store.options.map(item => item.id)) + 1,
          text: action.payload
        }
        const newOptionList = [...store.options, newOption]
        store.options = newOptionList
      } 
    }
})