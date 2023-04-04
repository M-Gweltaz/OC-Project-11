import '../style/DropDownMenu.css';

export default function DropDownMenu({ title, text, list }) {
	return (
		<section className='DropDownMenu'>
			<div className='DropDownMenu_title'>
				<h3>{title}</h3>
			</div>
			{text != null && <div className='DropDownMenu_text'>{text}</div>}
			{list != null && <div className='DropDownMenu_list'>{list}</div>}
		</section>
	);
}
