import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Navbar } from './components/Navbar/Navbar'
import { LandingPage } from './pages/LandingPage'
import { CreatePoll } from './pages/CreatePoll'
import { PollingLink } from './pages/PollingLink'
import { Voting } from './pages/Voting'
import { VotingResults } from './pages/VotingResults'
import { Footer } from './components/Footer'
import { About } from './pages/About'
import { SystemicConsensing } from './pages/SystemicConsensing'
import { poll } from './reducer/poll'
import { AppContainer } from './lib/Styling'


const reducer = combineReducers ({
  poll: poll.reducer, 
})
const store = configureStore ({ reducer })

const App = () => {
  return (
  <AppContainer>
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
          <Route path='/systemicconsensing'> 
            <SystemicConsensing />
          </Route>
        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>
  </AppContainer>
  )
}

export default App
