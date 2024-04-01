import {Typography, Container, Grid, Button} from "@mui/joy";
import styled from '@emotion/styled';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import React from "react";

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
					<Grid xs={8}>
						<Typography level="h2">Ready to get started?</Typography>
						<Typography>I’ve helped hundreds of businesses grow and succeed online. Book a free 30-minute consultation to see how my experiences and skillsets can help you.</Typography>
					</Grid>
					<Grid xs={4} className="button">
						<Button color={'primary'} size="lg">Book a call</Button>
					</Grid>
				</Grid>
			</Container>
		</Styles>
	);
};

export default LogoSlider;


const Styles = styled.div`
	padding: 6rem 0;
	margin: 4rem 0;
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
`;
