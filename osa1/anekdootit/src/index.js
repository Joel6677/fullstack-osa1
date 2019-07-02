import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const MostVotes = (props) => {
    let m = 0;
    let mi = 0;
    console.log(props.votes)
    for (let i = 0; i < 6; i++) {
        console.log('v ',props.votes[i])
        console.log('m ', m)
        if (props.votes[i] > m) {
          m = props.votes[i]
          mi = i
        }
    }
    console.log(m)
    return (
        <p>{anecdotes[mi]} has {m} votes</p>
    )  


}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])
  let largest = 0;
  let index = 0;
  

  const handleVote = () => {
    const copy = { ...votes}
      copy[selected] += 1
      setVotes(copy)
   
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>  
      <Button handleClick = {() => setSelected(Math.floor(Math.random() * anecdotes.length))} text = 'next anecdote' />
      <Button handleClick = {handleVote} text = "vote" />
      <h1>anecdote with most votes:</h1>
      <MostVotes votes={votes}></MostVotes>

    </div>
      
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)