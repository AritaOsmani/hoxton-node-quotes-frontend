import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Quote } from '../Types'

type Props = {
    quote: Quote
}
export default function QuoteCard({ quote }: Props) {
    const navigate = useNavigate()
    return (
        <div className='quote-card' onClick={() => {
            navigate(`/quotes/details/${quote.id}`)
        }}>
            <i className="fas fa-quote-left"></i>
            <span className='quote-content'>{quote.content}</span>
            <span className='author'>{`- ${quote.author.firstName} ${quote.author.lastName}`}</span>
        </div>
    )
}
