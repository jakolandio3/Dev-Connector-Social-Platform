'use client';
import { logout } from '@/actions/auth';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function LoginOut() {
	const router = useRouter();
	//left this here incase I need to handle routing different on logout
	const dispatch = useDispatch<any>();
	const { token, isAuthenticated, loading, user } = useTypedSelector(
		(state) => state.auth
	);
	const firstName = user?.name.split(' ', 2)[0];
	function handleLogOut(): void {
		dispatch(logout());
	}
	if (isAuthenticated && !loading) {
		return (
			<ul className='flex gap-4'>
				<span className='hidden sm:inline-block'>
					{' '}
					welcome {user?.name && firstName}
				</span>
				<li>
					<Link href={'/profiles'} className='hover:text-primary'>
						Developers
					</Link>
				</li>
				<li>
					<Link href={'/posts'} className='hover:text-primary'>
						Posts
					</Link>
				</li>

				<li>
					<Link href={'/dashboard'} className='hover:text-primary'>
						<span className='fas fa-user'></span>{' '}
						<span className='hidden sm:inline-block'>Dashboard</span>
					</Link>
				</li>
				<li>
					<button onClick={handleLogOut} className='hover:text-primary'>
						<span className=' fas fa-sign-out-alt'></span>{' '}
						<span className='hidden sm:inline-block'>Logout</span>
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
