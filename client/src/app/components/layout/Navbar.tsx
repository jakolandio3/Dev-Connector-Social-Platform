import Link from 'next/link';

import React from 'react';
import LoginOut from './LoginOut';

export default function Navbar() {
	return (
		<nav className=' flex justify-between items-center w-full z-10 fixed top-0 border-b-2 border-primary opacity-90 px-7 py-2 text-white bg-dark '>
			<h1>
				<Link href={'/'} className='text-primary font-bold'>
					<i className='fas fa-code pr-1' />{' '}
					<code className='hidden md:inline-block'>DevSocial</code>
				</Link>
			</h1>

			<LoginOut />
		</nav>
	);
}
