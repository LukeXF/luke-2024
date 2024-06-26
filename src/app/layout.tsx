"use client";
import {Inter} from 'next/font/google'
import './globals.css'
import {CssBaseline, CssVarsProvider, extendTheme} from "@mui/joy";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Analytics} from "@vercel/analytics/react"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ['latin']})

const customTheme = extendTheme({
	typography: {
		'h1': {
			// 'font-size': "50px",
			// 'text-transform': 'uppercase',
			'fontFamily': "itc-avant-garde-gothic-pro"
		},
		'h2': {
			// 'text-transform': 'uppercase',
			'fontFamily': "itc-avant-garde-gothic-pro"
		},
		'h3': {
			// 'text-transform': 'uppercase',
			'fontFamily': "itc-avant-garde-gothic-pro"
		},
		'body-md': {
			'fontFamily': "itc-avant-garde-gothic-pro"
		},

	},
});
export default function RootLayout({
	                                   children,
                                   }: {
	children: React.ReactNode
}) {
	return (
		<CssVarsProvider theme={customTheme}>
			<CssBaseline/>
			<html lang="en">
			<head>
				<meta name="description"
				      content="Unlock your business's online potential with a Senior Tech Consultant and Contract CTO in London and Essex. Web Development and Digital Marketing Specialist."/>
				<title>Luke Brown - Contract CTO in London and Essex</title>
				<meta name="viewport" content="initial-scale=1, width=device-width"/>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
				<link rel="manifest" href="/favicon/site.webmanifest"/>
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#2168bc"/>
				<link rel="shortcut icon" href="/favicon/favicon.ico"/>
				<meta name="msapplication-TileColor" content="#2168bc"/>
				<meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
				<meta name="theme-color" content="#ffffff"/>
				<meta property="og:image" content="https://luke.sx/preview.png"/>
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="twitter:image" content="https://luke.sx/preview.png"/>
			</head>
			<body className={inter.className}>
			<Navbar/>
			{children}
			<SpeedInsights/>
			<Analytics/>
			<Footer/>
			</body>

			</html>
		</CssVarsProvider>
	)
}
