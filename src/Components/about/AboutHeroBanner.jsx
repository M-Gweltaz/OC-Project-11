import '../../style/About/AboutHeroBanner.css';
import heroBannerPicture from '../../assets/about_banner.png';

export default function AboutHeroBanner() {
	return (
		<section className='top-banner-section'>
			<div className='banner-image-div'>
				<img
					className='banner-image'
					src={heroBannerPicture}
					alt='Banner Image'
				/>
			</div>
		</section>
	);
}
