import React from 'react'
import { Quote } from '../Types'

type Props = {
    quote: Quote | null
}

export default function AuthorInfo({ quote }: Props) {
    if (quote === null) return <h1>Not found</h1>
    const firstName = quote?.firstName;
    const lastName = quote?.lastName;
    const born = quote?.born;
    const content = quote?.content;
    let age = 0;
    if (!quote.death || quote.death === 0 || quote.death === undefined) {
        age = 2022 - born
    } else {
        if (quote.death < born) {
            age = Math.abs(quote.death - born);
        } else {
            age = quote.death - born;
        }

    }
    return (
        <div className='author-info-container'>
            <img src={quote.image} alt="" />
            <div className='author-info'>
                <div className='author-info_firstName'>
                    <span className='info-key'>First name:</span>
                    <span className='info-val'>{firstName}</span>
                </div>
                <div className='author-info_lastName'>
                    <span className='info-key'>Last name:</span>
                    <span className='info-val'>{lastName}</span>
                </div>
                <div className='author-info_age'>
                    <span className='info-key'>Age:</span>
                    <span className='info-val'>{age}</span>
                </div>
                <div className='author-info_bio'>
                    <span className='info-key'>Bio:</span>
                    <p>{quote.bio}</p>
                </div>
            </div>
        </div>
    )
}
