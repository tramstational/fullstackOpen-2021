import React from 'react'
import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'

function AnecdoteForm () {
  const dispatch = useDispatch()
  const addNewNote = event => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    dispatch(createNewAnecdote(content))
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNewNote}>
        <div>
          <input name='note' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm