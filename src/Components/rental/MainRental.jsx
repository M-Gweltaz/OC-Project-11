import { useState } from 'react';
import DropDownMenu from '../DropDownMenu.jsx';
import TagRental from './TagRental.jsx';
import RatingRental from './RatingRental.jsx';
import '../../style/Rental/MainRental.css';

export default function MainRental({ rentalData }) {
	// destructuring the data object
	const {
		id,
		title,
		cover,
		pictures,
		tags,
		ratings,
		location,
		host,
		equipements,
		description,
	} = rentalData;

	let ownerNameHandling = host.name.split(' ');
	let ownerFirstName = ownerNameHandling[0];
	let onwerLastName = ownerNameHandling[1];
	let onwerNameRendering = (
		<div className='rentalOwnerName'>
			<p className='rentalOwnerFirstName'>{ownerFirstName}</p>
			<p className='rentalOwnerLastName'>{onwerLastName}</p>
		</div>
	);

	let rentalTagsArray = tags.map((tag) => <TagRental tag={tag} key={tag} />);
	console.log(rentalData);
	return (
		<>
			<main className='mainRental'>
				<div className='rentalHeaderContainer'>
					<div className='rentalTitle'>
						<h1 className='rentalName'>{title}</h1>
						<p className='rentalLocation'>{location}</p>
					</div>
					<div className='rentalOwner'>
						{onwerNameRendering}
						<img
							src={host.picture}
							alt={host.name}
							className='rentalOwnerPicture'
						/>
					</div>
				</div>
				<div className='rentalDetailsContainer'>
					{rentalTagsArray}
					<RatingRental rating={ratings} />
				</div>
				<div className='rentalDescriptionsContainer'>
					<DropDownMenu title='Description' text={description} width='35vw' />
					<DropDownMenu title='Équipements' list={equipements} width='35vw' />
				</div>
			</main>
		</>
	);
}
