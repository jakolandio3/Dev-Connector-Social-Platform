'use client';
import { logout } from '@/actions/auth';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function LoginOut() {
	const router = useRouter();
	const dispatch = useDispatch<any>();
	const { token, isAuthenticated, loading, user } = useTypedSelector(
		(state) => state.auth
	);
	const firstName = user?.name.split(' ', 2)[0];
	function handleLogOut(): void {
		dispatch(logout());
		router.push('/');
	}
	if (isAuthenticated && !loading && user.name) {
		return (
			<ul className='flex gap-2'>
				welcome {firstName}
				<li>
					<Link href={'/profiles'} className='hover:text-primary'>
						..
					</Link>
				</li>
				<li>
					<Link href={'/register'} className='hover:text-primary'>
						...
					</Link>
				</li>
				<li>
					<button onClick={handleLogOut} className='hover:text-primary'>
						<span className=' fas fa-sign-out-alt'></span> Logout
					</button>
				</li>
			</ul>
		);
	} else {
		return (
			<ul className='flex gap-2'>
				<li>
					<Link href={'/profiles'} className='hover:text-primary'>
						Developers
					</Link>
				</li>
				<li>
					<Link href={'/register'} className='hover:text-primary'>
						Register
					</Link>
				</li>
				<li>
					<Link href={'/login'} className='hover:text-primary'>
						Login
					</Link>
				</li>
			</ul>
		);
	}
}
