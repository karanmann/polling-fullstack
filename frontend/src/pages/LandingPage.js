import React from 'react'
import { Link } from 'react-router-dom'

export const LandingPage= () => {
  return (
    <>
      <section>
        <h1>Welcome</h1>
        <p>some text here</p>
        <Link to='/createpoll'>
          <button>Create new poll</button>
        </Link>
      </section>
      <section>
        <h2>How it works</h2> 
        <p>some kind of explainer text here</p>
      </section>
    </>
  )
}