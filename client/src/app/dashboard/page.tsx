'use client';
import React, { useEffect } from 'react';
import PrivateRoute from '../components/routing/PrivateRoute';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { getCurrentProfile } from '@/actions/profile';
import Link from 'next/link';
import Alert from '../components/layout/Alert';
import DashboardActions from '../components/profile-forms/DashboardActions';
import Experience from '../components/profile-forms/Experience';
import Education from '../components/profile-forms/Education';

export default function Dashboard() {
	const dispatch = useDispatch<any>();

	const { profile, loading } = useTypedSelector((state) => state.profile);
	const { user } = useTypedSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getCurrentProfile());
	}, [dispatch]);

	if (profile && loading === null) {
		return <span className='loading loading-spinner loading-lg'></span>;
	}
	return (
		<PrivateRoute>
			<Alert />
			<h1 className='text-primary text-4xl mb-4'>Dashboard</h1>
			<p className='mb-4 text-2xl'>
				<i className='fas fa-user'></i>Welcome {user && user.name}
			</p>
			{profile !== null ? (
				<>
					<DashboardActions />
					<Experience experience={(profile as any)?.experience} />
					<Education education={(profile as any)?.education} />
				</>
			) : (
				<>
					<p>You have not set up a profile yet, get started below </p>
					<Link
						href={'/create-profile'}
						className='my-4 inline-block bg-primary text-white mr-2 py-2 px-5 rounded-xl hover:opacity-80'
					>
						Create Profile
					</Link>
				</>
			)}
		</PrivateRoute>
	);
}
