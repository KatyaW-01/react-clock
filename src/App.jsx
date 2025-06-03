import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  },[])

  return (
    <div class="date-time">
      <p>{format(currentTime, 'MM-dd-yyyy HH:mm:ss')}</p>
    </div>
  )
}

export default App