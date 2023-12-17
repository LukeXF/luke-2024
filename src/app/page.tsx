"use client"
import styled from '@emotion/styled';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import useEmblaCarousel from "embla-carousel-react";
import {Container, Typography} from "@mui/joy";
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'


import logoChupa from '/public/logos/logo-chupa.png';
import logoGuuci from '/public/logos/logo-guuci.png';
import logoIqos from '/public/logos/logo-iqos.png';
import logoPhilips from '/public/logos/logo-philips.png';
import logoRollsRoyce from '/public/logos/logo-rollsroyce.png';
import logoUos from '/public/logos/logo-uos.png';


export default function Home() {
	// Add plugin
	const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({
		delay: 3000,
		stopOnInteraction: true,
	})])

	return (
		<Styles>
			<Navbar/>
			<Hero/>
			<Container>
				<Typography>Providing tech consultancy services to well known brands</Typography>
				<div className="embla" ref={emblaRef}>
					<div className="embla__container">
						<div className="embla__slide"><Image src={logoChupa} alt="Chupa Chups Logo"/></div>
						<div className="embla__slide"><Image src={logoGuuci} alt="Chupa Chups Logo"/></div>
						<div className="embla__slide"><Image src={logoIqos} alt="Chupa Chups Logo"/></div>
						<div className="embla__slide"><Image src={logoPhilips} alt="Chupa Chups Logo"/></div>
						<div className="embla__slide"><Image src={logoRollsRoyce} alt="Chupa Chups Logo"/></div>
						<div className="embla__slide"><Image src={logoUos} alt="Chupa Chups Logo"/></div>
						<div className="embla__slide"><Image src={logoChupa} alt="Chupa Chups Logo"/></div>
						<div className="embla__slide"><Image src={logoGuuci} alt="Chupa Chups Logo"/></div>
						<div className="embla__slide"><Image src={logoIqos} alt="Chupa Chups Logo"/></div>
						<div className="embla__slide"><Image src={logoPhilips} alt="Chupa Chups Logo"/></div>
						<div className="embla__slide"><Image src={logoRollsRoyce} alt="Chupa Chups Logo"/></div>
						<div className="embla__slide"><Image src={logoUos} alt="Chupa Chups Logo"/></div>
					</div>
				</div>
			</Container>
		</Styles>
	)
}

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
					width: 5em;
					height: 5em;
				}

			}
		}
	}
`;
