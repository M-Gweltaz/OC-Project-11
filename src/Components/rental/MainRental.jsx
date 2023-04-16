import DropDownMenu from '../DropDownMenu.jsx';
import TagRental from './TagRental.jsx';
import RatingRental from './RatingRental.jsx';
import Carrousel from './Carrousel.jsx';

import '../../style/Rental/MainRental.css';

export default function MainRental({ rentalData }) {
	// destructuring the data object
	const {
		id,
		title,
		cover,
		pictures,
		tags,
		rating,
		location,
		host,
		equipments,
		description,
	} = rentalData;

	// name rendering
	let ownerNameHandling = host.name.split(' ');
	let ownerFirstName = ownerNameHandling[0];
	let onwerLastName = ownerNameHandling[1];
	let onwerNameRendering = (
		<div className='rentalOwnerName'>
			<p className='rentalOwnerFirstName'>{ownerFirstName}</p>
			<p className='rentalOwnerLastName'>{onwerLastName}</p>
		</div>
	);

	// tag
	let rentalTagsArray = tags.map((tag) => <TagRental tag={tag} key={tag} />);

	return (
		<>
			<main className='mainRental'>
				<Carrousel pictures={pictures} />
				<div className='rentalInfoContainer'>
					<div className='rentalHeaderContainer'>
						<div className='rentalTitle'>
							<h1 className='rentalName'>{title}</h1>
							<p className='rentalLocation'>{location}</p>
						</div>
						<div className='rentalTagsContainer'>{rentalTagsArray}</div>
					</div>
					<div className='rentalDetailsContainer'>
						<div className='rentalOwner'>
							{onwerNameRendering}
							<img
								src={host.picture}
								alt={host.name}
								className='rentalOwnerPicture'
							/>
						</div>
						<RatingRental rating={rating} />
					</div>
				</div>
				<div className='rentalDescriptionsContainer'>
					<DropDownMenu title='Description' text={description} width='small' />
					<DropDownMenu title='Équipements' list={equipments} width='small' />
				</div>
			</main>
		</>
	);
}
