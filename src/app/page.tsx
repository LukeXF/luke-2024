"use client"
import styled from '@emotion/styled';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {Container, Typography} from "@mui/joy";
import LogoSlider from "@/components/LogoSlider";
import WhatToDo from "@/components/WhatToDo";
import AboutMe from "@/components/AboutMe";
import SuccessStories from "@/components/SuccessStories";
import BlueLogoSlider from "@/components/BlueLogoSlider";


export default function Home() {

	return (
		<Styles>
			<Navbar/>
			<Hero/>
			<LogoSlider/>
			<Container>
			</Container>
			<WhatToDo/>
			<AboutMe/>
			<SuccessStories/>
			{/*// testimonials*/}
			{/*// blogs*/}
			{/*// review slider*/}
			{/*// contact form*/}
			{/*// CTA*/}
			<BlueLogoSlider/>
		</Styles>
	)
}

const Styles = styled.div`
	
`;
