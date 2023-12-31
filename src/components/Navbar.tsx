import {Container, Link, Stack} from "@mui/joy";
import styled from '@emotion/styled';
import useEmblaCarousel from 'embla-carousel-react'

const Navbar = () => {
	return (
		<Styles>
			<Container>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
				>
					<b>
						Luke Brown CTO
					</b>
					<Stack
						direction="row"
						spacing={2}
					>
						<Link href="#variants">Nomad</Link>
						<Link href="#variants" variant="plain">
							Works
						</Link>
						<Link href="#variants" variant="soft">
							Contact
						</Link>
					</Stack>
				</Stack>
			</Container>
		</Styles>
	);
};

export default Navbar;


const Styles = styled.div`
	padding: 15px 0;
	background: none;
	width: 100%;
	position: absolute;
	color: white;
	text-transform: uppercase;
	font-weight: 900;
	font-size: 20px;

	a {
		color: white;
	}
`;
