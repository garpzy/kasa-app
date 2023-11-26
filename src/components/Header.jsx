import logo from '../assets/logo.png'
import './header.scss'

function Header(){
    return (
        <div className='header'>
            <img src={logo} alt='logo.png'/>
        </div>

    )
}

export default Header