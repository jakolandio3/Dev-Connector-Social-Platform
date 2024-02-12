import { profileFromServer } from '@/app/profiles/page';
import Link from 'next/link';

import React from 'react';

export default function ProfileItem({
	profile: { user, status, company, location, skills },
}: {
	profile: profileFromServer;
}) {
	return (
		<div className='bg-light grid grid-cols-3 grid-rows-1 rounded-md  border mb-1'>
			{user?.avatar && (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					className='justify-self-center rounded-full my-2'
					src={`http:${user?.avatar}`}
					alt='Avatar'
				></img>
			)}
			<div className='flex flex-col justify-center items-center'>
				<h2 className='text-2xl font-bold'>{user?.name}</h2>
				<p>
					<span className='italic font-semibold'>{status}</span>{' '}
					{company && <span className='font-bold'> at {company}</span>}
				</p>
				<p className='my-4'>
					{location && (
						<span className='font-light'>
							{' '}
							<i className='fas fa-location-dot text-red-700'></i> {location}
						</span>
					)}
				</p>
				<Link
					className='my-4 inline-block bg-primary text-white mr-2 py-2 px-5 rounded-xl hover:opacity-80'
					href={`/profile/${user?._id}`}
				>
					View Profile
				</Link>
			</div>
			<ul className='flex flex-col justify-center items-center'>
				<code>
					{'<'}Skills{'>'}
				</code>
				{skills.slice(0, 4).map((skill, index) => (
					<li className='text-primary font-bold' key={index}>
						{' '}
						<i className='fas fa-check'></i>
						{skill}
					</li>
				))}
				<code>
					{'<'}Skills{'/>'}
				</code>
			</ul>
		</div>
	);
}
