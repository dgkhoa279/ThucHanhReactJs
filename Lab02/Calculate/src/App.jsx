import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState(0)
  const [rate, setRate] = useState(10)
  const [goal, setGoal] = useState(0)
  const [targetGoal, setTargetGoal] = useState(300) 
  const [listgoal, setListGoal] = useState([])

  useEffect(() => {
    setGoal(Number(input))
  }, [input])

  const handlegoal = () => {
    let currentValue = Number(goal)
    const tempList = [currentValue]
    while (currentValue < Number(targetGoal)) {
      currentValue = (currentValue * rate) / 100 + currentValue
      tempList.push(currentValue)
    }

    
    setGoal(currentValue)
    setListGoal(tempList)
  }


  return (
    <>
      <h4>Calculator</h4>
      <span>Invest</span>
      <input
        value={input}
        type="number"
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <span>Rate</span>
      <input
        value={rate}
        type="number"
        onChange={(e) => setRate(e.target.value)}
      />
      <br />
      <span>Target Goal</span>
      <input
        value={targetGoal}
        type="number"
        onChange={(e) => setTargetGoal(e.target.value)}
      />
      <br />
      <span>Current Goal</span>
      <input value={goal} type="text" readOnly />
      <br />

      <button onClick={handlegoal}>Calculate</button>
      <ul>
        {listgoal.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </>
  )
}

export default App