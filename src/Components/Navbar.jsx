import { Link } from 'react-router-dom';

import '../style/Navbar.css';

export default function Navbar() {
	return (
		<>
			<nav className='navbar'>
				<ul>
					<Link to='/' aria-label='homepage navigation' className='link'>
						<li>Accueil</li>
					</Link>
					<Link to='/about' aria-label='about page navigation' className='link'>
						<li>A Propos</li>
					</Link>
				</ul>
			</nav>
		</>
	);
}
