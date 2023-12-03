import './App.css';
import './index.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import Logement from './pages/logement/logement';
import About from './pages/About/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Home />
// 	},
// 	{
// 		path: "/logement/:id",
// 		element: <Logement />
// 	},
// 	{
// 		path: "/about",
// 		element: <About />
// 	},
// ]);

function App() {
	return (
		<>
			<div className='main'>
				<Header />
				{/* <RouterProvider router={router}/> */}
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<About />}/>
				</Routes>
			</div>
			<Footer />
		</>
	);
}


export default App;