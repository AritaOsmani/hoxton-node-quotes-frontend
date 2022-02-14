import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FormType } from '../Types';

type Props = {
    setModal: React.Dispatch<React.SetStateAction<string>>
}

export default function Header({ setModal }: Props) {
    const navigate = useNavigate()
    return (
        <header>
            <button onClick={() => {
                setModal('add')
            }}>Add a new quote</button>
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
