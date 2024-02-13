import Link from 'next/link';
import React from 'react';

export default function Landing() {
	return (
		<section className=' relative bg-landingHero bg-no-repeat bg-cover bg-center w-[100vw] h-[100vh] overflow-hidden'>
			<div className=' bg-[rgba(0,0,0,0.7)] absolute top-0 left-0 w-full h-full'>
				<div className='text-white h-[100%] w-[80%] m-auto flex flex-col  gap-6 items-center justify-center text-center'>
					<h1 className=' text-5xl md:text-7xl text-primary font-bold'>
						{' <'}
						<code>Dev_Social</code>
						{'/>'}
					</h1>
					<p className='text-2xl'>
						Create a developer profile/portfolio, share posts and get help from
						other developers
					</p>
					<div className='m-2'>
						<Link
							href='/register'
							className='hover:opacity-80 text-2xl font-bold bg-primary rounded-md text-[#fff] p-[0.4rem,1.3rem] btn-primary cursor-pointer mr-2 ease-in transition-all px-4 py-2 '
						>
							Sign Up
						</Link>
						<Link
							href='/login'
							className='hover:opacity-80 text-2xl font-bold text-[#333] p-[0.4rem,1.3rem] px-4 py-2 cursor-pointer mr-2 rounded-md ease-in transition-all bg-light'
						>
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
