import { Link } from 'react-router-dom';

import '../style/Navbar.css';

export default function Navbar({ activePage }) {
	return (
		<>
			<nav className='navbar'>
				<ul>
					<Link
						to='/'
						aria-label='homepage navigation'
						className={activePage === 'homePage' ? 'link activePage' : 'link'}
					>
						<li>Accueil</li>
					</Link>

					<Link
						to='/about'
						aria-label='about page navigation'
						className={activePage === 'aboutPage' ? 'link activePage' : 'link'}
					>
						<li>A Propos</li>
					</Link>
				</ul>
			</nav>
		</>
	);
}
