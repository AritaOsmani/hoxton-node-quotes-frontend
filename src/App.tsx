import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Title from './components/Title'
import HomePage from './pages/HomePage'
import SearchedComponents from './pages/SearchedComponents'
import { Quote } from './Types'



function App() {

  const [quotes, setQoutes] = useState<Quote[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/quotes').then(res => res.json())
      .then(res => setQoutes(res))
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Navigate replace to='/quotes' />} />
        <Route path='/quotes' element={<HomePage quotes={quotes} />} />
        <Route path='/quotes/:author' element={<SearchedComponents />} />
      </Routes>
    </div>
  )
}

export default App
