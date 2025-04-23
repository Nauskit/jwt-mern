import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1 className='text-center'>React Application</h1>
      </div>
    </>
  )
}

export default App
