import React from 'react'
import { Quote } from '../Types'
import QuoteCard from './QuoteCard'

type Props = {
    quotes: Quote[]
    setSelectedQuote: React.Dispatch<React.SetStateAction<Quote | null>>
    setModal: React.Dispatch<React.SetStateAction<string>>
}
export default function ({ quotes, setSelectedQuote, setModal }: Props) {
    return (
        <ul className='quote-card-container'>
            {quotes.map(quote => <QuoteCard quote={quote} key={quote.id} setSelectedQuote={setSelectedQuote} setModal={setModal} />)}


        </ul>
    )
}
