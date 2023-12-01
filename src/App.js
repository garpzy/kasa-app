import './App.css';
import './index.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="logement/:logementId" element={<Logement />}></Route>
//         <Route path="*" element={<Error />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// function App(){
//   return (
//     <div>
//     <BrowserRouter>
//        <Header />
//      </BrowserRouter>

//       <div>hello</div>
//     </div>
//   )
// }

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
]);

function App() {
	return (
		<div>
      		<Header />
			<Footer />
			<RouterProvider router={router}/>
		</div>
	);
}


export default App;


