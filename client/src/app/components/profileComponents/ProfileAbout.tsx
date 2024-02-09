import { profileFromServer } from '@/app/profiles/page';
import React from 'react';

export default function ProfileAbout({
	profile,
}: {
	profile: profileFromServer;
}) {
	const firstName = profile.user?.name.trim().split(' ').at(0);
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
			<div className='flex justify-center text-center content-center'>
				{profile.skills.map((skill, index) => (
					<div key={index} className='p-4'>
						<i className='fa fa-check'></i> {skill}
					</div>
				))}
			</div>
		</div>
	);
}
