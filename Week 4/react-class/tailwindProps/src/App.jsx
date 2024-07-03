import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let person ={
    name: "hello",
    age: 20,
    address: "Pune"
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4' > hello in jsx</h1>
      <Card name="Abhishek" someObj ={person} btnText = "visit Me"/>
    </>
  )
}

export default App
