import Link from 'next/link';
import HeroSmall from "@/components/HeroSmall";
import {Container, Typography} from "@mui/joy";
import LocationCard from "@/components/LocationCard";
import {getYear} from "date-fns";

function Nomad() {

	interface ILocation {
		title: string;
		startDate: string;
		endDate: string;
		miles: number;
		background: string
	};
	const locations: ILocation[] = [
		{
			title: "Zakopane, Poland",
			startDate: "2023/12/2",
			endDate: "2023/12/5",
			miles: 85,
			background: "https://images.unsplash.com/photo-1448375240586-882707db888b"
		},
		{
			title: "London, England",
			startDate: "2022/09/2",
			endDate: "2022/09/5",
			miles: 85,
			background: "https://images.unsplash.com/photo-1448375240586-882707db888b"
		}
	]

	const groupedByYear = locations.reduce((acc: any, item: any) => {
		// Extract the year from the startDate
		const year = getYear(new Date(item.startDate));

		// If the year key doesn't exist in the accumulator, initialize it
		if (!acc[year]) {
			acc[year] = [];
		}

		// Add the item to the appropriate year group
		acc[year].push(item);

		return acc;
	}, {});

	const currentYear = new Date().getFullYear();
	const last5Years = Array.from({length: 5}, (_, i) => currentYear - i);

	return (
		<div>
			<HeroSmall title="Digital nomad"
			           description="I like to travel and work remotely, in an effort to document my journeys I’ve created this page to share my recommendations and preserve good memories."/>
			<Container>
				{last5Years.map((year, i) => (<div key={i}>
					<Typography level="h3" sx={{mt:3}}>{year}</Typography>
					{groupedByYear[year]?.map((location: ILocation, index: number) => {
						console.log({location})
						return !!location ? <LocationCard {...location} key={index}/> : <div>none</div>
					})}
					{!groupedByYear[year]?.length &&
						<Typography sx={{my: 3}} level="body-md">No trips visible for {year}</Typography>}
				</div>))}
			</Container>
			<Link href="/about">
				Travel Us
			</Link>
		</div>
	);
}

export default Nomad;
