import Link from 'next/link';
import React from 'react';

export default function DashboardActions() {
	return (
		<div className='flex flex-row gap-4'>
			<Link
				href={'/edit-profile'}
				className='inline-block py-2 px-5 transition-all ease-in-out duration-300 w-full mb-1  bg-light text-[#333] rounded-xl hover:opacity-80'
			>
				<i className='fas fa-user-circle text-primary'></i> Edit Profile
			</Link>
			<Link
				href={'/add-experience'}
				className='inline-block py-2 px-5 transition-all ease-in-out duration-300 w-full mb-1  bg-light text-[#333] rounded-xl hover:opacity-80'
			>
				<i className='fa-brands fa-black-tie text-primary'></i> Add Experience
			</Link>
			<Link
				href={'/add-education'}
				className='inline-block py-2 px-5 transition-all ease-in-out duration-300 w-full mb-1 bg-light text-[#333] rounded-xl hover:opacity-80'
			>
				<i className='fas fa-graduation-cap text-primary'></i> Add Education
			</Link>
		</div>
	);
}
