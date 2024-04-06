import {Container, Link, Stack, Typography} from "@mui/joy";
import {format, differenceInDays} from "date-fns";

const LocationCard = ({title, startDate, endDate, miles, background}: {
	title: string;
	startDate: string;
	endDate: string;
	miles: number;
	background: string;
}) => {

	const start = format(new Date(startDate), "io LLL");
	const year = format(new Date(startDate), "yyyy");
	const end = format(new Date(endDate), "io LLL");
	const daysBetween = differenceInDays(endDate, startDate);

	return (
		<Stack className="location-card"
		       sx={{
			       '&::before': {
				       background: `url('${background}')`
			       }
		       }}
		       direction="row"
		       alignItems="flex-end"
		>
			<Container>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"

					spacing={2}
				>
					<Typography level="h1" fontSize="h3">{title}</Typography>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						spacing={6}
					>
						<Stack
							direction="column"
							spacing={2}
						>
							<Typography level="h3" fontSize="30px">{year}</Typography>
							<Typography level="h4" fontSize="15px">{start} - {end}</Typography>
						</Stack>
						<Stack
							direction="column"
							spacing={2}
						>
							<Typography level="h3" fontSize="30px" fontWeight="bold">{daysBetween}</Typography>
							<Typography level="h4" fontSize="15px">Days</Typography>
						</Stack>
						<Stack
							direction="column"
							spacing={2}
						>
							<Typography level="h3" fontSize="30px" fontWeight="bold">{miles}</Typography>
							<Typography level="h4" fontSize="15px">Miles</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</Stack>
	);
};

export default LocationCard;
