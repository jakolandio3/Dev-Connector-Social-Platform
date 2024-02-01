'use client';
import React, { useState } from 'react';
import Container from '../components/layout/Container';
import Link from 'next/link';
import axios from 'axios';

export default function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const { name, email, password, password2 } = formData;
	function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (password !== password2) {
			throw new Error('passwords dont match');
		} else {
			console.log('success');
			// const newUser = {
			// 	name,
			// 	email,
			// 	password,
			// };
			//--TEST USER CREATE--COORS ERRORS FIXED ON SERVER SIDE try {
			// 	const config = {
			// 		headers: {
			// 			'Content-Type': 'application/json',
			// 		},
			// 	};
			// 	const body = JSON.stringify(newUser);
			// 	const res = await axios.post(
			// 		'http://localhost:5000/api/users',
			// 		body,
			// 		config
			// 	);
			// 	console.log(res.data);
			// } catch (error) {
			// 	console.log(error);
			// }
		}
	}

	return (
		<Container>
			<h1 className=' text-5xl mb-4 text-primary'>Sign Up</h1>
			<p className='text-2xl mb-4'>
				<i className='fas fa-user'></i> Create Your Account
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
				Already have an account? <Link href='/login'>Sign In</Link>
			</p>
		</Container>
	);
}
