import './playing.css'
import Card from '../../components/Card'
import { useState, useEffect } from 'react'

export default function Playing({ difficulty, setIsGameOver, isGameover }) {

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
        {
            FirstName: 'Mr',
            LastName: 'Burns',
        },
        {
            FirstName: 'Apu',
            LastName: 'Nahasapeemapetilon',
        },
        {
            FirstName: 'Milhouse',
            LastName: 'VanHouten',
        },
        {
            FirstName: 'Moe',
            LastName: 'Szyslak',
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
        allCharactersObject.length === allCharacters.length && decideShownCharacters()
    }, [clickedCharacters, allCharactersObject])

    function decideShownCharacters() {
        //Get IDS
        const uniqueIndices = [];
        //Add one that has already been clicked to be displayed
        const clickedIndex = Math.floor(Math.random() * clickedCharacters.length)
        for (let i = 0; i <  allCharactersObject.length; ++i) {
            if (clickedCharacters[clickedIndex] === allCharactersObject[i].FirstName + ' ' + allCharactersObject[i].LastName) {
                uniqueIndices.push(i)
            }
        }

        //Get Unclicked characters
        while (uniqueIndices.length < 3) {
            const index = Math.floor(Math.random() * allCharacters.length);
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
                            FirstName: character.FirstName, 
                            LastName: character.LastName,
                            Image: blob,
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
        for (let character1 of clickedCharacters) {
            if (characterName === character1.FirstName + ' ' + character1.LastName) {
                setIsGameOver(true)
                return 
            }
        }
        if (score === limit) {
            setIsGameOver(true)
            return
        }
        setScore(score + 1)
    }

    return (
        <main className='playing-main'>
            <div className='cards-container'>  
                {shownCharacters.map((character) => (
                    <Card 
                        key={character.FirstName}
                        characterName={character.FirstName + ' ' + character.LastName}
                        characterImage={character.Image}
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