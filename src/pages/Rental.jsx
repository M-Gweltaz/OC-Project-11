import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MainRental from '../Components/rental/MainRental';

export default function Rental({ rentalsDatas, activePage, setActivePage }) {
	useEffect(() => {
		setActivePage('rentalPage');
	});

	const params = useParams();
	const id = params.id;

	const rentalExist = rentalsDatas.find((rental) => rental.id === id);
	let [rentalData, setRentalData] = useState(rentalExist);

	if (!rentalExist) {
		// Handle case where id is not in rentalData array...*
		return <Navigate to='/error' />;
	} else {
		// Render rentalItem as needed...
		return (
			<>
				<div className='container'>
					<div className='container_content'>
						<Header activePage={activePage} />
						<MainRental rentalData={rentalData} />
					</div>
					<Footer />
				</div>
			</>
		);
	}
}
