import logo from '../assets/logo.png'
import './header.scss'

function Header(){
    return (
        <div className='header'>
            <img src={logo} alt='logo.png' className='logo'/>
            <ul className='menu'>
                <li> <a href="/">Accueil</a> </li>
                <li> <a href="">À propos</a> </li>
            </ul>
        </div>

    )
}

export default Header