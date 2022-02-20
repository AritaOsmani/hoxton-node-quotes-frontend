import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Quote } from '../Types'

type Props = {
    quote: Quote
    setSelectedQuote: React.Dispatch<React.SetStateAction<Quote | null>>
    setModal: React.Dispatch<React.SetStateAction<string>>
}
export default function QuoteCard({ quote, setSelectedQuote, setModal }: Props) {
    const navigate = useNavigate()
    return (
        <div className='quote-card' onClick={() => {
            navigate(`/quotes/details/${quote.id}`)

        }}>
            <button onClick={(e) => {
                e.stopPropagation()
                setModal('confirm')
                setSelectedQuote(quote)

            }} className='delete-btn'>X</button>
            <i className="fas fa-quote-left"></i>
            <span className='quote-content'>{quote.content}</span>
            <span className='author'>{`- ${quote.firstName} ${quote.lastName}`}</span>
        </div>
    )
}
