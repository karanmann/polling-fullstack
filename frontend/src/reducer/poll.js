import { createSlice } from '@reduxjs/toolkit'

export const poll = createSlice({
    name: 'poll',
    initialState: {
        topic: '',
        pollId: null,
        options: []
    },
    reducers: {
      addTopic: (store, action) => {
        store.topic = action.payload
      },
      addOneOption: (store, action) => {
        const newOption = {
          text: action.payload,
          optionId: store.options.length === 0 ? 0 : Math.max(...store.options.map(item => item.optionId)) + 1
        }
        const newOptionList = [...store.options, newOption]
        store.options = newOptionList
      },
      deleteOneOption: (store, action) => {
        const optionId = action.payload
        const filteredOptions = store.options.filter(option => option.optionId !== optionId)
        store.options = filteredOptions
      },
      changeOneOption: (store, action) => {
        const updatedOption = action.payload
        const currentOption = store.options.find(option => updatedOption.optionId === option.optionId)
        currentOption.text = updatedOption.text
      },
      setPollId: (store, action) => {
        const newId = action.payload
        store.pollId = newId
      },
      setPollTopic: (store, action) => {
        const { topic } = action.payload
        store.topic = topic
      }, 
      setPollOptions: (store, action) => {
        const { options } = action.payload
        store.options = options
      },
    }
})

