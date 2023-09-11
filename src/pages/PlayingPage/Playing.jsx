import './playing.css'
import Card from '../../components/Card'
import { useState, useEffect } from 'react'

export default function Playing() {

    const [allCharactersObject, setAllCharactersObject] = useState([]);
    const [clickedCharacters, setClickedCharacters] = useState([])
    const [shownCharacters, setShownCharacter] = useState([])
    const allCharacters = [
        {
            FirstName: 'Homer',
            LastName: 'Simpson', 
        },
        {
            FirstName: 'Bart',
            LastName: 'Simpson',
        },
        {
            FirstName: 'Marge',
            LastName: 'Simpson',
        },
    ]

    useEffect(() => {
        allCharacters.map((character) => {
            fetch(`https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2F${character.FirstName + character.LastName}.png`)
            .then(response => response.blob())
            .then(blob => {
                setAllCharactersObject(prevState => [
                    ...prevState,
                    {
                        name: character.FirstName + ' ' + character.LastName,
                        image: blob,
                    }
                ])
            })
        });
    }, []); 


    return (
        <main className='playing-main'>
            <div className='cards-container'>  
                {allCharactersObject.map((character) => (
                    <Card 
                        key={character.name}
                        characterName={character.name}
                        characterImage={character.image}
                    />
                ))}
            </div>
            <div className='score'>
                <span className='playing-score'>0 / 5</span>
            </div>
        </main>
    )
}