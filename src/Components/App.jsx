// react dom
import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Rental from '../routes/Rental';
import Error from '../routes/Error';
import '../style/App.css';

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/rental/:id' element={<Rental />} />
				<Route path='/*' element={<Error />} />
			</Routes>
		</>
	);
}
