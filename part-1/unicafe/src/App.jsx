import { useState } from 'react'

// React Components
const Title = ({ text }) => <h1>{text}</h1>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) => {
    return (
        <>
            <td>{text}</td>
            <td>{value}</td>
        </>
    )
}

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <StatisticLine text="good" value={good} />
            </tr>
            <tr>
              <StatisticLine text="neutral" value={neutral} />
            </tr>
            <tr>
              <StatisticLine text="bad" value={bad} />
            </tr>
            <tr>
              <StatisticLine text="all" value={total} />
            </tr>
            <tr>
              <StatisticLine text="average" value={average} />
            </tr>
            <tr>
              <StatisticLine text="positive" value={positive} />
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {

  const incrementFeedback = ({type, newValue}) => {
    if (type === 'good') {
      setGood(newValue)
    } else if (type === 'neutral') {
      setNeutral(newValue)
    } else if (type === 'bad') {
      setBad(newValue)
    }
    console.log(`Feedback type: ${type}, New value: ${newValue}`)
  }

  // Saves clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good - bad) / total || 0
  const positive = total ? (good / total) * 100 + '%' : '0%'

  return (
    <div>
      <Title text="give feedback" />
      <Button onClick={() => incrementFeedback({type:"good", newValue:good + 1})} text="good" />
      <Button onClick={() => incrementFeedback({type:"neutral", newValue:neutral + 1})} text="neutral" />
      <Button onClick={() => incrementFeedback({type:"bad", newValue:bad + 1})} text="bad" />
      <Title text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App
