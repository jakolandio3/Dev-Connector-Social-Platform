'use client';
import React, { useEffect, useState } from 'react';
import Container from '../components/layout/Container';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { login } from '@/actions/auth';
import Alert from '../components/layout/Alert';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useRouter } from 'next/navigation';

export default function Login() {
	const router = useRouter();
	const dispatch = useDispatch<any>();
	const { token, isAuthenticated, loading } = useTypedSelector(
		(state) => state.auth
	);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { email, password } = formData;
	useEffect(() => {
		if (isAuthenticated && !loading) {
			router.push('/dashboard');
		}
	}, [isAuthenticated, loading, router]);
	function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		dispatch(login(email, password));
	}
	//redirect if loggedin

	return (
		<Container>
			<Alert />
			<h1 className=' text-5xl mb-4 text-primary'>Sign In</h1>
			<p className='text-2xl mb-4'>
				<i className='fas fa-user'></i> Sign Into your Account
			</p>
			<form className='my-4' onSubmit={(e) => onSubmit(e)}>
				<div className='my-4'>
					<input
						type='email'
						className='block w-full p-2 text-lg border border-gray-400'
						placeholder='Email  Address'
						value={email}
						onChange={(e) => onChange(e)}
						name='email'
						required
					/>
					<small className='block mt-1 text-[#888]'>
						This site uses Gravatar so if you want a profile image, use a
						Gravatar email
					</small>
				</div>
				<div className='my-4'>
					<input
						type='password'
						placeholder='Password'
						name='password'
						value={password}
						onChange={(e) => onChange(e)}
						className='block w-full p-2 text-lg border border-gray-400'
						required
					/>
				</div>

				<input
					type='submit'
					className=' inline-block bg-primary text-white py-2 px-6 cursor-pointer mr-2 transition-all ease-in rounded-md hover:opacity-80'
					value='Login'
				/>
			</form>
			<p className='my-1'>
				Don{"'"}t have an account? <Link href='/register'>Sign Up</Link>
			</p>
		</Container>
	);
}
