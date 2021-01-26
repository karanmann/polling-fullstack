import { createSlice } from '@reduxjs/toolkit'

export const poll = createSlice({
    name: 'poll',
    initialState: {
        topic: 'Where to go on holiday?',
        pollId: null,
        options: [
        { 
          option: 'Greece',
          optionId: 1
        },
        { 
          option: 'Thailand', 
          optionId: 2,
        },
        { 
          option: 'India',
          optionId: 3,
        },
      ]
    },
    reducers: {
      addTopic: (store, action) => {
        store.topic = action.payload
      },
      addOneOption: (store, action) => {
        const newOption = {
          option: action.payload,
          optionId: store.options.length === 0 ? 0 : Math.max(...store.options.map(item => item.optionId)) + 1
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
      },
      setPollId: (store, action) => {
        console.log(action.payload)
        const newId = action.payload
        store.pollId = newId
      }
    }
})