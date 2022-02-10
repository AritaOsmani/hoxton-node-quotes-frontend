import React from 'react'
import { Quote } from '../Types'

type Props = {
    quote: Quote
}
export default function QuoteCard({ quote }: Props) {
    return (
        <div className='quote-card'>
            <i className="fas fa-quote-left"></i>
            <span className='quote-content'>{quote.content}</span>
            <span className='author'>{`- ${quote.author}`}</span>
        </div>
    )
}
