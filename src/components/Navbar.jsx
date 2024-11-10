import Link from 'next/link'

const Navbar = () => {
	return (
		<header>
			<div className='w-full bg-white text-black fixed top-0 flex justify-between items-center'>
				<h1>Navbar</h1>
				<nav className='flex gap-2'>
					<Link href='/'>Home</Link>
					<Link href='/contact'>Contact</Link>
					<Link href='/works'>Works</Link>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
