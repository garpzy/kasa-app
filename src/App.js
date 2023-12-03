import './App.css';
import './index.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
// import Logement from './pages/Logement/Logement';
import About from './pages/About/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<div className='main'>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<About />}/>
					{/* <Route path="/logement:id" element={<Logement />}/> */}
				</Routes>
			</div>
			<Footer />
		</>
	);
}


export default App;