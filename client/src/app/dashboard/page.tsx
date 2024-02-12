'use client';
import React, { useEffect } from 'react';
import PrivateRoute from '../components/routing/PrivateRoute';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '@/actions/profile';
import Link from 'next/link';
import Alert from '../components/layout/Alert';
import DashboardActions from '../components/profileComponents/DashboardActions';
import Experience from '../components/profileComponents/Experience';
import Education from '../components/profileComponents/Education';
import LoadingScreen from '../components/layout/LoadingScreen';

export default function Dashboard() {
	const dispatch = useDispatch<any>();

	const { profile, loading } = useTypedSelector((state) => state.profile);
	const { user } = useTypedSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getCurrentProfile());
	}, [dispatch]);

	if ((profile && loading === null) || loading) {
		return <LoadingScreen />;
	}
	function deleteUser() {
		dispatch(deleteAccount());
	}
	return (
		<PrivateRoute>
			<Alert />
			<code className='text-primary text-4xl font-extrabold'>
				{'<'}Dashboard{'>'}
			</code>
			<p className='text-2xl font-bold text-[cornsilk]'>
				<i className='my-4 fas fa-user'></i>Welcome {user && user.name}
			</p>
			{profile !== null && !loading ? (
				<div className='flex flex-col w-fit gap-4'>
					<DashboardActions />
					<Experience experience={(profile as any)?.experience} />
					<Education education={(profile as any)?.education} />

					<div className='my-4 flex '>
						<button
							onClick={() => deleteUser()}
							className='w-fit justify-center bg-danger  py-2 px-5 transition-all ease-in-out duration-300 mb-1  text-[#333] rounded-xl hover:opacity-80'
						>
							<i className='fas fa-user-minus'>
								{' '}
								<span> DELETE ACCOUNT</span>
							</i>
						</button>
					</div>
				</div>
			) : profile === null && !loading ? (
				<>
					<p>You have not set up a profile yet, get started below </p>
					<Link
						href={'/create-profile'}
						className='my-4 inline-block bg-primary text-white mr-2 py-2 px-5 rounded-xl hover:opacity-80'
					>
						Create Profile
					</Link>
				</>
			) : (
				<span className='loading loading-spinner loading-lg'></span>
			)}
			<br />
			<code className='text-primary text-4xl font-extrabold'>
				{'</'}Dashboard{'>'}
			</code>
		</PrivateRoute>
	);
}
