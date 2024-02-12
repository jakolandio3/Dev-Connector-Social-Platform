'use client';
import { deleteExperience } from '@/actions/profile';
import React, { PropsWithChildren, useEffect } from 'react';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';

interface experienceObject {
	_id: string;
	title: string;
	company: string;
	location: string;
	from: string;
	to: string;
	current: boolean;
	description: string;
}

export default function Experience({
	experience,
}: {
	experience: experienceObject[];
}) {
	function deleteEXP(id: string) {
		dispatch(deleteExperience(id));
	}
	const dispatch = useDispatch<any>();

	const experiences = experience?.map((exp) => {
		return (
			<tr key={exp._id} className='border'>
				<td className='mr-2 py-2 mt-4 px-5'>{exp.company}</td>
				<td className='mr-2 py-2 mt-4 px-5'>{exp.title}</td>
				<td className='mr-2 py-2 mt-4 px-5'>
					<Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
					{exp.current ? 'Now' : <Moment format='DD/MM/YYYY'>{exp.to}</Moment>}
				</td>
				<td className='mr-2 py-2 mt-4 px-5'>
					<button
						onClick={() => deleteEXP(exp._id)}
						className=' bg-danger text-white mr-2 py-2 mt-4 px-5 rounded-xl cursor-pointer hover:opacity-80 my-1'
					>
						Delete
					</button>
				</td>
			</tr>
		);
	});

	return (
		<>
			<code className='text-primary text-2xl font-extrabold'>
				{'<'}Experience_Credentials{'/>'}
			</code>
			<table className='bg-[dark] border'>
				<thead>
					<tr>
						<th className='bg-light mr-2 py-2 mt-4 px-8'>Company</th>
						<th className='bg-light mr-2 py-2 mt-4 px-8'>Title</th>
						<th className='bg-light mr-2 py-2 mt-4 px-8'>Years</th>
						<th className='bg-light mr-2 py-2 mt-4 px-8'> </th>
					</tr>
				</thead>
				<tbody>{experiences && experiences}</tbody>
			</table>
		</>
	);
}
