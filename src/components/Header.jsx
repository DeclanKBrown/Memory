import './styles/header.css'
import logo from '../assets/logo.png'

export default function Header({ reset, score, bestScore  }) {
    return (
        <header>
            <div className='header-logo'>
                <img className='header-logo-img' src={logo} alt='logo' onClick={() => reset()}/>
            </div>
            <div className='score-board'>
                <span className='header-score'>Score: {score}</span>
                <span className='header-best-score'>Best Score: {bestScore}</span>
            </div>
        </header>
    )
}