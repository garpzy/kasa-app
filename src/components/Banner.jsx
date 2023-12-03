// import './banner.scss'

// function Banner(text, img){
//     return (
//         <div className="banner">Chez vous, <br className="mobile-break"/>ici et ailleurs</div>
//     )
// }

// export default Banner


import './banner.scss'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Banner() {

	const [aboutPage, setAboutPage] = useState(false);

	const location = useLocation();
	
	useEffect(() => {
		if(location.pathname === '/about'){
			setAboutPage(true)
		};
		// eslint-disable-next-line
	}, [])

	return (
		<section className={aboutPage ? 'banner_about' : 'banner'}>
			{!aboutPage && <div className="banner">Chez vous, <br className="mobile-break"/>ici et ailleurs</div>}
		</section>
	)
}