import { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HomeHeroBanner from '../Components/home/HomeHeroBanner';
import MainHome from '../Components/home/MainHome';

export default function Home({ rentalsDatas, activePage, setActivePage }) {
	useEffect(() => {
		setActivePage('homePage');
	});
	return (
		<>
			<div className='container'>
				<div className='container_content'>
					<Header activePage={activePage} />
					<HomeHeroBanner />
					<MainHome rentalsDatas={rentalsDatas} />
				</div>
				<Footer />
			</div>
		</>
	);
}
