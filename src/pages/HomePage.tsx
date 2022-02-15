import QuoteList from '../components/QuoteList'
import Title from '../components/Title'
import { Quote } from '../Types'

type Props = {
    quotes: Quote[]
    setSelectedQuote: React.Dispatch<React.SetStateAction<Quote | null>>
    setModal: React.Dispatch<React.SetStateAction<string>>
}

export default function HomePage({ quotes, setSelectedQuote, setModal }: Props) {
    return (
        <div className='home-page'>
            <Title />
            <QuoteList quotes={quotes} setSelectedQuote={setSelectedQuote} setModal={setModal} />
        </div>
    )
}
