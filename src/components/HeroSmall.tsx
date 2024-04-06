import {Container, Link, Stack, Typography} from "@mui/joy";

const Hero = ({title, description}: { title: string; description: string; }) => {
	return (
		<div className="hero-smaller">
			<Container>
				<Stack
					direction="column"
					alignItems="center"
					spacing={2}
				>
					<Typography level="h1">{title}</Typography>
					<Typography level="h2" fontSize="md" sx={{maxWidth: 650, textAlign: 'center'}}
					>{description}</Typography>
				</Stack>
			</Container>
		</div>
	);
};

export default Hero;
