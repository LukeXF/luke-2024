import {Container, Link, Stack, Typography} from "@mui/joy";
import styled from '@emotion/styled';

const Hero = ({title}: { title: string }) => {
	return (
		<>
			<div className="bg"/>
			<Container className="wrapper">
				<Stack
					direction="column"
					alignItems="center"
					spacing={2}
				>
					{title}
				</Stack>
			</Container>
		</>
	);
};

export default Hero;
