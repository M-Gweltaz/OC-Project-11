import { useState } from 'react';
import arrowLeft from '../../assets/arrow_left.png';
import arrowRight from '../../assets/arrow_right.png';
import '../../style/Rental/Carrousel.css';

export default function Carrousel({ pictures }) {
	//carrousel
	// current picture logic
	const [currentPicture, setCurrentPicture] = useState(0);
	// next picture arrow logic
	const handleNextPictureClick = () => {
		setCurrentPicture(
			currentPicture === pictures.length - 1 ? 0 : currentPicture + 1
		);
	};

	// previous picture arrow logic
	const handlePreviousPictureClick = () => {
		setCurrentPicture(
			currentPicture === 0 ? pictures.length - 1 : currentPicture - 1
		);
	};

	return (
		<section className='rentalPictureCarrousel'>
			<img
				className='arrowLeft'
				src={arrowLeft}
				alt='previous pictures'
				onClick={handlePreviousPictureClick}
			/>
			{pictures.map((picture, index) => {
				return (
					<div
						className={index === currentPicture ? 'pictureActive' : 'picture'}
						key={picture}
					>
						{index === currentPicture && <img src={picture}></img>}
					</div>
				);
			})}
			<img
				className='arrowRight'
				src={arrowRight}
				alt='next pictures'
				onClick={handleNextPictureClick}
			/>
			<div className='carrouselPagination'>
				{currentPicture + 1}/{pictures.length}
			</div>
		</section>
	);
}
