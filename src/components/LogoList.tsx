import {Typography, Container, Grid, Link} from "@mui/joy";
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

		const brands = [
			{name: "Asics", logo: asics, domain: "https://www.asics.com/"},
			{name: "Ballen Studios", logo: ballen, domain: "https://ballenstudios.com/"},
			{name: "Chevrolet", logo: chevrolet, domain: "https://www.chevrolet.com/"},
			{name: "Chupa Chups", logo: chupaChups, domain: "https://www.chupachups.co.uk/"},
			{name: "Coty", logo: coty, domain: "https://www.coty.com/"},
			{name: "Gucci", logo: gucci, domain: "https://gucci.com/"},
			{name: "IQOS", logo: iqos, domain: "https://www.iqos.com/"},
			{name: "Media Markt", logo: mediaMarkt, domain: "https://mediamarkt.de/"},
			{name: "Ministry of Defence", logo: mod, domain: "https://mod.uk"},
			{name: "Oxford Innovation", logo: oxin, domain: "https://oxfordinnovation.co.uk/"},
			{name: "Philips", logo: philips, domain: "https://www.philips.co.uk/"},
			{name: "Philip Morris International", logo: pmi, domain: "https://www.pmi.com/"},
			{name: "Rit Dye", logo: rit, domain: "https://www.ritdye.com/"},
			{name: "Rolls Royce", logo: rollsRoyce, domain: "https://www.rolls-roycemotorcars.com/"},
			{name: "Samsung", logo: samsung, domain: "https://www.samsung.com/uk/"},
			{name: "Suffolk New College", logo: snc, domain: "https://www.suffolk.ac.uk/"},
			{name: "University of Essex", logo: uoe, domain: "https://www.essex.ac.uk/"},
			{name: "University of Suffolk", logo: uos, domain: "https://uos.ac.uk/"}
		];

		return (
			<Styles>
				<Container>
					<Typography level="h2">Other companies I have worked with</Typography>
					<Grid container spacing={2} className="grid">
						{brands.map((brand, index) =>
							<Grid xs={4} key={index} sm={2}>
								<Link href={brand?.domain} target="_blank">
									<Image src={brand?.logo} alt={brand?.name}/>
								</Link>
							</Grid>
						)}
					</Grid>
				</Container>
			</Styles>
		);
	}
;

export default LogoSlider;


const Styles = styled.div`
	margin-top: 4rem;

	img {
		transition: all 0.3s ease-in-out;
		border: 1px solid #f3f4f5;
		cursor: pointer;

		&:hover {
			border: 1px solid rgba(33, 104, 188, 1);
		}
	}

	.grid {
		img {
			max-width: 100%;
			height: auto;
		}
	}

	h2 {
		font-size: 2.5rem;
		margin: 2rem 0;
	}
`;
