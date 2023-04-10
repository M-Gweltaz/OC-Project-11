import '../../style/Rental/TagRental.css';

export default function TagRental({ tag }) {
	return (
		<div className='tagContainer'>
			<p className='tagContent'>{tag}</p>
		</div>
	);
}
