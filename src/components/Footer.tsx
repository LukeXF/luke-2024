import {Typography, Container, Grid, Button, Stack, Link} from "@mui/joy";
import styled from '@emotion/styled';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const LogoSlider = () => {
	// Add plugin
	const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({
		delay: 3000,
		stopOnInteraction: true,
	})])

	return (
		<Styles>
			<Container>
				<Grid container spacing={2} className="grid">
					<Grid xs={6}>
						<Typography level="h2">Luke Brown CTO</Typography>
						<Stack direction="row" spacing={2} alignItems="center">
							<Link href="https://www.linkedin.com/in/luke-element/" target="_blank"><FontAwesomeIcon
								icon={faLinkedin}/></Link>
							<Link href="mailto:me@luke.sx"><FontAwesomeIcon icon={faEnvelope}/></Link>
							<Link href="/"><Typography>Home</Typography></Link>
							<Typography>·</Typography>
							<Link href="https://and-element.com"
							      target="_blank"><Typography>&Element</Typography></Link>
							<Typography>·</Typography>
							<Link href="https://merlincloud.ai" target="_blank"><Typography>Merlin
								Cloud</Typography></Link>
						</Stack>
					</Grid>
					<Grid xs={6} className="button">
						<Stack direction="column" spacing={2}>
							<Typography className="copyright">Copyright 2024 · &Element T/A. Element Softworks Ltd</Typography>
							<Typography className="other">
								Company No. 09486419 • VAT No. GB279997505<br/>
								Registered company in England and Wales 2015-2024 ©
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Styles>
	)
		;
};

export default LogoSlider;


const Styles = styled.div`
	padding: 4rem 0;
	margin: 4rem 0 0;
	background: #2168BC;

	.grid {
		.button {
			display: flex;
			align-content: center;
			align-items: center;
			justify-content: flex-end;
		}
	}

	h2 {
		font-size: 2.5rem;
		text-transform: uppercase;
		color: white;
	}

	p {
		color: white;
	}

	button {
		background: white;
		color: #2168BC;
		transition: all 0.3s ease-in-out;

		&:hover {

			background: rgba(255, 255, 255, 0.75);
			color: #2168BC;
		}
	}

	svg {
		color: white;
	}

	a {
		color: white;
	}
	
	.copyright {
		font-weight: bold;
	}
	
	.other {
		font-size: 0.8rem;
	}
`;
