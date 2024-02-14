import {Typography} from "@mui/joy";
import styled from '@emotion/styled';
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import logoChupa from '/public/logos/logo-chupa.png';
import logoGuuci from '/public/logos/logo-guuci.png';
import logoIqos from '/public/logos/logo-iqos.png';
import logoPhilips from '/public/logos/logo-philips.png';
import logoRollsRoyce from '/public/logos/logo-rollsroyce.png';
import logoUos from '/public/logos/logo-uos.png';
import Autoplay from "embla-carousel-autoplay";

const LogoSlider = () => {
	// Add plugin
	const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({
		delay: 3000,
		stopOnInteraction: true,
	})])

	return (
		<Styles>
			<Typography>Providing tech consultancy services to well known brands</Typography>
			<div className="embla" ref={emblaRef}>
				<div className="embla__container">
					<div className="embla__slide"><Image src={logoChupa} alt="Chupa Chups Logo"/></div>
					<div className="embla__slide"><Image src={logoGuuci} alt="Guuci Logo"/></div>
					<div className="embla__slide"><Image src={logoIqos} alt="IQS Logo"/></div>
					<div className="embla__slide"><Image src={logoPhilips} alt="Philips Logo"/></div>
					<div className="embla__slide"><Image src={logoRollsRoyce} alt="Rolls Royce Logo"/></div>
					<div className="embla__slide"><Image src={logoUos} alt="University of Suffolk Logo"/></div>
					<div className="embla__slide"><Image src={logoChupa} alt="Chupa Chups Logo"/></div>
					<div className="embla__slide"><Image src={logoGuuci} alt="Guuci Logo"/></div>
					<div className="embla__slide"><Image src={logoIqos} alt="IQS Logo"/></div>
					<div className="embla__slide"><Image src={logoPhilips} alt="Philips Logo"/></div>
					<div className="embla__slide"><Image src={logoRollsRoyce} alt="Rolls Royce Logo"/></div>
					<div className="embla__slide"><Image src={logoUos} alt="University of Suffolk Logo"/></div>
				</div>
			</div>
		</Styles>
	);
};

export default LogoSlider;


const Styles = styled.div`

	p {
		text-align: center;
		width: 100%;
		padding: 20px 0 10px;
		font-weight: bold;
	}

	.embla {
		overflow: hidden;

		.embla__container {
			display: flex;

			.embla__slide {
				flex: 0 0 15%;
				min-width: 0;
				//max-width: 50px;

				img {
					aspect-ratio: 1 / 1;
					width: 7em;
					height: 7em;
					filter: brightness(0) invert(0.4);
				}

			}
		}
	}
`;
