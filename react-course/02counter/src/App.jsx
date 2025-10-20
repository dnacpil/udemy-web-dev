import { useState } from 'react' 
import './App.css'
import { useSyncExternalStore } from 'react'

function App() {
  
  //let counter = 15
  
  //first in the param is a variable, the other is a method
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1)
    /*
    if you write setCounter(counter + 1) multiple times, it will not work as expected, because React batches the state updates for performance reasons.
    To ensure that each update is based on the most recent state, you can use the functional form of the state updater:
    
    setCounter((prevCounter) => prevCounter + 1)
    
    This way, each call to setCounter will receive the latest value of counter.
    */ 
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course with Hitesh {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
