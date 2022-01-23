import React, { useState } from 'react'

const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>

const VoteCount = ({ value }) => <div>has {value} votes</div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const randomIndex = () => Math.floor(Math.random() * anecdotes.length)

  const [selected, setSelected] = useState(randomIndex)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleNextClick = () => setSelected(randomIndex())
  const handleVoteClick = () => {
    const newArray = [...votes]
    newArray[selected]++
    setVotes(newArray)
  }

  return (
    <div>
      {anecdotes[selected]}
      <VoteCount value={votes[selected]} />
      <Button handler={handleVoteClick} text='vote' />
      <Button handler={handleNextClick} text='next anecdote' />
    </div>
  )
}

export default App
