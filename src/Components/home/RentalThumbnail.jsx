import '../../style/Home/RentalThumbnail.css';

export default function RentalThumbnail({ rental }) {
	return (
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
	);
}
