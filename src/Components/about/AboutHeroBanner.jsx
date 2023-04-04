import '../../style/About/AboutHeroBanner.css';
import heroBannerPicture from '../../assets/about_banner.png';

export default function AboutHeroBanner() {
	return (
		<section class='top-banner-section'>
			<div class='banner-image-div'>
				<img class='banner-image' src={heroBannerPicture} alt='Banner Image' />
			</div>
		</section>
	);
}
