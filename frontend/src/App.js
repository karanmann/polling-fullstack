import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Navbar } from './components/Navbar'
import { LandingPage } from './pages/LandingPage'
import { CreatePoll } from './pages/CreatePoll'
import { PollingLink } from './pages/PollingLink'
import { Voting } from './pages/Voting'
import { VotingResults } from './pages/VotingResults'
import { Footer } from './components/Footer'
import { About } from './pages/About'
import { poll } from './reducer/poll'
import { voting } from './reducer/voting'

import {VotingDummy} from './components/VotingDummy'

const reducer = combineReducers ({
  poll: poll.reducer, 
  voting: voting.reducer
})
const store = configureStore ({ reducer })


const App = () => {
  return (
   <>
    <BrowserRouter className='App'>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <Route path='/createpoll'>
            <CreatePoll />
          </Route>
          <Route path='/pollinglink'>
            <PollingLink/>
          </Route>
          <Route path='/voting/:id' exact>
            <Voting />
          </Route>
          <Route path='/voting/:id/results' exact> 
            <VotingResults />
          </Route>
          <Route path='/about'> 
            <About />
          </Route>
          {/* this next route only during development process for the voting dummy */}
          <Route path='/dummy'>
            <VotingDummy />
          </Route>
        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>
  </>
  )
}

export default App
