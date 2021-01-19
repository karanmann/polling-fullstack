import React from 'react'

import { Table } from '../components/Table'

export const CreatePoll= () => {
  return (
    <>
      <section>
        <h1>Create poll</h1>
        <form>
          <label>
          <input type='text'/>
          Topic
          </label>
        </form>
      </section>
      <section>
        <h1>Add options</h1>
        <form>
          <input type='text' />
          <button>Add</button>
          <button>Back</button>
          <button>Create poll and see summary</button>
        </form>
      </section>
      <section>
        <h1>Summary</h1>
        <Table />
        <button>Go back</button>
        <button>Finish and create link</button>
      </section>
      <p>Henrikes change</p>
    </>
  )
}