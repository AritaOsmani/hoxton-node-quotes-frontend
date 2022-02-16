import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Title from './components/Title'
import AdditionalInfo from './pages/AdditionalInfo'
import AddNewQuote from './pages/AddNewQuote'
import ConfirmationModal from './pages/ConfirmationModal'
import HomePage from './pages/HomePage'
import SearchedComponents from './pages/SearchedComponents'
import { Quote } from './Types'



function App() {

  const [quotes, setQoutes] = useState<Quote[]>([])
  const [modal, setModal] = useState('')
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null)

  useEffect(() => {
    fetch('http://localhost:4000/quotes').then(res => res.json())
      .then(res => setQoutes(res))
  }, [])

  const appContainerStyle = modal ? { overflow: 'hidden', height: '100vh' } : undefined

  return (
    <div className="App" style={appContainerStyle}>
      {modal === 'add' && <AddNewQuote setModal={setModal} quotes={quotes} setQuotes={setQoutes} modal={modal} />}
      {modal === 'confirm' && <ConfirmationModal setModal={setModal} selectedQuote={selectedQuote} quotes={quotes} setQuotes={setQoutes} setSelectedQuote={setSelectedQuote} />}
      <Header setModal={setModal} />
      <Routes>
        <Route index element={<Navigate replace to='/quotes' />} />
        <Route path='/quotes' element={<HomePage quotes={quotes} setSelectedQuote={setSelectedQuote} setModal={setModal} />} />
        <Route path='/quotes/:author' element={<SearchedComponents setSelectedQuote={setSelectedQuote} setModal={setModal} />} />
        <Route path='/quotes/details/:id' element={<AdditionalInfo />} />
      </Routes>
    </div>
  )
}

export default App
