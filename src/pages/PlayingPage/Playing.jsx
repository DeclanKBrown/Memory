import './playing.css'
import Card from '../../components/Card'
import { useState, useEffect } from 'react'

export default function Playing() {

    const [isRender, setIsRender] = useState(true)
    const [allCharactersObject, setAllCharactersObject] = useState([]);
    const [clickedCharacters, setClickedCharacters] = useState([])
    const [shownCharacters, setShownCharacters] = useState([])
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
        getCharacters();
    }, []);

    useEffect(() => {
        allCharactersObject.length === 3 && decideShownCharacters()
    }, [clickedCharacters, allCharactersObject])

    function decideShownCharacters() {
        //Get IDS
        const uniqueIndices = [];
        while (uniqueIndices.length < 3) {
            const index = Math.floor(Math.random() * 3);
            if (!uniqueIndices.includes(index)) {
                uniqueIndices.push(index)
            }
        }
        //Get Selected Characters
        console.log(allCharactersObject)
        const selectedCharacters = uniqueIndices.map(index => allCharactersObject[index])
        setShownCharacters(selectedCharacters) //Set the selcted characters to be rendered
    }

    function getCharacters() {
        const fetchPromises = allCharacters.map((character) => {
            return fetch(`https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2F${character.FirstName + character.LastName}.png`)
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
        })

        Promise.all(fetchPromises)
            .then(() => {
                setIsRender(false);
            })
    }
    
    function handleCardClick(characterName) {
        setClickedCharacters([...clickedCharacters, characterName])
    }

    return (
        <main className='playing-main'>
            <div className='cards-container'>  
                {shownCharacters.map((character) => (
                    <Card 
                        key={character.name}
                        characterName={character.name}
                        characterImage={character.image}
                        handleCardClick={handleCardClick}
                    />
                ))}
            </div>
            <div className='score'>
                <span className='playing-score'>0 / 5</span>
            </div>
        </main>
    )
}