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

  function restart() {
    setIsPlaying(false)
    setDifficulty('')
    setIsGameOver(false)
    setResult('')
  }

  return (
    <>
    {isPlaying ? (
      <>
        <Header
          setIsPlaying={setIsPlaying}
        />
        <Playing 
          difficulty={difficulty}
          setIsGameOver={setIsGameOver}
          isGameOver={isGameOver}
          result={result}
          setResult={setResult}
          restart={restart}
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

