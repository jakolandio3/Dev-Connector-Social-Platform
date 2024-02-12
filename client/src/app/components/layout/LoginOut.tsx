'use client';
import { logout } from '@/actions/auth';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function LoginOut() {
	const dispatch = useDispatch<any>();
	const { token, isAuthenticated, loading, user } = useTypedSelector(
		(state) => state.auth
	);
	const pathname = usePathname();
	const firstName = user?.name.split(' ', 2)[0];
	function handleLogOut(): void {
		dispatch(logout());
	}
	if (isAuthenticated) {
		return (
			<code className=' font-thin'>
				<ul className='flex gap-4'>
					<span className='hidden sm:inline-block'>
						{' '}
						👋Hi{' '}
						<span className='text-primary font-extrabold'>
							{user?.name && firstName}
						</span>
					</span>
					<li>
						<Link
							href={'/profiles'}
							className={clsx(
								pathname !== '/profiles'
									? 'hover:text-primary'
									: 'text-primary font-extrabold underline'
							)}
						>
							<span className='fa fa-users-viewfinder'></span>{' '}
							<span
								className={clsx(
									pathname === '/profiles' ? 'hidden' : 'inline-block'
								)}
							>
								{' '}
								Devs
							</span>{' '}
						</Link>
					</li>
					<li>
						<Link
							href={'/posts'}
							className={clsx(
								pathname !== '/posts'
									? 'hover:text-primary'
									: 'text-primary font-extrabold underline'
							)}
						>
							<span className='fa-solid fa-signs-post'></span>{' '}
							<span
								className={clsx(
									pathname === '/posts' ? 'hidden' : 'inline-block'
								)}
							>
								Posts
							</span>
						</Link>
					</li>

					<li>
						<Link
							href={'/dashboard'}
							className={clsx(
								pathname !== '/dashboard'
									? 'hover:text-primary'
									: 'text-primary font-extrabold underline'
							)}
						>
							<span className='fas fa-user'></span>{' '}
							<span
								className={clsx(
									pathname === '/dashboard' ? 'hidden' : 'inline-block'
								)}
							>
								Dashboard
							</span>
						</Link>
					</li>
					<li>
						<button
							onClick={handleLogOut}
							className='hover:text-primary border rounded-full px-2 border-gray-800 shadow-sm hover:shadow-primary'
						>
							<span className=' fas fa-sign-out-alt'></span>{' '}
							<span className='hidden sm:inline-block'>Logout</span>
						</button>
					</li>
				</ul>
			</code>
		);
	} else {
		return (
			<code>
				<ul className='flex gap-2'>
					<li>
						<Link
							href={'/profiles'}
							className={clsx(
								pathname !== '/profiles'
									? 'hover:text-primary'
									: 'text-primary font-extrabold underline'
							)}
						>
							Developers
						</Link>
					</li>
					<li>
						<Link
							href={'/register'}
							className={clsx(
								pathname !== '/register'
									? 'hover:text-primary'
									: 'text-primary font-extrabold underline'
							)}
						>
							Register
						</Link>
					</li>
					<li>
						<Link
							href={'/login'}
							className={clsx(
								pathname !== '/login'
									? 'hover:text-primary border rounded-full px-2'
									: 'text-primary font-extrabold underline',
								' border rounded-full px-2 border-gray-800 shadow-sm'
							)}
						>
							Login
						</Link>
					</li>
				</ul>
			</code>
		);
	}
}
