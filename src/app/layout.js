import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<header className='fixed top-0 w-full z-10'>
					<Navbar />
				</header>
				<main className=''>{children}</main>
				<footer className=''>
					<Footer />
				</footer>
			</body>
		</html>
	)
}
