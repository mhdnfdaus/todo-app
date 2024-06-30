import { useState } from 'react'
import './App.css'
import Button from './components/Button';
import Screen from './components/Screen';

function App() {
  const [count, setCount] = useState(0);

  return (
    <><div className="card">
      <div className="card-body">
      <div className="card-title">
      <Screen>Number of Clicked:</Screen>
      </div>
      <p className='card-test'>{count}</p>
      <Button onClick={() => setCount(count + 1)}>Click Me</Button>
      </div>
    </div>
    </>

  )
}

export default App
