import { Link } from 'react-router-dom';
import '../../style/Home/RentalThumbnail.css';

export default function RentalThumbnail({ rental }) {
	let linkPath = `/rental/${rental.id}`;
	let linkDescription = `rental${rental.id}`;
	return (
		<Link to={linkPath} aria-label={linkDescription} className='link'>
			<div className='rentalThumbnailContainer'>
				<div className='rentalThumbnailPictureContainer'>
					<img
						className='rentalThumbnailPicture'
						src={rental.cover}
						alt='Rental cover picture'
					/>
				</div>
				<div className='rentalThumbnailOverlay'></div>
				<h3 className='rentalThumbnailTitle'>{rental.title}</h3>
			</div>
		</Link>
	);
}
