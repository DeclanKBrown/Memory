import './styles/footer.css'

export default function Footer({ musicIsOn, setMusicIsOn, soundIsOn, setSoundIsOn }) {
    return (
        <div className='footer'>
            <div className='sounds-container'>
                <button onClick={() => soundIsOn ? setSoundIsOn(false) : setSoundIsOn(true) } className="footer-button" id='sound'>
                    {soundIsOn ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9V15H7L12 20V4L7 9H3M16 15H14V9H16V15M20 19H18V5H20V19Z" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,3.64L21.36,19.36L19.95,20.78L16,16.83V20L11,15H7V9H8.17L4.22,5.05L5.64,3.64M16,4V11.17L12.41,7.58L16,4Z" /></svg>
                    )}
                </button> 

                <button onClick={() => musicIsOn ? setMusicIsOn(false) : setMusicIsOn(true) } className="footer-button" id='music'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z" /></svg></button> 
            </div>
            <button className="footer-button" id='help'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" /></svg></button> 
        </div>
    )
}