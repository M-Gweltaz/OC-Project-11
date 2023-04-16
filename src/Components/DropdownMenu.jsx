import '../style/DropDownMenu.css';
import arrowDropDown from '../assets/arrow_down.png';
import arrowDropUp from '../assets/arrow_up.png';

import { useState } from 'react';

export default function DropDownMenu({ title, text, list, width }) {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const handleClick = () => {
		setMenuOpen((current) => !current);
	};

	return (
		<>
			{isMenuOpen ? (
				<section
					className='DropDownMenu DropDownMenuOpen'
					style={{ width: width }}
				>
					{' '}
					<div className='DropDownMenu_title' onClick={handleClick}>
						<h3>{title}</h3>
						{isMenuOpen ? (
							<img src={arrowDropUp} alt='menu déroulant' />
						) : (
							<img src={arrowDropDown} alt='menu déroulant' />
						)}
					</div>
					{text && isMenuOpen && (
						<div className='DropDownMenu_text'>{text}</div>
					)}
					{list && isMenuOpen && list.length > 0 && (
						<ul className='DropDownMenu_list'>
							{list.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					)}
				</section>
			) : (
				<section className='DropDownMenu' style={{ width: width }}>
					{' '}
					<div className='DropDownMenu_title' onClick={handleClick}>
						<h3>{title}</h3>
						{isMenuOpen ? (
							<img src={arrowDropUp} alt='menu déroulant' />
						) : (
							<img src={arrowDropDown} alt='menu déroulant' />
						)}
					</div>
					{text && isMenuOpen && (
						<div className='DropDownMenu_text'>{text}</div>
					)}
					{list && isMenuOpen && list.length > 0 && (
						<ul className='DropDownMenu_list'>
							{list.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					)}
				</section>
			)}
		</>
	);
}
