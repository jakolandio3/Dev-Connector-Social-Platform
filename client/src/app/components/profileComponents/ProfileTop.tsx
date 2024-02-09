import { profileFromServer } from '@/app/profiles/page';
import Link from 'next/link';
import React from 'react';

export default function ProfileTop({
	currentProfile,
}: {
	currentProfile: profileFromServer;
}) {
	return (
		<>
			<div className='flex flex-col items-center justify-center text-center text-white bg-primary p-8'>
				<img
					className='rounded-full my-1'
					src={`http:${currentProfile.user?.avatar}`}
					alt=''
				/>
				<h1 className='text-6xl mb-4'>{currentProfile.user?.name}</h1>
				<p className='text-4xl mb-4'>
					{currentProfile.status} at {currentProfile.company}
				</p>
				<p>{currentProfile.location}</p>
				{currentProfile.social && (
					<div className='mx-2 my-1 flex flex-row gap-2'>
						{currentProfile.website && (
							<Link
								href={currentProfile.website}
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fas fa-globe fa-2x hover:text-gray-500 transition-all duration-300 ease-in-out'></i>
							</Link>
						)}
						{currentProfile.social.twitter && (
							<Link
								href={currentProfile.social.twitter}
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fab fa-twitter fa-2x hover:text-gray-500 transition-all duration-300 ease-in-out'></i>
							</Link>
						)}
						{currentProfile.social.facebook && (
							<Link
								href={currentProfile.social.facebook}
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fab fa-facebook fa-2x hover:text-gray-500 transition-all duration-300 ease-in-out'></i>
							</Link>
						)}
						{currentProfile.social.linkedin && (
							<Link
								href={currentProfile.social.linkedin}
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fab fa-linkedin fa-2x hover:text-gray-500 transition-all duration-300 ease-in-out'></i>
							</Link>
						)}
						{currentProfile.social.youtube && (
							<Link
								href={currentProfile.social.youtube}
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fab fa-youtube fa-2x hover:text-gray-500 transition-allduration-300  ease-in-out'></i>
							</Link>
						)}
						{currentProfile.social.instagram && (
							<Link
								href={currentProfile.social.instagram}
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fab fa-instagram fa-2x hover:text-gray-500 transition-all duration-300 ease-in-out'></i>
							</Link>
						)}
					</div>
				)}
			</div>
		</>
	);
}
