'use client';
import { getProfiles } from '@/actions/profile';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../components/layout/Container';
import ProfileItem from '../components/profileComponents/ProfileItem';
import LoadingScreen from '../components/layout/LoadingScreen';

export interface profileFromServer {
	social?: {
		_id?: string;
		linkedin?: string;
		youtube?: string;
		twitter?: string;
		facebook?: string;
		website?: string;
		instagram?: string;
	};
	_id: string;
	user:
		| undefined
		| {
				_id: string;
				name: string;
				avatar: string;
		  };
	company?: string;
	location?: string;
	website?: string;
	status: string;
	skills: string[];
	bio?: string;
	githubusername?: string;
	experience?: [];
	education?: [];
	date: string;
	__v: number;
	profiles?: [];
	repos?: [];
	loading: boolean;
	error: {};
}

export default function Profiles() {
	const dispatch = useDispatch<any>();
	const profile = useTypedSelector((state) => state.profile);
	const { profiles, loading } = profile;

	useEffect(() => {
		dispatch(getProfiles());
	}, [dispatch]);
	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<Container>
					<code className='text-primary text-4xl font-extrabold'>
						{'<'}Developers{'>'}
					</code>
					<p className=' text-2xl font-bold text-[cornsilk]'>
						<i className='my-4 fab fa-connectdevelop'></i>
						{'<'}Browse and connect with developers{'/>'}
					</p>
					<div className='grid grid-cols-1 gap-6 my-4 text-center'>
						{(profiles as profileFromServer[]).length > 0 ? (
							(profiles as profileFromServer[]).map((profile) => (
								<ProfileItem key={profile._id} profile={profile} />
							))
						) : (
							<h4>No Profiles Found 🤦‍♂️🤦‍♂️</h4>
						)}
					</div>
					<code className='text-primary text-4xl font-extrabold'>
						{'</'}Developers{'>'}
					</code>
				</Container>
			)}
		</>
	);
}
