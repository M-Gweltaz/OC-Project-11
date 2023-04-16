import { Link } from 'react-router-dom';

import '../style/Navbar.css';

export default function Navbar({ activePage }) {
	return (
		<>
			<nav className='navbar'>
				<ul>
					{activePage === 'homePage' ? (
						<Link
							to='/'
							aria-label='homepage navigation'
							className='link activePage'
						>
							<li>Accueil</li>
						</Link>
					) : (
						<Link to='/' aria-label='homepage navigation' className='link'>
							<li>Accueil</li>
						</Link>
					)}
					{activePage === 'aboutPage' ? (
						<Link
							to='/about'
							aria-label='about page navigation'
							className='link activePage'
						>
							<li>A Propos</li>
						</Link>
					) : (
						<Link
							to='/about'
							aria-label='about page navigation'
							className='link'
						>
							<li>A Propos</li>
						</Link>
					)}
				</ul>
			</nav>
		</>
	);
}
