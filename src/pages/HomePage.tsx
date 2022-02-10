import QuoteList from '../components/QuoteList'
import Title from '../components/Title'
import { Quote } from '../Types'

type Props = {
    quotes: Quote[]
}

export default function HomePage({ quotes }: Props) {
    return (
        <div className='home-page'>
            <Title />
            <QuoteList quotes={quotes} />
        </div>
    )
}
