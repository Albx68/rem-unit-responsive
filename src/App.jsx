import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RemEg from './RemEg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RemEg/>
    </div>
  )
}

export default App
