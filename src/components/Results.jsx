import './styles/results.css'

export default function Results({ result, restart }) {
    return (
        <div className='display-results-container'>
            <span className='results-span'>{result}</span>
            <button className='restart' onClick={restart}>Restart</button>

        </div>
    )
}