import { useState } from "react"

const Button = ({handleClick, text}) =>(
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={props.good}/>
        <StatisticLine text='neutral' value={props.neutral}/>
        <StatisticLine text='bad' value={props.bad}/>
        <StatisticLine text='all' value={props.all}/>
        <StatisticLine text='average' value={props.average}/>
        <StatisticLine text='positive' value={props.positive}/>
      </tbody>
    </table>
  )
}
const StatisticLine = ({text, value}) => {
  if (text == 'positive'){
    return (
      <tr>
        <td>{text} </td>
        <td>{value} %</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    const updatedAll = updatedGood + neutral + bad
    const updatedAverage = (updatedGood - bad) / updatedAll
    setGood(updatedGood)
    setAll(updatedAll)
    setAverage(updatedAverage)
    setPositive(updatedGood * 100 / updatedAll)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = good + updatedNeutral + bad
    setNeutral(updatedNeutral)
    setAll(updatedAll)
    setPositive(good * 100 / updatedAll)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    const updatedAll = good + neutral + updatedBad
    const updatedAverage = (good - updatedBad) / updatedAll
    setBad(updatedBad)
    setAll(updatedAll)
    setAverage(updatedAverage)
    setPositive(good * 100 / updatedAll)
  }
  
  if (all == 0) {
    return (
      <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h1>statistics</h1>
      <p>No feedback given</p>   
      </div>
    )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App