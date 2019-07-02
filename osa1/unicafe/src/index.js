import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
      return (
          <div>
              <p>No feedback given</p>
          </div>
      )
  }
  return (
      <div>
          <table>
              <tbody>
                  <Statistic text="good" value={props.good} />
                  <Statistic text="neutral" value={props.neutral} />
                  <Statistic text="bad" value={props.bad} />
                  <Statistic text="all" value={props.all} />
                  <Statistic text="average" value={props.average} />
                  <Statistic text="positive" value={props.positive} />
              </tbody>
          </table>
      </div>
  )
}

const Statistic = (props) => {
  return (
      <tr>
          <td>{props.text} </td>
          <td>{props.value} </td>
      </tr>
  )
}

const Button = ({ handleClick, text }) => {
  return (
      <button onClick={handleClick}>
          {text}
      </button>
  )
}

const Header = props => <h1>{props.header}</h1>


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header = 'give feedback' />
      <Button handleClick = {() => setGood(good + 1)} text = 'good' />
      <Button handleClick = {() => setNeutral(neutral + 1)} text = 'neutral' />
      <Button handleClick = {() => setBad(bad + 1)} text = 'bad' />
      <Header header = 'statistics' />

      <Statistics good={good} neutral={neutral} bad={bad} average={(good - bad) / (good + neutral + bad)} all = {good + neutral + bad} positive={(good / (good + neutral + bad)) * 100 + ' %'} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)