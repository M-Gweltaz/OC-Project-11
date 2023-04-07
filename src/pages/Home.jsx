import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HomeHeroBanner from '../Components/home/HomeHeroBanner';
import MainHome from '../Components/home/MainHome';

export default function Home({ rentalData }) {
	return (
		<>
			<div className='container'>
				<div className='container_content'>
					<Header />
					<HomeHeroBanner />
					<MainHome rentalData={rentalData} />
				</div>
				<Footer />
			</div>
		</>
	);
}
