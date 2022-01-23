import React, { useState } from "react";

const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>

const StatisticLine = ({ text, value }) => <div>{text} {value}</div>

const Statistics = props => {
  const [good, neutral, bad] = props.values

  const total = good + neutral + bad;
  const percentGood = () => total > 0 ? good / total * 100 + ' %' : '-'
  const average = () => total > 0 ? (good - bad) / total : '-'

  if (total > 0) return (
    <>
      <h1>statistics</h1>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={total} />
      <StatisticLine text='average' value={average()} />
      <StatisticLine text='positive' value={percentGood()} />
    </>
  )
  return <p>No feedback given</p>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={handleGood} text='good' />
      <Button handler={handleNeutral} text='neutral' />
      <Button handler={handleBad} text='bad' />

      <Statistics values={[good, neutral, bad]} />
    </div>
  );
}

export default App;
