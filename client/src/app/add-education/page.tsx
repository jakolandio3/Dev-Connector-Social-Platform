'use client';
import React, { useState } from 'react';
import PrivateRoute from '../components/routing/PrivateRoute';
import Alert from '../components/layout/Alert';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addEducation } from '@/actions/profile';

export default function AddEducation() {
	const [formData, setFormData] = useState({
		school: '',
		degree: '',
		fieldofstudy: '',
		from: '',
		to: '',
		current: false,
		description: '',
	});
	const dispatch = useDispatch<any>();
	const router = useRouter();
	const [toDateDisabled, setToDateDisabled] = useState(false);
	const { school, degree, fieldofstudy, from, to, current, description } =
		formData;
	function onChange(
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	): void {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	return (
		<PrivateRoute>
			<Alert />
			<h1 className='text-3xl text-primary'>Add Your Education</h1>
			<p className='text-lg my-4'>
				<i className='fas fa-code-branch'></i> Add any school, bootcamp, etc
				that you have attended
			</p>
			<small>* = required field</small>
			<form
				className='my-5'
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(addEducation(formData, router));
				}}
			>
				<div className='my-2'>
					<input
						className='block w-full p-2 text-lg border border-gray-400'
						type='text'
						placeholder='* School or Boot-Camp'
						name='school'
						value={school}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className='my-2'>
					<input
						className='block w-full p-2 text-lg border border-gray-400'
						type='text'
						placeholder='* Degree or Certificate'
						name='degree'
						value={degree}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className='my-2'>
					<input
						className='block w-full p-2 text-lg border border-gray-400'
						type='text'
						placeholder='Field Of Study'
						name='fieldofstudy'
						value={fieldofstudy}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className='my-2'>
					<h4>From Date</h4>
					<input
						className='block w-full p-2 text-lg border border-gray-400'
						type='date'
						name='from'
						value={from}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className='my-2'>
					<p>
						<input
							className='inline-block  p-2 text-lg border border-gray-400'
							type='checkbox'
							name='current'
							checked={current}
							onChange={(e) => {
								setFormData({ ...formData, current: !current });
								setToDateDisabled(!toDateDisabled);
							}}
						/>{' '}
						I am currently studying/enrolled
					</p>
				</div>
				<div className='my-2'>
					<h4>To Date</h4>
					<input
						className='block w-full p-2 text-lg border border-gray-400'
						type='date'
						name='to'
						value={to}
						disabled={toDateDisabled}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className='my-2'>
					<textarea
						name='description'
						cols={30}
						rows={5}
						className='block w-full p-2 text-lg border border-gray-400'
						placeholder='Program Description'
						value={description}
						onChange={(e) => onChange(e)}
					></textarea>
				</div>
				<input
					className='inline-block bg-primary text-white mr-2 py-2 mt-4 px-5 rounded-xl cursor-pointer hover:opacity-80 my-1'
					type='submit'
				/>
				<Link
					className='inline-block bg-light text-[#333] mr-2 py-2 mt-4 px-5 rounded-xl hover:opacity-80 my-1'
					href='/dashboard'
				>
					Go Back
				</Link>
			</form>
		</PrivateRoute>
	);
}
