import './footer.scss';
import logo_footer from '../assets/logo_footer.png'

function Footer (){
    return (
        <div className="footer"> 
            <img src={logo_footer} alt="kasa logo noir et blanc"/>
            <p>© 2020 Kasa. <br className="mobile-break"/>  All rights reserved</p>
        </div>
    )
}

export default Footer