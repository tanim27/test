import Link from 'next/link'

const Navbar = () => {
	return (
		<header>
			<div className='w-full bg-white fixed top-0 left-0 flex justify-between items-center'>
				<h1>Navbar</h1>
				<nav>
					<Link href='/'>Home</Link>
					<Link href='/contact'>Contact</Link>
					<Link href='/works'>Works</Link>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
