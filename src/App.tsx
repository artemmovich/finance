import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex gap-3.5 '>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>

    </>
  )
}

export default App
