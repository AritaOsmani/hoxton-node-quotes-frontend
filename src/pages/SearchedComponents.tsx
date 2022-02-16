import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import QuoteList from '../components/QuoteList'
import { Quote } from '../Types'

type Props = {
    setSelectedQuote: React.Dispatch<React.SetStateAction<Quote | null>>
    setModal: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchedComponents({ setSelectedQuote, setModal }: Props) {
    const params = useParams()
    const [searchedQuotes, setSearchedQuotes] = useState<Quote[]>([])
    useEffect(() => {
        fetch(`http://localhost:4000/quotes/author/${params.author}`).then(res => res.json()).then(res => setSearchedQuotes(res))
            .catch(err => {
                alert(err)
            })
    }, [params.author])

    if (!Array.isArray(searchedQuotes)) return <h1>Quote not found!</h1>

    return (
        <div className=' home-page'>
            <h1 className='search-title'>{`You searched for: ${params.author}`}</h1>
            <QuoteList quotes={searchedQuotes} setSelectedQuote={setSelectedQuote} setModal={setModal} />
        </div>
    )
}
