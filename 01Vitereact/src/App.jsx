import { useState } from 'react'
import Chai from './chai'

function App() {
  const username = "chai aur code"
  return (
  <>
  <Chai/>
  <h1> chai aur react | {username} </h1>  
                                        
  <p>
    evaluated expression : only evaluated expression is written inside the html file hence username is an evaluated expression
    <br/>
    <br/>why only evaluated expressioon is written
  </p>
  </>
  )
}

export default App
