import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AboutHeroBanner from '../Components/about/AboutHeroBanner';
import MainAbout from '../Components/about/MainAbout';

export default function About() {
	return (
		<div className='container'>
			<div className='container_content'>
				<Header />
				<AboutHeroBanner />
				<MainAbout />
			</div>
			<Footer />
		</div>
	);
}
