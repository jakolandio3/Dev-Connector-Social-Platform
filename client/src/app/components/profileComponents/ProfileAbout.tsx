import { profileFromServer } from '@/app/profiles/page';
import React, { useEffect, useState } from 'react';

export default function ProfileAbout({
	profile,
}: {
	profile: profileFromServer;
}) {
	const [firstName, setFirstName] = useState('');
	useEffect(() => {
		const {
			user: { name },
		} = profile || {};

		if (!name) {
			return;
		}
		setFirstName(name.trim().split(' ').at(0));
	}, [profile]);
	return (
		<div className='text-center mt-4 border border-primary bg-light p-6'>
			{profile.bio && (
				<>
					{' '}
					<h2 className='text-primary text-2xl font-bold '>
						{firstName}
						{"'"}s Bio
					</h2>
					<p className='border-b pb-4 border-solid border-primary'>
						{profile.bio}
					</p>
				</>
			)}

			<div className='flex justify-center text-center content-center'></div>
			<h2 className='text-primary text-2xl font-bold mt-6'>Skill Set</h2>
			<div className='grid grid-cols-3 justify-center text-center content-center'>
				{profile.skills.map((skill, index) => (
					<div key={index} className='p-4 flex flex-row gap-2 items-center '>
						<i className='fa fa-check'></i>
						<span>{skill}</span>
					</div>
				))}
			</div>
		</div>
	);
}
