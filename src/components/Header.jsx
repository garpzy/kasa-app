import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import './header.scss'

function Header(){
    return (
        <div className='header'>
            <NavLink to="/">
            <img src={logo} alt='logo.png' className='logo'/> 
            </NavLink>
            <ul className="menu">
                <li><NavLink to="/">
                    Accueil</NavLink>
                </li>
                <li><NavLink to="/about">
                    À propos</NavLink>
                </li>

            </ul>
        </div>

    )
}

export default Header