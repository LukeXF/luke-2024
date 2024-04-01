"use client"
import styled from '@emotion/styled';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import WhatToDo from "@/components/WhatToDo";
import AboutMe from "@/components/AboutMe";
import SuccessStories from "@/components/SuccessStories";
import Testimonials from "@/components/Testimonials";
import LogoList from "@/components/LogoList";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<Styles>
			<Navbar/>
			<Hero/>
			<LogoSlider/>
			<WhatToDo/>
			<AboutMe/>
			<SuccessStories/>
			<LogoList/>
			<CallToAction/>
			{/*// blogs*/}
			{/*// contact form*/}
			{/*<BlueLogoSlider/>*/}
			<Testimonials/>
			<Footer/>
		</Styles>
	)
}

const Styles = styled.div`
	
`;
