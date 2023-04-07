import Error404 from '../Components/error/Error404';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Error() {
	return (
		<>
			<div className='container'>
				<div className='container_content'>
					<Header />
					<Error404 />
				</div>
				<Footer />
			</div>
		</>
	);
}
