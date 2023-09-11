import './homepage.css'
import logo from '../../assets/logo.png'

export default function Homepage({ setIsPlaying, setDifficulty }) {
    return (
        <div className='main'>
            <img className='logo' src={logo} />
            <h1 className='game-title'>Memory Game</h1>
            <div className="set-difficulty">
                <button className='select' 
                    onClick={() => {
                        setIsPlaying(true)
                        setDifficulty('easy')}
                    }>Easy</button>
                <button className='select'
                    onClick={() => {
                        setIsPlaying(true)
                        setDifficulty('medium')}
                    }>Medium</button>
                <button className='select'
                    onClick={() => {
                        setIsPlaying(true)
                        setDifficulty('hard')}
                    }>Hard</button>
            </div>
        </div>
    )
}