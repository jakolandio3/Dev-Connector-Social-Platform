'use client';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { redirect } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

export default function PrivateRoute({ children }: PropsWithChildren) {
	const { token, isAuthenticated, loading, user } = useTypedSelector(
		(state) => state.auth
	);
	if (!isAuthenticated && loading) {
		return (
			<section className='overflow-hidden absolute top-0 left-0 px-4 mt-24 mb-12 flex justify-center items-center text-center h-[100vh] w-[100vw] text-3xl'>
				<h1>
					checking authentication ...
					<span className='loading loading-ring loading-lg'></span>
				</h1>
			</section>
		);
	}
	if (!isAuthenticated && !loading) {
		redirect('/');
	} else
		return (
			<section className=' max-w-[1100px] m-auto overflow-hidden px-4 mt-24 mb-12'>
				{children}
			</section>
		);
}
