import Link from 'next/link';
import React from 'react';

export default function DashboardActions() {
	return (
		<div className='flex flex-row gap-2'>
			<Link
				href={'/edit-profile'}
				className='inline-block py-2 px-5 transition-all ease-in-out duration-300  mb-1  bg-light text-[#333] rounded-xl hover:opacity-80'
			>
				<i className='fas fa-user-gear text-primary '></i>
				<span className='font-bold'>
					{'<'} Edit Profile {'/>'}
				</span>
			</Link>
			<Link
				href={'/add-experience'}
				className='inline-block py-2 px-5 transition-all ease-in-out duration-300 mb-1  bg-light text-[#333] rounded-xl hover:opacity-80'
			>
				<i className='fas fa-user-tie text-primary'></i>{' '}
				<span className='font-bold'>
					{'<'} Add Experience {'/>'}
				</span>
			</Link>
			<Link
				href={'/add-education'}
				className='inline-block py-2 px-5 transition-all ease-in-out duration-300 mb-1 bg-light text-[#333] rounded-xl hover:opacity-80'
			>
				<i className='fas fa-user-graduate text-primary'></i>{' '}
				<span className='font-bold'>
					{'<'} Add Education {'/>'}
				</span>
			</Link>
		</div>
	);
}
