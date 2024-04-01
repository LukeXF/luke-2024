import styled from '@emotion/styled';
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import asics from '/public/all-logos/logo-asics.png';
import ballen from '/public/all-logos/logo-ballen.png';
import chevrolet from '/public/all-logos/logo-chevrolet.png';
import chupaChups from '/public/all-logos/logo-chupa-chups.png';
import coty from '/public/all-logos/logo-coty.png';
import gucci from '/public/all-logos/logo-gucci.png';
import iqos from '/public/all-logos/logo-iqos.png';
import mediaMarkt from '/public/all-logos/logo-media-markt.png';
import mod from '/public/all-logos/logo-mod.png';
import oxin from '/public/all-logos/logo-oxin.png';
import philips from '/public/all-logos/logo-philips.png';
import pmi from '/public/all-logos/logo-pmi.png';
import rit from '/public/all-logos/logo-rit.png';
import rollsRoyce from '/public/all-logos/logo-rolls-royce.png';
import samsung from '/public/all-logos/logo-samsung.png';
import snc from '/public/all-logos/logo-snc.png';
import uoe from '/public/all-logos/logo-uoe.png';
import uos from '/public/all-logos/logo-uos.png';


const LogoSlider = () => {
	// Add plugin
	const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({
		delay: 3000,
		stopOnInteraction: true,
	})])

	return (
		<Styles>
			{/*<Typography>Providing tech consultancy services to well known brands</Typography>*/}
			<div className="embla" ref={emblaRef}>
				<div className="embla__container">
					<div className="embla__slide"><Image src={asics} alt="asics"/></div>
					<div className="embla__slide"><Image src={ballen} alt="ballen"/></div>
					<div className="embla__slide"><Image src={chevrolet} alt="chevrolet"/></div>
					<div className="embla__slide"><Image src={chupaChups} alt="chupaChups"/></div>
					<div className="embla__slide"><Image src={coty} alt="coty"/></div>
					<div className="embla__slide"><Image src={gucci} alt="gucci"/></div>
					<div className="embla__slide"><Image src={iqos} alt="iqos"/></div>
					<div className="embla__slide"><Image src={mediaMarkt} alt="mediaMarkt"/></div>
					<div className="embla__slide"><Image src={mod} alt="mod"/></div>
					<div className="embla__slide"><Image src={oxin} alt="oxin"/></div>
					<div className="embla__slide"><Image src={philips} alt="philips"/></div>
					<div className="embla__slide"><Image src={pmi} alt="pmi"/></div>
					<div className="embla__slide"><Image src={rit} alt="rit"/></div>
					<div className="embla__slide"><Image src={rollsRoyce} alt="rollsRoyce"/></div>
					<div className="embla__slide"><Image src={samsung} alt="samsung"/></div>
					<div className="embla__slide"><Image src={snc} alt="snc"/></div>
					<div className="embla__slide"><Image src={uoe} alt="uoe"/></div>
					<div className="embla__slide"><Image src={uos} alt="uos"/></div>
				</div>
			</div>
		</Styles>
	);
};

export default LogoSlider;


const Styles = styled.div`
	margin-top: -4rem;
	z-index: 10;
	position: relative;

	@media only screen and (max-width: 780px) {
		margin-top: -2rem;
	}
	p {
		text-align: center;
		width: 100%;
		padding: 20px 0 10px;
		font-weight: bold;
	}

	.embla {
		overflow: hidden;
		z-index: 10;

		.embla__container {
			display: flex;
			
			.embla__slide {
				flex: 0 0 7%;
				min-width: 0;
				//max-width: 50px;
				img {
					aspect-ratio: 1 / 1;
					width: 7em;
					height: 7em;
					z-index: 50;
					border-radius: 5px;
					//filter: brightness(0) invert(0.4);
				}

				@media only screen and (max-width: 1670px) {
					flex: 0 0 8%;
				}
				@media only screen and (max-width: 1430px) {
					flex: 0 0 8.5%;
				}
				@media only screen and (max-width: 1300px) {
					flex: 0 0 8.75%;

					img {
						width: 6em;
						height: 6em;
					}
				}
				
				@media only screen and (max-width: 1200px) {
					flex: 0 0 9%;
				}
				@media only screen and (max-width: 1024px) {
					flex: 0 0 11%;

					img {
						width: 6em;
						height: 6em;
					}
				}
				@media only screen and (max-width: 900px) {
					flex: 0 0 13%;
				}
				@media only screen and (max-width: 780px) {
					flex: 0 0 14%;
					img {
						width: 5em;
						height: 5em;
					}
				}
				@media only screen and (max-width: 700px) {
					flex: 0 0 18%;
				}
				@media only screen and (max-width: 600px) {
					flex: 0 0 20%;
				}
				@media only screen and (max-width: 450px) {
					flex: 0 0 24%;
				}

			}
		}
	}
`;
