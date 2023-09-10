import './homepage.css'
import logo from '../../assets/logo.png'

export default function Homepage() {
    return (
        <div className='main'>
            <img className='logo' src={logo} />
            <h1 className='game-title'>Memory Game</h1>
            <div className="set-difficulty">
                <button className='select'>Easy</button>
                <button className='select'>Medium</button>
                <button className='select'>Hard</button>
            </div>
        </div>
    )
}