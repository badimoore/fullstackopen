import React, { useState } from "react";

const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>

const Stat = ({ name, value }) => <div>{name} {value}</div>

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

      <h1>statistics</h1>
      <Stat name='good' value={good} />
      <Stat name='neutral' value={neutral} />
      <Stat name='bad' value={bad} />

    </div>
  );
}

export default App;
