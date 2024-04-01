import {Container, Link, Stack, Typography} from "@mui/joy";
import styled from '@emotion/styled';
import Image from 'next/image'
import profilePic from '/public/luke/luke-holiday.jpeg';

const Hero = () => {
	return (
		<Styles>
			<div className="bg"/>
			<Container className="wrapper">
				<Stack
					direction="column"
					alignItems="center"
					spacing={2}
				>
					<Image src={profilePic} alt="Luke Brown CTO" width="200" height="200"
					       className="avatar"/>
					<Stack direction="column">
						<Typography level="h1">
							Senior Tech Consultant and Contract CTO based  in London And Essex.
						</Typography>
						<Typography level="h2">
							Helping businesses navigate their online presence and grow online
							through Web Development and Digital Marketing.
						</Typography>
					</Stack>
				</Stack>
			</Container>
		</Styles>
	);
};

export default Hero;


const Styles = styled.div`
	background: rgb(0, 0, 0);
	background: linear-gradient(0deg, #17365C 0%, #2168BC 50%);
	position: relative;

	.bg {
		background: url('/snowdon.png') no-repeat;
		background-size: cover;
		background-position: center;
		position: absolute;
		height: 100%;
		width: 100%;
		opacity: 0.5;
		z-index: 1;
	}
	
	.wrapper {
		position: relative;
		max-width: 700px;
		text-align: center;
		z-index: 2;
		padding: 130px 0 170px;
		@media only screen and (max-width: 780px) {
			padding-bottom: 100px;
		}
	}
	h1, h2 {
		color: white;
		letter-spacing: 0.5px !important;
	}

	h2 {
		font-size: 20px;
		font-weight: 400;
		margin-top: 20px;
		text-transform: unset;
		text-align: center;
	}

	.avatar {
		border-radius: 50%;
	}
`;
