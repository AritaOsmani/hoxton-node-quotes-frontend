import React from 'react'
import { Quote } from '../Types'

type Props = {
    quote: Quote | null
}
export default function DetailsPageQuote({ quote }: Props) {
    if (quote === null) return <h1>Not found</h1>
    return (
        <div className='quote-container'>
            <i className="fas fa-quote-left"></i>
            <span className='quote-content'>{quote.content}</span>
            <span className='author'>{`-${quote.author.firstName} ${quote.author.lastName}`}</span>
        </div>
    )
}
