import Homepage from './pages/HomePage/Homepage.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Playing from './pages/PlayingPage/Playing.jsx'
import { useState } from 'react'

export default function App() {

  const [isPlaying, setIsPlaying] = useState(false)
  const [difficulty, setDifficulty] = useState('')
  const [isGameOver, setIsGameOver] = useState(false)
  const [result, setResult] = useState('')
  const [bestScore, setBestScore] = useState(0) //Implement 
  const [score, setScore] = useState(0)
  const [clickedCharacters, setClickedCharacters] = useState([])

  function reset() {
    setIsPlaying(false)
    setDifficulty('')
    setIsGameOver(false)
    setResult('')
    setScore(0)
  }
  
  function restart() {
    setIsGameOver(false)
    setResult('')
    setScore(0)
    setClickedCharacters([])
  }

  return (
    <>
    {isPlaying ? (
      <>
        <Header
          reset={reset}
          score={score}
          bestScore={bestScore}
        />
        <Playing 
          difficulty={difficulty}
          setIsGameOver={setIsGameOver}
          isGameOver={isGameOver}
          result={result}
          setResult={setResult}
          restart={restart}
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
          clickedCharacters={clickedCharacters}
          setClickedCharacters={setClickedCharacters}
        />
        <Footer />
      </>
    ) : (
      <>
        <Homepage 
          setIsPlaying={setIsPlaying}
          setDifficulty={setDifficulty}
        />
        <Footer />
      </>
    )
    }
    </>
  )
}

