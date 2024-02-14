import {Box, Typography, Container, Stack, Card, Grid, IconButton} from "@mui/joy";
import styled from '@emotion/styled';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import profilePic from '/public/luke.png';
import profilePic2 from '/public/luke.jpeg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const AboutMe = () => {
	// Add plugin
	const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({
		delay: 3000,
		stopOnInteraction: true,
	})])

	const images = [profilePic, profilePic2, profilePic];
	const [selectedIndex, setSelectedIndex] = useState(0);

	const nextImage = () => {
		if (selectedIndex === images.length - 1) return;
		setSelectedIndex(selectedIndex + 1)
	}
	const previousImage = () => {
		if (selectedIndex === 0) return;
		setSelectedIndex(selectedIndex - 1)
	}

	return (
		<Styles>
			<Container>
				<Grid container spacing={2} sx={{flexGrow: 1}}>
					<Grid xs={12} sm={8} md={6} lg={5}>
						<div className="image">
							<Box className="box" sx={{left: `-${30 - (selectedIndex * 15)}px`}}/>
							<Image src={images[selectedIndex]} alt="Luke Brown CTO" width="400" height="400"
							       className="avatar"/>
						</div>
						<div className="buttons">
							<IconButton disabled={selectedIndex === 0} variant="solid"
							            color="primary" onClick={() => previousImage()}>
								<FontAwesomeIcon icon={faArrowLeft}/>
							</IconButton>
							<IconButton disabled={selectedIndex === images.length - 1} variant="solid"
							            color="primary" onClick={() => nextImage()}>
								<FontAwesomeIcon icon={faArrowRight}/>
							</IconButton>
						</div>
					</Grid>

					<Grid xs={12} sm={4} md={6} lg={7}>
						<Typography level="h2">About me</Typography>
						<Typography level="body-md">
							Since 2012 I've been coding and building websites and software for businesses in Europe
							and North America. In 2015 I setup a digital consultancy called &Element and since then I've
							worked as a contract-CTO leading hundreds of people and projects, helping companies nail their digital growth.
						</Typography>
						<Typography level="body-md">
							I've worked from all around the world supporting businesses launch SaaS platforms, built all
							kinds of apps, improved/automated business operations and expand their online presence.
						</Typography>
						<Typography level="body-md">
							Today I help anyone from FTSE 250 companies, funded startups and new individuals new to the industry
							understand and navigate this weird and wonderful digital landscape.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Styles>
	);
};

export default AboutMe;


const Styles = styled.div`
	background: white;
	margin-top: 150px;

	h2 {
		font-size: 2.5rem;
		margin: 2rem 0;
	}

	.image {
		position: relative;
		max-width: 400px;
		margin-left: 30px;
		margin-bottom: 30px;

		.box {
			position: absolute;
			width: 200px;
			height: 200px;
			bottom: -30px;
			//left: -30px;
			background: #2168BC;
			z-index: 1;
			border-radius: 5px;
			transition: left 0.4s ease-in-out;
		}

		.avatar {
			position: relative;
			z-index: 2;
			border-radius: 5px;
		}
	}

	.buttons {
		display: flex;
		align-items: flex-end;
		flex-direction: row;
		justify-content: flex-end;
		margin-right: 35px;

		button {
			margin: 5px;
		}
	}

	p {
		margin: 20px 0;
	}
`;
