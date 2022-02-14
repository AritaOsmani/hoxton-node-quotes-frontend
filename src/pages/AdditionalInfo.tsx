import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AuthorInfo from '../components/AuthorInfo'
import DetailsPageQuote from '../components/DetailsPageQuote'
import { Quote } from '../Types'

export default function AdditionalInfo() {
    const params = useParams()
    const [currentQuote, setCurrentQuote] = useState<Quote | null>(null)

    useEffect(() => {
        fetch(`http://localhost:4000/quotes/${Number(params.id)}`).then(res => res.json()).then(res => setCurrentQuote(res))
    }, [params.id])
    return (
        <div className='additional-info-container'>

            <AuthorInfo quote={currentQuote} />

            <DetailsPageQuote quote={currentQuote} />


        </div>
    )
}
