'use client';
import { getProfileById } from '@/actions/profile';
import Container from '@/app/components/layout/Container';

import ProfileAbout from '@/app/components/profileComponents/ProfileAbout';
import ProfileExperience from '@/app/components/profileComponents/ProfileExperience';
import ProfileEducation from '@/app/components/profileComponents/ProfileEducation';
import ProfileTop from '@/app/components/profileComponents/ProfileTop';
import { profileFromServer } from '@/app/profiles/page';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProfileGithub from '@/app/components/profileComponents/ProfileGithub';

export default function ProfilePage({ params }: { params: { _id: string } }) {
	const dispatch = useDispatch<any>();
	useEffect(() => {
		dispatch(getProfileById(params._id));
	}, [params._id, dispatch]);
	const profile = useTypedSelector((state) => state.profile);
	const auth = useTypedSelector((state) => state.auth);
	const currentProfile = profile.profile as profileFromServer;
	if (profile.profile === null && !profile.loading)
		return (
			<Container>
				<h4 className='font-bold italic'>
					User has not created a profile or has been deactivated
				</h4>
				<Link
					href={'/profiles'}
					className='inline-block bg-primary text-white mr-2 py-2 mt-4 px-5 rounded-xl hover:opacity-80 my-1'
				>
					Back to Profiles
				</Link>
			</Container>
		);

	return (
		<Container>
			{profile.profile === null ||
			(profile.profile as profileFromServer).loading ? (
				<span className='loading loading-spinner loading-lg'></span>
			) : (
				<>
					<Link
						href={'/profiles'}
						className='inline-block bg-primary text-white mr-2 py-2 mt-4 px-5 rounded-xl hover:opacity-80 my-1'
					>
						Back to Profiles
					</Link>
					{auth.isAuthenticated &&
					!auth.loading &&
					auth.user._id === (profile.profile as any)?.user?._id ? (
						<Link
							href={'/edit-profile'}
							className='inline-block bg-dark text-white mr-2 py-2 mt-4 px-5 rounded-xl hover:opacity-80 my-1'
						>
							Edit your Profile
						</Link>
					) : (
						''
					)}
					<ProfileTop currentProfile={currentProfile} />
					<ProfileAbout profile={currentProfile} />
					<div className='grid grid-rows-1 grid-cols-2 gap-4'>
						<div className='bg-light border my-4 border-primary p-3 '>
							<h2 className='text-primary text-2xl text-center font-bold mt-6'>
								Experience
							</h2>
							{currentProfile.experience &&
							currentProfile.experience.length > 0 ? (
								currentProfile.experience?.map((exp, index) => (
									<ProfileExperience key={index} experience={exp} />
								))
							) : (
								<h4 className='font-bold p-6 text-center'>
									No Experience credentials
								</h4>
							)}
						</div>
						<div className='bg-light border my-4 border-primary p-3 '>
							<h2 className='text-primary text-2xl text-center font-bold mt-6'>
								Education
							</h2>
							{currentProfile.education &&
							currentProfile.education.length > 0 ? (
								currentProfile.education?.map((edu, index) => (
									<ProfileEducation key={index} education={edu} />
								))
							) : (
								<h4 className='font-bold p-6 text-center'>
									No Education credentials
								</h4>
							)}
						</div>
					</div>
					<div className='bg-light border mb-4 border-primary p-3 '>
						{currentProfile.githubusername && (
							<ProfileGithub username={currentProfile.githubusername} />
						)}
					</div>
				</>
			)}
		</Container>
	);
}
