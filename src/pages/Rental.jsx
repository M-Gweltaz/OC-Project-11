import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Rental({ rentalData }) {
	const params = useParams();
	const id = params.id;

	const rentalIdExist = rentalData.find((rental) => rental.id === id);

	if (!rentalIdExist) {
		// Handle case where id is not in rentalData array...
		return <Navigate to='/' />;
	}

	// Render rentalItem as needed...
	return (
		<>
			<div className='container'>
				<div className='container_content'>
					<Header />
				</div>
				<Footer />
			</div>
		</>
	);
}
