import RentalThumbnail from './RentalThumbnail';
import '../../style/Home/MainHome.css';

export default function MainHome({ rentalData }) {
	console.log(rentalData);
	let rentalThumbnailArray = rentalData.map((rental) => (
		<article key={rental.id}>
			<RentalThumbnail rental={rental} />
		</article>
	));
	return (
		<>
			<main className='mainHome'>{rentalThumbnailArray}</main>
		</>
	);
}
