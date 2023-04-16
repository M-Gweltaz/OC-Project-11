import { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AboutHeroBanner from '../Components/about/AboutHeroBanner';
import MainAbout from '../Components/about/MainAbout';

export default function About({ activePage, setActivePage }) {
	useEffect(() => {
		setActivePage('aboutPage');
	});
	return (
		<div className='container'>
			<div className='container_content'>
				<Header activePage={activePage} />
				<AboutHeroBanner />
				<MainAbout />
			</div>
			<Footer />
		</div>
	);
}
