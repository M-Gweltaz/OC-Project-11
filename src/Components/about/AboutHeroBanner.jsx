import '../../style/About/AboutHeroBanner.css';
import heroBannerPicture from '../../assets/about_banner.png';

export default function AboutHeroBanner() {
	return (
		<section className='top-Aboutbanner-section'>
			<div className='aboutBanner-image-div'>
				<img
					className='aboutBanner-image'
					src={heroBannerPicture}
					alt='Banner Image'
				/>
			</div>
		</section>
	);
}
