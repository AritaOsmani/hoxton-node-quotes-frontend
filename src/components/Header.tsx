import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FormType } from '../Types';

export default function Header() {
    const navigate = useNavigate()
    return (
        <header>
            <form action="" className='search-form' onSubmit={e => {
                e.preventDefault()
                const formEl = e.target as FormType;
                const searchValue = formEl.search.value;
                navigate(`/quotes/${searchValue}`)
                formEl.reset()
            }}>
                <input type="text" name='search' placeholder='Search for an author...' />
            </form>
        </header>
    )
}
