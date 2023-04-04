import logoWhite from '../assets/logo_white.png';
import '../style/footer.css';

export default function Footer() {
	return (
		<footer className='footer'>
			<img src={logoWhite} alt='Kasa logo' />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
