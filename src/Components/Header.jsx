import logo from '../assets/logo.png';
import Navbar from './Navbar';
import '../style/Header.css';

export default function Banner() {
	return (
		<header className='header'>
			<img src={logo} alt='Kasa logo' />
			<Navbar />
		</header>
	);
}
