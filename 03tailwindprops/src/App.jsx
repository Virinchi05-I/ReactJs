import { useState } from 'react'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "tushar",
    age: 23
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card username="Tushar" btnText="Follow"/>
      <Card username="Hitesh" btnText="Follow"/>
    </>
  )
}

export default App
