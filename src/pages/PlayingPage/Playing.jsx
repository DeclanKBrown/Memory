import './playing.css'
import Card from '../../components/Card'

export default function Playing() {

    return (
        <main className='playing-main'>
            <div className='cards-container'>
                <Card />
                <Card />
                <Card />
            </div>
            <div className='score'>
                <span className='playing-score'>0 / 5</span>
            </div>
        </main>
    )
}