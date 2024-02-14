import {Box, Typography, Container, Stack, Card, Chip, ToggleButtonGroup, Button} from "@mui/joy";
import styled from '@emotion/styled';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import React, {useState} from "react";
import {Masonry} from '@mui/lab';

const SuccessStories = () => {
		// Add plugin
		const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({
			delay: 3000,
			stopOnInteraction: true,
		})])

		const [type, setType] = useState('All');
		const types = ['All', 'Contract CTO', 'Business Advisor', 'Digital Marketing', 'Tech Mentor'];

		const clients = [
			{
				name: "Skipper My Boat",
				tagline: "The AirBnB for boats",
				type: "Contract CTO",
				description: "I created the MVP of the platform in a weekend which quickly allowed the SMB team to secure funding.\nOver four years I built a technical team that took the platform from zero boats to over 32,000 registered boats.",
				image: "skipper-my-boat.png",
				dates: "2017-2021",
				hideBorder: true,
				facts: [{
					title: "460k",
					description: "monthly visitors"
				}, {
					title: "32k",
					description: "boats"
				}, {
					title: "3",
					description: "dashboards"
				}]
			},
			{
				name: "&Element",
				type: "Contract CTO",
				tagline: "AI/Digital Consultancy",
				description: "Today I have grown &Element to a team of 10 specialising in AI, websites and UX/SEO services.\nWe focus on building bespoke automation tools and intelligent dashboards for businesses to help them make better decisions and save time.",
				image: "and-element.png",
				dates: "2015-present",
				ceo: true,
				facts: [{
					title: "8",
					description: "years running"
				}, {
					title: "10+",
					description: "team members"
				}, {
					title: "141",
					description: "projects"
				}]
			},
			{
				name: "Forge Relations",
				type: "Contract CTO",
				tagline: "Influencer Marketing Systems",
				description: "Worked with this USA-based marketing company on many projects. Most notably the annual Gundies Awards.\nEach year in Janaury receives over 2m domain loads with $30,000 of prizes given out to lucky voters.",
				image: "forge-relations.png",
				dates: "2018-2020",
				hideBorder: true,
				facts: [{
					title: "2m+",
					description: "domain loads"
				}, {
					title: "313k",
					description: "votes"
				}, {
					title: "85k",
					description: "signups"
				}]
			},
			{
				name: "MaekerSuite",
				type: "Contract CTO",
				tagline: "10x video creation using AI",
				description: "Record great talking head video faster than ever. Write your scripts and record yourself using our teleprompter app.\nI took the iOS app and replicated functionality onto a new SaaS web dashboard along with integrating 9 other AI-based tools.",
				image: "maekersuite.png",
				dates: "2021-2022",
				facts: [{
					title: "2.1k",
					description: "daily users"
				}, {
					title: "9",
					description: "AI-based tools"
				}, {
					title: "50k+",
					description: "users"
				},]
			},
			{
				name: "Merlin Cloud",
				type: "Contract CTO",
				tagline: "Scalable Marketing SaaS platform",
				description: "A range of household brands already use Merlin Cloud to deploy digital and physical marketing campaigns online and in-store.\nThe platform is truly scalable, supports thousands of interactions a second and includes AI heatmaps as a core feature.",
				image: "merlin-cloud.png",
				dates: "2023-present",
				ceo: true,
				facts: [{
					title: "100k",
					description: "interactions per-second"
				}, {
					title: "45m",
					description: "data points"
				}, {
					title: "26",
					description: "pre-built apps"
				}]
			},
			{
				name: "Galactic Servers",
				type: "Contract CTO",
				tagline: "Game server hosting",
				description: "Setup while I was in college my first venture featured hosting tens of thousands of players at its peak daily\nIn 2015 I sold this company to a larger hosting provider and used the funds to start &Element.",
				image: "galactic-servers.png",
				dates: "2012-2015",
				ceo: true,
				facts: [{
					title: "325k",
					description: "unique players"
				}, {
					title: "66TB",
					description: "data transferred"
				}, {
					title: "2216",
					description: "orders placed"
				}]
			},
			{name: "bus", type: "Business Advisor", description: "4"},
		]
		return <Styles>
			<Container>
				<Typography level="h2">Success Stories</Typography>
				<ToggleButtonGroup className="controls">
					{types.map((t, index) => (
						<Button color={type === t ? 'primary' : 'neutral'} key={index}
						        onClick={() => setType(t)}>{t}</Button>
					))}
				</ToggleButtonGroup>

				<Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
					{clients?.filter(client => type === 'All' || client.type === type)?.map((client, index) => (
						<Card className="card">
							{client.image && <img src={`/projects/${client.image}`} width="100%"
							                      className={client.hideBorder ? "hide-border" : ""}/>}
							<Typography level="h3">{client.name}</Typography>
							{client.tagline && <Typography level="body-md"><i>{client.tagline}</i></Typography>}
							<Box className="chip-group">
								{client.dates && <Chip
									color="primary"
									variant="solid"
									size="sm"
								>
									{client.dates}
								</Chip>}
								{type === "All" && <Chip
									// color="primary"
									variant="solid"
									size="sm"
								>
									{client.ceo ? "CEO" : client.type}
								</Chip>}
							</Box>
							<Typography level="body-md">
								{client?.description?.split('\n')?.map((line, index) => (
									<React.Fragment key={index}>
										{line}
										<br/>
										<br/>
									</React.Fragment>
								))}
							</Typography>
							<Box className='key-facts'>
								{client.facts?.map((fact, index) => (
									<Box>
										<Typography level="title-lg">{fact.title}</Typography>
										<Typography level="title-md">{fact?.description?.split(' ')?.map((line, index) => (
											<React.Fragment key={index}>
												{line}
												<br/>
											</React.Fragment>
										))}</Typography>
									</Box>
								))}

							</Box>
						</Card>
					))}
				</Masonry>
			</Container>
		</Styles>;
	}
;

export default SuccessStories;


const Styles = styled.div`
	background: white;
	margin-top: 100px;

	h2 {
		font-size: 2.5rem;
		margin: 2rem 0;
	}

	img {
		border: 2px solid #333;
		border-radius: 5px;

		&.hide-border {
			border: none;
		}
	}

	.card {
		background-color: #f3f4f5;
		border: 0;
		margin-bottom: 0.25rem;
		padding: 3rem;
	}

	.controls {
		margin: 20px 0;
	}

	i {
		margin-top: -10px;
		display: block;
	}

	.chip-group {
		display: flex;
		gap: 5px;
	}

	.key-facts {
		display: flex;
		justify-content: space-between;
		gap: 10px;

		.MuiTypography-title-md {
			line-height: 20px;
		}
	}
`;


// Skipper My Boat
// &Element
// Forge Relations
// Play Retail
// Merlin Cloud
