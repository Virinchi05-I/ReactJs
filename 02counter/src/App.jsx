import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [counter, setCounter] = useState(0)
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {

    /* setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1) 
    
    /* This is for interviwe if we want to update value multiple times at a time *
    */

    if(counter === 20) return

    // counter += 1
    counter = counter + 1
    setCounter(counter)
    // console.log("clicked", counter)
  }
  const removeValue = () => {

    if(counter === 1) return
    
    // counter += 1
    counter = counter - 1
    setCounter(counter)
    // console.log("clicked", counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
