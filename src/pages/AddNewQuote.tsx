import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../ModalStyle.css'
import { AddForm, Quote } from '../Types'

type Props = {
    setModal: React.Dispatch<React.SetStateAction<string>>
    quotes: Quote[]
    setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>,
    modal: string
}

export default function AddNewQuote({ setModal, quotes, setQuotes, modal }: Props) {
    const navigate = useNavigate()



    function addNewQuote(firstName: string, lastName: string, born: number, death: number, image: string, content: string, bio: string) {
        return fetch(`http://localhost:4000/authors`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ firstName: firstName, lastName: lastName, born: born, death: death, image: image, bio })
        }).then(res => res.json()).then(res => {
            console.log('res:', res)
            fetch(`http://localhost:4000/quotes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ content: content, authorId: res.id })
            }).then(res => res.json()).then(res => {
                fetch(`http://localhost:4000/authors/${res.authorId}`).then(response => response.json()).then(response => {
                    const newQuotes = JSON.parse(JSON.stringify(quotes))
                    const newQuote = {
                        id: res.id,
                        content: res.content,
                        firstName: response.firstName,
                        lastName: response.lastName,
                        born: response.born,
                        death: response.death,
                        image: response.image,
                        bio: response.bio
                    }
                    newQuotes.push(newQuote)
                    setQuotes(newQuotes)
                })


            })
        })
    }

    return (
        <div className='modal-wrapper' >
            <div className='add-quote-modal'>
                <button onClick={() => {
                    setModal('')
                }} className='close-btn'>X</button>
                <h2>Add new quote</h2>
                <form action="" className='add-form' onSubmit={(e) => {
                    e.preventDefault();
                    const formEl = e.target as AddForm;

                    const authorFirstName = formEl.firstName.value;
                    const authorLastName = formEl.lastName.value;
                    const born = Number(formEl.bornYear.value);
                    const death = Number(formEl.deathYear.value);
                    const image = formEl.imgURL.value;
                    const quoteContent = formEl.content.value;
                    const bio = formEl.author_bio.value;

                    addNewQuote(authorFirstName, authorLastName, born, death, image, quoteContent, bio)
                    formEl.reset()
                    setModal('')

                }}>
                    <input type="text" name='firstName' placeholder='First name' required />
                    <input type="text" name="lastName" placeholder='Last name' required />
                    <input type="text" name='bornYear' placeholder='Year of birth' required />
                    <input type="text" name="deathYear" placeholder='Year of death' />
                    <input type="text" name="imgURL" placeholder='Image URL' required />
                    <textarea name="content" id="" cols={30} rows={5} placeholder='Enter the quote....' required ></textarea>
                    <textarea name="author_bio" id="" cols={30} rows={5} placeholder="Bio..."></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
