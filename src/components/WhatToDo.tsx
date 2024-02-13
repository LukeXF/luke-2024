import {Box, Typography, Container, Stack, Card, Grid} from "@mui/joy";
import styled from '@emotion/styled';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const WhatToDo = () => {
	// Add plugin
	const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({
		delay: 3000,
		stopOnInteraction: true,
	})])

	return (
		<Styles>
			<Container>
				<Typography level="h2">What do I do?</Typography>
				<Grid container spacing={2} sx={{flexGrow: 1}}>
					<Grid xs={12} md={6}>
						<Card className="card">
							<img src="/icons/plane_icon.svg" width="60"/>
							<Typography level="h3">Contract CTO</Typography>
							<Typography level="body-md">
								I work with companies of all sizes to drive innovation, optimise operations,
								and guide their team towards achieving the company's tech goals.
							</Typography>
						</Card>
					</Grid>

					<Grid xs={12} md={6}>
						<Card className="card">
							<img src="/icons/checklist_note_icon.svg" width="60"/>
							<Typography level="h3">Business Advisor</Typography>
							<Typography level="body-md">
								I offer strategic guidance around businesses online presence, website
								and tech solutions to propel business growth.
							</Typography>
						</Card>
					</Grid>

					<Grid xs={12} md={6}>
						<Card className="card">
							<img src="/icons/laptop_icon.svg" width="60"/>
							<Typography level="h3">Digital Marketing</Typography>
							<Typography level="body-md">
								I improve brand's image and online presence through UX and SEO to build
								websites and marketing campaigns that are highly converting.
							</Typography>
						</Card>
					</Grid>

					<Grid xs={12} md={6}>
						<Card className="card">
							<img src="/icons/smiley_emoji.svg" width="60"/>
							<Typography level="h3">Tech Mentor</Typography>
							<Typography level="body-md">
								I have given personal guidance and industry knowledge to empower over 60
								people to enter into the tech industry to achieve their career dreams.
							</Typography>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Styles>
	);
};

export default WhatToDo;


const Styles = styled.div`
	background: white;

	h2 {
		font-size: 2.5rem;
		margin: 2rem 0;
	}
	
	.card {
		background-color: #f3f4f5;
		border: 0;
		margin-bottom: 0.25rem;
		padding: 3rem;
		
	}
`;
