import './styles/card.css'

export default function Card({ characterName, characterImage, handleCardClick }) {
    return (
        <div className="card" onClick={() => handleCardClick(characterName)}>
            <div className='image-container'>
                <img src={URL.createObjectURL(characterImage)} />
            </div>
            <div className='name-container'> 
                <span>{characterName}</span>
            </div>
        </div>
    )
}