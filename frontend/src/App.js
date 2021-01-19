import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import { Navbar } from './components/Navbar'
import { LandingPage } from './pages/LandingPage'
import { CreatePoll } from './pages/CreatePoll'
import { PollingLink } from './pages/PollingLink'
import { Voting } from './pages/Voting'
import { VotingResults } from './pages/VotingResults'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <BrowserRouter className='App'>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/createpoll' exact>
          <CreatePoll />
        </Route>
        <Route path='/pollinglink' exact>
          <PollingLink/>
        </Route>
        <Route path='/voting/:id' exact>
          <Voting />
        </Route>
        <Route path='/voting/:id/results' exact> 
          <VotingResults />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
