import './styles/card.css'

export default function Card({ characterName, characterImage }) {
    return (
        <div className="card">
            <div className='image-container'>
                <img src={URL.createObjectURL(characterImage)} />
            </div>
            <div className='name-container'> 
                <span>{characterName}</span>
            </div>
        </div>
    )
}