import { createSlice } from '@reduxjs/toolkit'

export const voting = createSlice({
  name: 'voting',
  initialState: {
    name: '',
    pollId: null,
    voting: []
  },
  reducers: {
    addName: (store, action) => {
      store.name = action.payload
    },
    addPollId: (store, action) => {
      store.pollId = action.payload
    },

  }   
})  