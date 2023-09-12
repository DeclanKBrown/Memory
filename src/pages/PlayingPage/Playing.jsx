import './playing.css'
import Card from '../../components/Card'
import Results from '../../components/Results'
import { useState, useEffect } from 'react'
import _ from 'lodash'

export default function Playing({ difficulty, setIsGameOver, isGameOver, result, setResult, restart, score, setScore, bestScore, setBestScore, clickedCharacters, setClickedCharacters }) {

    const [allCharactersObject, setAllCharactersObject] = useState([]);
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
        {
            FirstName: 'Waylon',
            LastName: 'Smithers',
        },
        {
            FirstName: 'Groundskeeper',
            LastName: 'Willie',
        },
        {
            FirstName: 'Ralph',
            LastName: 'Wiggum',
        },
        {
            FirstName: 'Abraham',
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
        allCharactersObject.length === allCharacters.length && decideShownCharacters()
    }, [clickedCharacters, allCharactersObject])


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

    function decideShownCharacters() {
        let cardsShown;
        if (difficulty === 'easy') {
            cardsShown = 3
        } else if (difficulty === 'medium') {
            cardsShown = 4
        } else if (difficulty === 'hard') {
            cardsShown = 5
        }
        let numberClickedShown = 1
        if (score > 3) {
            numberClickedShown = 2
        } 
        if (score > 5) {
            numberClickedShown = 3
        } 
        if (score > 7) {
            numberClickedShown = 4
        }

        if (clickedCharacters.length === 0) {
            // Handle the case where there are no clicked characters
            const randomCharacters = _.sampleSize(allCharactersObject, cardsShown)
            setShownCharacters(randomCharacters)
            return;
        }

        const clickedCharactersArray = [];

        while (clickedCharactersArray.length < numberClickedShown) {
            const clickedIndex = _.random(0, clickedCharacters.length - 1);
            const clickedName = clickedCharacters[clickedIndex];
            const clickedCharacter = _.find(allCharactersObject, (character) =>
            `${character.FirstName} ${character.LastName}` === clickedName &&
            !clickedCharactersArray.includes(character)
            );
            if (clickedCharacter !== undefined) {
                clickedCharactersArray.push(clickedCharacter);
            }
        }
        console.log(numberClickedShown)
      
        const unclickedCharacters = _.filter(allCharactersObject, (character) =>
          !clickedCharacters.includes(`${character.FirstName} ${character.LastName}`)
        )

  
        const randomUnclickedCharacters = _.sampleSize(unclickedCharacters, cardsShown - numberClickedShown)

        let selectedCharacters = _.shuffle([...clickedCharactersArray, ...randomUnclickedCharacters])
        console.log(clickedCharacters)

        setShownCharacters(selectedCharacters);
    }
    
    function handleCardClick(characterName) {
        if (!isGameOver) {
            checkGameOver(characterName)
            setClickedCharacters([...clickedCharacters, characterName])
        }
    }

    function checkGameOver(characterName) {
        for (let character1 of clickedCharacters) {
            if (characterName === character1) {
                setIsGameOver(true)
                setResult('You Lost')
                return 
            }
        }
        setScore(score + 1)
        if (score + 1 === limit) {
            setIsGameOver(true)
            setResult('You Won')
        }
        if (score + 1 > bestScore) {
            setBestScore(score + 1)
        }
    }

    return (
        <main className='playing-main'>
            {isGameOver && (
                <Results 
                    result={result}
                    restart={restart}
                />
                )}
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