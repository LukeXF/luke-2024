"use client"
import styled from '@emotion/styled';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import useEmblaCarousel from "embla-carousel-react";
import {Container} from "@mui/joy";


export default function Home() {
	const [emblaRef] = useEmblaCarousel()

	return (
		<Styles>
			<Navbar/>
			<Hero/>
			<Container className="embla" ref={emblaRef}>
				<div className="embla__container">
					<div className="embla__slide">Slide 1</div>
					<div className="embla__slide">Slide 2</div>
					<div className="embla__slide">Slide 3</div>
				</div>
			</Container>
		</Styles>
	)
}

const Styles = styled.div`
	.embla {
		overflow: hidden;
	}

	.embla__container {
		display: flex;
	}

	.embla__slide {
		flex: 0 0 30%;
		min-width: 0;
	}
`;
