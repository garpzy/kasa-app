import './App.scss';
import './index.scss';
// import "./src/assets/_variables.scss";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement'
import About from './pages/About/About';
import Error from './pages/Error/Error';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<div className='main'>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<About />}/>
					<Route path="/logement/:id" element={<Logement />}/>
					<Route path="*" element={<Error />}/>
				</Routes>
			</div>
			<Footer />
		</>
	);
}


export default App;