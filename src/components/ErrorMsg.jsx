import './errorMsg.scss'
import { Link } from 'react-router-dom'

function ErrorMsg(){
    return(
        <>
        <div className='error-404'>404</div>
        <p className='oups'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className='error-link'>
            <p>Retourner sur la page d’accueil</p>
        </Link>
        </>
    )
}

export default ErrorMsg