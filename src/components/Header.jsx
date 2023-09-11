import './styles/header.css'
import logo from '../assets/logo.png'

export default function Header({ setIsPlaying }) {
    return (
        <header>
            <div className='header-logo'>
                <img className='header-logo-img' src={logo} alt='logo' onClick={() => setIsPlaying(false)}/>
            </div>
            <div className='score-board'>
                <span className='header-score'>Score: 0</span>
                <span className='header-best-score'>Best Score: 0</span>
            </div>
        </header>
    )
}