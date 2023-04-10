// react dom
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Rental from '../pages/Rental';
import Error from '../pages/Error';
import '../style/App.css';
import data from '../data/data_api.json';

export default function App() {
	// accessing and transfering the data as a State
	const [rentalsDatas, setRentalsDatas] = useState(data);

	return (
		<>
			<Routes>
				<Route path='/' element={<Home rentalsDatas={rentalsDatas} />} />
				<Route path='/about' element={<About />} />
				<Route
					path='/rental/:id'
					element={<Rental rentalsDatas={rentalsDatas} />}
				/>
				<Route path='/*' element={<Error />} />
			</Routes>
		</>
	);
}
