import {Typography, Container, Grid} from "@mui/joy";
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
			<Container>
				<Typography level="h2">Other companies I have worked with</Typography>
				<Grid container spacing={2} className="grid">
					<Grid xs={2}><Image src={asics} alt="asics"/></Grid>
					<Grid xs={2}><Image src={ballen} alt="ballen"/></Grid>
					<Grid xs={2}><Image src={chevrolet} alt="chevrolet"/></Grid>
					<Grid xs={2}><Image src={chupaChups} alt="chupaChups"/></Grid>
					<Grid xs={2}><Image src={coty} alt="coty"/></Grid>
					<Grid xs={2}><Image src={gucci} alt="gucci"/></Grid>
					<Grid xs={2}><Image src={iqos} alt="iqos"/></Grid>
					<Grid xs={2}><Image src={mediaMarkt} alt="mediaMarkt"/></Grid>
					<Grid xs={2}><Image src={mod} alt="mod"/></Grid>
					<Grid xs={2}><Image src={oxin} alt="oxin"/></Grid>
					<Grid xs={2}><Image src={philips} alt="philips"/></Grid>
					<Grid xs={2}><Image src={pmi} alt="pmi"/></Grid>
					<Grid xs={2}><Image src={rit} alt="rit"/></Grid>
					<Grid xs={2}><Image src={rollsRoyce} alt="rollsRoyce"/></Grid>
					<Grid xs={2}><Image src={samsung} alt="samsung"/></Grid>
					<Grid xs={2}><Image src={snc} alt="snc"/></Grid>
					<Grid xs={2}><Image src={uoe} alt="uoe"/></Grid>
					<Grid xs={2}><Image src={uos} alt="uos"/></Grid>
				</Grid>
			</Container>
		</Styles>
	);
};

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
