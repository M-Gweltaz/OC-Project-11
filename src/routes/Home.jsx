import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HomeHeroBanner from '../Components/home/HomeHeroBanner';

export default function Home() {
	return (
		<>
			<div className='container'>
				<div className='container_content'>
					<Header />
					<HomeHeroBanner />
				</div>
				<Footer />
			</div>
		</>
	);
}
