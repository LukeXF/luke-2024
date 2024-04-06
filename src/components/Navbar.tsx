import {Container, Link, Stack} from "@mui/joy";
import styled from '@emotion/styled';

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
						<Link href="/">Home</Link>
						<Link href="/nomad">
							Nomad
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
	z-index: 2;

	a {
		color: white;
	}
	
	b {
		font-weight: 900;
	}
	
	.MuiLink-colorPrimary {
		&:hover {
			color: #999;
		}
	}
	.MuiLink-variantSoft {
		padding: 5px 15px;
		background: white;
		color: #2168BC;
	}
`;
