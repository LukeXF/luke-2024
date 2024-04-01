import styled from '@emotion/styled';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import {Card, Container, Grid, Typography, Stack} from "@mui/joy";
import React, {useState} from "react";
import Image from "next/image";
import benStacy from '/public/reviews/ben-stacy.png';
import peterCochrane from '/public/reviews/peter-cochrane.png';
import ruthPaton from '/public/reviews/ruth-paton.png';

const LogoSlider = () => {
	// Add plugin
	const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({
		delay: 3000,
		stopOnInteraction: true,
	})])

	const testimonials = [
		{
			name: "Peter Cochrane OBE",
			role: "Ex-CTO, BT Group Plc",
			testimonial: "There is nothing like a change of career for creating a tidal wave of disruption; and after decades of leading industry, I was ready for a change. This needed capable hands and minds, but serendipitously, I met &Element! After working with them over 2 months we created my new brand and website. Luke and his team are the best I have ever worked with, and therefore come with my full support and highest recommendation.",
			photo: peterCochrane
		},
		{
			name: "Ruth Paton",
			role: "Manager, University of Suffolk",
			testimonial: "We reached out to &Element to help us create the branding strategy for Entrepreneurs Forge, which is an immersive development programme designed to help personal resilience and economic recovery and growth in Suffolk. The team worked with us through many research sessions to build a brand that delivered to exactly how we wanted.",
			photo: ruthPaton
		},
		{
			name: "Ben Stacy",
			role: "CEO, Forge Relations",
			testimonial: "We have worked with Luke and &Element on a number of prototypes over the years, which has led to many successful projects together. Luke is a delight to work with and I wish him the best of luck in future endeavours.",
			photo: benStacy
		}];
	const [selectedReview, setSelectedReview] = useState(0);

	return (
		<Styles>
			<Container>
				<Typography level="h2">Testimonials</Typography>
				<Grid container spacing={2} sx={{flexGrow: 1}}>
					<Grid xs={12}>
						<Card className="card card-main">
							<Typography level="body-md">
								{testimonials?.[selectedReview]?.testimonial}
							</Typography>
						</Card>
					</Grid>
					{testimonials?.map((review, index) => <Grid xs={12} md={4} key={index}>
						<Card className={`card card-clickable ${selectedReview === index ? 'card-active' : ''}`} onClick={() => setSelectedReview(index)}>
							<Stack direction="row">
								<Image src={review?.photo} alt={`${review?.name} avatar`} width="60" height="60"
								       className="avatar"/>
								<Typography level="body-md">
									<Typography><b>{review?.name}</b></Typography><br/>
									<Typography>{review?.role}</Typography>
								</Typography>
							</Stack>
						</Card>
					</Grid>)}
				</Grid>
			</Container>
		</Styles>
	);
};

export default LogoSlider;


const Styles = styled.div`
	margin: 2rem 0;

	h2 {
		font-size: 2.5rem;
		margin: 2rem 0;
	}

	.card {
		background-color: #f3f4f5;
		border: 1px solid #f3f4f5;
		margin-bottom: 0.25rem;
		padding: 2rem;
		transition: all 0.3s ease-in-out;

		.avatar {
			border-radius: 50%;
			margin-right: 1rem;
			margin-top: -6px;
			margin-bottom: -6px;
		}

		
		&.card-active {
			border: 1px solid #2168BC;
		}

		&.card-main {
			min-height: 165px;
			display: flex;
			justify-content: center;
		}
		
		&.card-clickable {
			cursor: pointer;
			&:hover {
				border: 1px solid rgba(33, 104, 188, 0.5);
			}
		}
	}
`;
