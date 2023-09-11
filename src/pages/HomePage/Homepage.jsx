import './homepage.css'
import logo from '../../assets/logo.png'

export default function Homepage({ setIsPlaying }) {
    return (
        <div className='main'>
            <img className='logo' src={logo} />
            <h1 className='game-title'>Memory Game</h1>
            <div className="set-difficulty">
                <button className='select' onClick={() => setIsPlaying(true)}>Easy</button>
                <button className='select' onClick={() => setIsPlaying(true)}>Medium</button>
                <button className='select' onClick={() => setIsPlaying(true)}>Hard</button>
            </div>
        </div>
    )
}