import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import QuoteList from '../components/QuoteList'
import { Quote } from '../Types'

export default function SearchedComponents() {
    const params = useParams()
    const [searchedQuotes, setSearchedQuotes] = useState<Quote[]>([])
    useEffect(() => {
        fetch(`http://localhost:4000/quotes/author/${params.author}`).then(res => res.json()).then(res => setSearchedQuotes(res))
    }, [params.author])

    return (
        <div className=' home-page'>
            <h1 className='search-title'>{`You searched for: ${params.author}`}</h1>
            <QuoteList quotes={searchedQuotes} />
        </div>
    )
}
