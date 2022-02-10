import React from 'react'
import { Quote } from '../Types'
import QuoteCard from './QuoteCard'

type Props = {
    quotes: Quote[]
}
export default function ({ quotes }: Props) {
    return (
        <ul className='quote-card-container'>
            {quotes.map(quote => <QuoteCard quote={quote} key={quote.id} />)}


        </ul>
    )
}
