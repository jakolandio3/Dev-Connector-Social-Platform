'use client';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Container from '../components/layout/Container';
import Link from 'next/link';
import { setAlert } from '@/actions/alert';
import { register } from '@/actions/auth';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Alert from '../components/layout/Alert';
import { useRouter } from 'next/navigation';

function Register(props: any) {
	const dispatch = useDispatch<any>();
	const router = useRouter();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const { name, email, password, password2 } = formData;
	const alertsArray = useTypedSelector((state) => state.alert);
	const { token, isAuthenticated, loading } = useTypedSelector(
		(state) => state.auth
	);
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
		if (password !== password2) {
			//can set these in two ways dispatch at least TS knows whats going on

			dispatch(setAlert('another Alert', 'danger'));
		} else {
			const newUser = { name, email, password };
			dispatch(register(newUser));
		}
	}

	return (
		<Container>
			<Alert />
			<h1 className=' text-5xl mb-4 text-primary'>Sign Up</h1>
			<p className='text-2xl mb-4 text-[cornsilk]'>
				<i className='fas fa-user'></i>{' '}
				<span className='text-[cornsilk]'>
					{'<'}Create Your Account{'/>'}
				</span>
			</p>

			<form className='my-4' onSubmit={(e) => onSubmit(e)}>
				<div className='my-4'>
					<input
						type='text'
						placeholder='Name'
						className='block w-full p-2 text-lg border border-gray-400'
						name='name'
						value={name}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
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
					<small className='block mt-1 italic opacity-70 text-[cornsilk]'>
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
						minLength={6}
						className='block w-full p-2 text-lg border border-gray-400'
						required
					/>
				</div>
				<div className='my-4'>
					<input
						type='password'
						placeholder='Confirm Password'
						name='password2'
						value={password2}
						onChange={(e) => onChange(e)}
						minLength={6}
						className='block w-full p-2 text-lg border border-gray-400'
						required
					/>
				</div>
				<input
					type='submit'
					className=' inline-block bg-primary text-white py-2 px-6 cursor-pointer mr-2 transition-all ease-in rounded-md hover:opacity-80'
					value='Register'
				/>
			</form>
			<p className='my-1'>
				Already have an account?{' '}
				<Link href='/login' className='underline text-primary'>
					Sign In
				</Link>
			</p>
		</Container>
	);
}

export default Register;
