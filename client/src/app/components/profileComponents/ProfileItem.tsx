import { profileFromServer } from '@/app/profiles/page';
import Link from 'next/link';

import React from 'react';

export default function ProfileItem({
	profile: { user, status, company, location, skills },
}: {
	profile: profileFromServer;
}) {
	return (
		<div className='bg-light grid grid-cols-3 grid-rows-1  border mb-1'>
			{user?.avatar && (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					className='justify-self-center rounded-full'
					src={`http:${user?.avatar}`}
					alt='Avatar'
				></img>
			)}
			<div className='flex flex-col justify-center items-center'>
				<h2 className='text-2xl font-bold'>{user?.name}</h2>
				<p>
					{status} {company && <span> at {company}</span>}
				</p>
				<p className='my-4'>{location && <span>{location}</span>}</p>
				<Link
					className='my-4 inline-block bg-primary text-white mr-2 py-2 px-5 rounded-xl hover:opacity-80'
					href={`/profile/${user?._id}`}
				>
					View Profile
				</Link>
			</div>
			<ul className='flex flex-col justify-center items-center'>
				{skills.slice(0, 4).map((skill, index) => (
					<li className='text-primary' key={index}>
						{' '}
						<i className='fas fa-check'></i>
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
}
