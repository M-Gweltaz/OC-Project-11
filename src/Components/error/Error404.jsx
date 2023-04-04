import { Link } from 'react-router-dom';
import '../../style/Error404/Error404.css';

export default function Error404() {
	return (
		<>
			<main className='error404'>
				<h1>404</h1>
				<p className='error404_message'>
					Oups! la page que vous demandez n'existe pas.
				</p>
				<Link to='/' aria-label='homepage navigation'>
					<p className='homepage_link'>Retourner sur la page d'accueil</p>
				</Link>
			</main>
		</>
	);
}
