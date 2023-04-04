import '../../style/Home/HomeHeroBanner.css';
import heroBannerPicture from '../../assets/home_banner.png';

export default function HomeHeroBanner() {
	return (
		// The CSS grid that makes up the entirety of the hero image/banner image area
		<section class='top-banner-section'>
			{/* The CSS grid area that displays the image (layer 1) */}
			<div class='banner-image-div'>
				<img class='banner-image' src={heroBannerPicture} alt='Banner Image' />
			</div>
			{/* The CSS grid area that displays the semi-transparent gradient overlay (layer 2)*/}
			<div class='banner-overlay-div'></div>
			{/* The CSS grid area that displays the content (layer 3)*/}
			<div class='banner-text-div'>
				<h1>Chez vous, partout et ailleurs</h1>
			</div>
		</section>
	);
}
