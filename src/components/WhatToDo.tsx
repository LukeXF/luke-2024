import {Box, Typography, Container, Stack} from "@mui/joy";
import styled from '@emotion/styled';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const WhatToDo = () => {
	// Add plugin
	const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({
		delay: 3000,
		stopOnInteraction: true,
	})])

	return (
		<Styles>
			<Container>
				<Typography level="h1">What do I do?</Typography>
				<Stack>
					<Box sx={{width: '48%'}}>
						<Typography level="h2">Contract CTO</Typography>
						<Typography level="body-md">
							I leverage extensive tech expertise to drive innovation, optimise operations,
							and guide your team towards achieving strategic tech goals.
						</Typography>
					</Box>

					<Box sx={{width: '48%'}}>
						<Typography level="h2">Business Advisor</Typography>
						<Typography level="body-md">
							I offer strategic guidance around businesses online presence, website
							and tech solutions to propel business growth.
						</Typography>
					</Box>

					<Box sx={{width: '48%', marginTop: 2}}>
						<Typography level="h2">Digital Marketing</Typography>
						<Typography level="body-md">
							I improve brand's image and online presence through UX and SEO to build
							websites and marketing campaigns that are highly converting.
						</Typography>
					</Box>

					<Box sx={{width: '48%', marginTop: 2}}>
						<Typography level="h2">Tech Mentor</Typography>
						<Typography level="body-md">
							I have given personal guidance and industry knowledge to empower over 60
							people to enter into the tech industry to achieve their career dreams.
						</Typography>
					</Box>
				</Stack>
			</Container>
		</Styles>
	);
};

export default WhatToDo;


const Styles = styled.div`
	background: linear-gradient(0deg, #17365C 0%, #2168BC 50%);
	
	
`;

This XML file does not appear to have any style information associated with it. The document tree is shown below.
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<url>
		<loc>https://and-element.com/about</loc>
		<lastmod>2024-01-02T10:58:42.017Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/blog</loc>
		<lastmod>2024-01-02T10:58:42.017Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/blog/what-are-the-benefits-of-custom-app-development</loc>
		<lastmod>2024-01-02T10:58:42.017Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/blog/why-is-web-accessibility-so-important</loc>
		<lastmod>2024-01-02T10:58:42.017Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/blog/how-to-mobile-optimise-your-website</loc>
		<lastmod>2024-01-02T10:58:42.017Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/blog/10-tips-to-perfect-your-website-s-user-experience</loc>
		<lastmod>2024-01-02T10:58:42.017Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/blog/when-is-it-time-to-rebrand</loc>
		<lastmod>2024-01-02T10:58:42.017Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/blog/what-are-the-differences-between-i-os-and-android-app-development</loc>
		<lastmod>2024-01-02T10:58:42.017Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/blog/what-to-consider-when-building-a-brand</loc>
		<lastmod>2024-01-02T10:58:42.017Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/blog/do-i-need-a-cookie-popup-on-my-website</loc>
		<lastmod>2024-01-02T10:58:42.017Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/blog/website-launch</loc>
		<lastmod>2024-01-02T10:58:42.017Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/contact</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/app-development</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/api-integration</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/android-app-development</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/ios-app-development</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/react-native-app-development</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/digital-marketing</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/website-audit</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/e-commerce</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/website-development</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/web-gl-and-three-js</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/pwa-development</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/graphic-design</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/logo-design</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/animation-and-motion-graphics</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/website-audit-ux-review</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/brand-guidelines</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/brand-strategy</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/admin-panel</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/react-js-development</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/web-design</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/projects</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/projects/retreat-east</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/projects/university-of-suffolk</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/projects/skipper-my-boat</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/projects/live-you</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/contact</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/privacy-policy</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/terms-and-conditions</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/case-studies/a-to-b-tyres</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/services/web-power-apps</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://and-element.com/projects/greyzip</loc>
		<lastmod>2024-01-02T10:58:42.018Z</lastmod>
		<priority>0.8</priority>
	</url>
</urlset>
