import './playing.css'
import Card from '../../components/Card'
import { useState, useEffect } from 'react'

export default function Playing({ difficulty, setIsGameover, isGameover }) {

    const [allCharactersObject, setAllCharactersObject] = useState([]);
    const [clickedCharacters, setClickedCharacters] = useState([])
    const [shownCharacters, setShownCharacters] = useState([])
    const [score, setScore] = useState(0)
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
    let limit;
    if (difficulty === 'easy') {
        limit = 5
    } else if (difficulty === 'medium') {
        limit = 7
    } else if (difficulty === 'hard') {
        limit = 10
    }

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
        const selectedCharacters = uniqueIndices.map(index => allCharactersObject[index])
        setShownCharacters(selectedCharacters) //Set the selcted characters to be rendered
    }

    function getCharacters() {
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
        })
    }
    
    function handleCardClick(characterName) {
        checkGameOver(characterName)
        setClickedCharacters([...clickedCharacters, characterName])
    }

    function checkGameOver(characterName) {
        for (let charater1 of clickedCharacters) {
            if (characterName === charater1) {
                setIsGameover(true)
                return 
            }
        }
        if (score === limit) {
            setIsGameover(true)
            return
        }
        setScore(score + 1)
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
                <span className='playing-score'>{score} / {limit}</span>
            </div>
        </main>
    )
}