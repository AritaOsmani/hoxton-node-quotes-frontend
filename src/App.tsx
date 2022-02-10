import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Title from './components/Title'
import HomePage from './pages/HomePage'
import { Quote } from './Types'



function App() {

  const [quotes, setQoutes] = useState<Quote[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/quotes').then(res => res.json())
      .then(res => setQoutes(res))
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage quotes={quotes} />} />
      </Routes>
    </div>
  )
}

export default App
