import Homepage from './pages/HomePage/Homepage.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Playing from './pages/PlayingPage/Playing.jsx'
import { useState } from 'react'

export default function App() {

  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
    {isPlaying ? (
      <>
        <Header
          setIsPlaying={setIsPlaying}
        />
        <Playing />
        <Footer />
      </>
    ) : (
      <>
        <Homepage 
          setIsPlaying={setIsPlaying}
        />
        <Footer />
      </>
    )
    }
    </>
  )
}

