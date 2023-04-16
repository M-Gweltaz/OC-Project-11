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

	const [activePage, setActivePage] = useState('homePage');

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<Home
							rentalsDatas={rentalsDatas}
							activePage={activePage}
							setActivePage={setActivePage}
						/>
					}
				/>
				<Route
					path='/about'
					element={
						<About activePage={activePage} setActivePage={setActivePage} />
					}
				/>
				<Route
					path='/rental/:id'
					element={
						<Rental
							rentalsDatas={rentalsDatas}
							activePage={activePage}
							setActivePage={setActivePage}
						/>
					}
				/>
				<Route
					path='/*'
					element={
						<Error activePage={activePage} setActivePage={setActivePage} />
					}
				/>
			</Routes>
		</>
	);
}
