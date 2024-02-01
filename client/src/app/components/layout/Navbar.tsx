import Link from 'next/link';
import React from 'react';

export default function Navbar() {
	return (
		<nav className=' flex justify-between items-center w-full z-10 fixed top-0 border-b-2 border-primary opacity-90 px-7 py-2 text-white bg-dark '>
			<h1>
				<Link href={'/'} className='hover:text-primary'>
					<span className='fas fa-code pr-1 '></span>
					DevSocial
				</Link>
			</h1>
			<ul className='flex gap-2'>
				<li>
					<Link href={'/profiles'} className='hover:text-primary'>
						Developers
					</Link>
				</li>
				<li>
					<Link href={'/register'} className='hover:text-primary'>
						Register
					</Link>
				</li>
				<li>
					<Link href={'/login'} className='hover:text-primary'>
						Login
					</Link>
				</li>
			</ul>
		</nav>
	);
}
