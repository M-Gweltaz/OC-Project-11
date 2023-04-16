import { useState } from 'react';
import starRating from '../../assets/star_rating.png';
import starActiveRating from '../../assets/star_active_rating.png';
import '../../style/Rental/RatingRental.css';

export default function RatingRental({ rating }) {
	let ratingRender;
	switch (true) {
		case rating == '1':
			ratingRender = (
				<div className='ratingsContainer'>
					<img src={starRating} className='ratingStar'></img>
					<img src={starRating} className='ratingStar'></img>
					<img src={starRating} className='ratingStar'></img>
					<img src={starRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
				</div>
			);
			break;
		case rating == '2':
			ratingRender = (
				<div className='ratingsContainer'>
					<img src={starRating} className='ratingStar'></img>
					<img src={starRating} className='ratingStar'></img>
					<img src={starRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
				</div>
			);
			break;

		case rating == '3':
			ratingRender = (
				<div className='ratingsContainer'>
					<img src={starRating} className='ratingStar'></img>
					<img src={starRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
				</div>
			);
			break;

		case rating == '4':
			ratingRender = (
				<div className='ratingsContainer'>
					<img src={starRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
				</div>
			);
			break;

		case rating == '5':
			ratingRender = (
				<div className='ratingsContainer'>
					<img src={starActiveRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
					<img src={starActiveRating} className='ratingStar'></img>
				</div>
			);
			break;

		default:
			ratingRender = (
				<div className='ratingsContainer'>
					<img src={starRating} className='ratingStar'></img>
					<img src={starRating} className='ratingStar'></img>
					<img src={starRating} className='ratingStar'></img>
					<img src={starRating} className='ratingStar'></img>
					<img src={starRating} className='ratingStar'></img>
				</div>
			);
			break;
	}
	return <>{ratingRender}</>;
}
