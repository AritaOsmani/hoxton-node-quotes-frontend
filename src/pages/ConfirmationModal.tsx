import '../ModalStyle.css'
import { Quote } from '../Types'

type Props = {
    setModal: React.Dispatch<React.SetStateAction<string>>
    selectedQuote: Quote | null
    quotes: Quote[]
    setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>
    setSelectedQuote: React.Dispatch<React.SetStateAction<Quote | null>>
}

export default function ConfirmationModal({ setModal, selectedQuote, setQuotes, quotes, setSelectedQuote }: Props) {

    if (selectedQuote === null) return <h1>Quote not found</h1>

    function deleteQuote(quote: Quote) {
        fetch(`http://localhost:4000/quotes/${quote.id}`, {
            method: 'DELETE'

        }).then(res => res.json())
            .then(res => {
                const newQuotes = [...quotes]
                const newQ = newQuotes.filter(q => q.id !== quote.id)
                setQuotes(newQ)
            })
    }

    return (

        <div className='modal-wrapper'>
            <div className='confirmation-modal'>
                <span>Are you sure you want to delete this quote?</span>
                <div className='confirmation-buttons'>
                    <button onClick={(e) => {
                        deleteQuote(selectedQuote)

                        setModal('')
                    }}
                        className='yes-btn'>Yes</button>
                    <button onClick={() => {
                        setModal('')
                    }}
                        className='no-btn'>No</button>
                </div>
            </div>
        </div>
    )
}
