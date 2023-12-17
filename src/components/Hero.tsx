import {Container, Link, Stack, Typography} from "@mui/joy";
import styled from '@emotion/styled';
import Image from 'next/image'
import profilePic from '/public/luke.jpeg';

const Hero = () => {
	return (
		<Styles>

			<Container>
				<Stack
					direction="row"
					alignItems="center"
					spacing={2}
				>
					<Stack direction="column">
						<Typography level="h1">
							Senior Tech Consultant and Contract CTO based in London And Essex.
						</Typography>
						<Typography level="h2">
							Helping businesses navigate their online presence and grow online
							through Web Development and Digital Marketing.
						</Typography>
					</Stack>
					<Image src={profilePic} alt="Luke Brown CTO" width="400" height="400"
					       className="avatar"/>
				</Stack>
			</Container>
		</Styles>
	);
};

export default Hero;


const Styles = styled.div`
	background: rgb(0, 0, 0);
	background: linear-gradient(0deg, #17365C 0%, #2168BC 50%);
	padding: 120px;

	h1, h2 {
		color: white;
	}

	h2 {
		font-size: 20px;
		font-weight: 400;
		max-width: 570px;
		margin-top: 20px;
		text-transform: unset;
	}

	.avatar {
		border-radius: 50%;
	}
`;
