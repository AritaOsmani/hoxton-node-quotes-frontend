import React from 'react'
import { Quote } from '../Types'
import QuoteCard from './QuoteCard'

type Props = {
    quotes: Quote[]
    setSelectedQuote: React.Dispatch<React.SetStateAction<Quote | null>>
    setModal: React.Dispatch<React.SetStateAction<string>>
}
export default function QuoteList({ quotes, setSelectedQuote, setModal }: Props) {

    console.log('Quotes: ', quotes)
    // if (typeof quotes === 'object') return <h1>Error!!</h1>
    return (
        <ul className='quote-card-container'>
            {quotes.map(quote => <QuoteCard quote={quote} key={quote.id} setSelectedQuote={setSelectedQuote} setModal={setModal} />)}


        </ul>
    )
}
