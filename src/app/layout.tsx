"use client";
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {CssBaseline, CssVarsProvider, extendTheme} from "@mui/joy";

const inter = Inter({subsets: ['latin']})

const customTheme = extendTheme({
	typography: {
		'h1': {
			// 'font-size': "50px",
			// 'text-transform': 'uppercase',
			'font-family': "itc-avant-garde-gothic-pro"
		},
		'h2': {
			// 'text-transform': 'uppercase',
			'font-family': "itc-avant-garde-gothic-pro"
		},
		'h3': {
			// 'text-transform': 'uppercase',
			'font-family': "itc-avant-garde-gothic-pro"
		},
		'body-md': {
			'font-family': "itc-avant-garde-gothic-pro"
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
			<meta name="viewport" content="initial-scale=1, width=device-width"/>
			<body className={inter.className}>{children}</body>
			</html>
		</CssVarsProvider>
	)
}
