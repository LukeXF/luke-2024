import Link from 'next/link';
import HeroSmall from "@/components/HeroSmall";

function HomePage() {
	return (
		<div>
			<HeroSmall title="hi"/>
			<Link href="/about">
				Travel Us
			</Link>
		</div>
	);
}

export default HomePage;
