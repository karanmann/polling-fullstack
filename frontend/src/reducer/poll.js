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
      },
      deleteOneOption: (store, action) => {
        const optionId = action.payload
        const filteredOptions = store.options.filter(option => option.id !== optionId)
        store.options = filteredOptions
      },
      changeOneOption: (store, action) => {
        const updatedOption = action.payload
        const currentOption = store.options.find(option => updatedOption.id === option.id)
        currentOption.text = updatedOption.text
      }
    }
})