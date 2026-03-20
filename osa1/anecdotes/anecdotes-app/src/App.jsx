import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code...',
    'Any fool can write code...',
    'Premature optimization is the root...',
    'Debugging is twice as hard...',
    'Programming without console.log...',
    'The only way to go fast is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxVotes = Math.max(...votes)
  const maxIndex = votes.indexOf(maxVotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>

      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>

      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>

      <h2>Most voted anecdote</h2>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {votes[maxIndex]} votes</p>
    </div>
  )
}

export default App