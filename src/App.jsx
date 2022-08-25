import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  const [state, setState] = useState(false)

  useEffect(() => {
    console.log('oi')
  }, [])

  function keyValue(e){
    if(!state)
    {
      if (e.which >= 48 && e.which <= 57)
      {
        setCount(arr => [...arr, e.key])
      }
    }
    else if ((e.which >= 48 && e.which <= 57))
    {
      setCount(e.key)
      setState(false)
    }
  }

  function mathCount(count) {
    if (count && !state)
    {
      const num = count.join(' ')

      const convertArray = num.split(" ").join("")

      const countResult = eval(convertArray)

      setState(true)
      console.log(countResult)
      setCount(countResult)
    }
  }

  document.body.onkeypress = keyValue

  return (
    <div className="App">
      <div className="content">
        <div id='viewfinder'>{count}</div>
        <button className='btn' id="btn1" onClick={() => setCount(arr => [...arr, '+'])}>+</button>
        <button className='btn' id="btn2" onClick={() => setCount(arr => [...arr, '-'])}>-</button>
        <button className='btn' id="btn3" onClick={() => setCount(arr => [...arr, '*'])}>x</button>
        <button className='btn' id="btn4" onClick={() => setCount(arr => [...arr, '/'])}>÷</button>
        <button id="btn5" onClick={() => mathCount(count)}>=</button>
      </div>
    </div>
  )
}

export default App
