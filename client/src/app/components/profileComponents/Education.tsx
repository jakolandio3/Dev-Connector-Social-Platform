'use client';
import { deleteEducation } from '@/actions/profile';
import React, { PropsWithChildren } from 'react';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';

interface education {
	_id: string;
	school: string;
	degree: string;
	fieldofstudy: string;
	from: string;
	to: string;
	current: boolean;
	description: string;
}

export default function Education({ education }: { education: education[] }) {
	function deleteEDU(id: string) {
		console.log(id);
		dispatch(deleteEducation(id));
	}
	const dispatch = useDispatch<any>();

	const educations = education.map((edu) => {
		return (
			<tr key={edu._id} className='border text-center'>
				<td className='md:mr-2 py-2 mt-4 md:px-5'>{edu.school}</td>
				<td className='md:mr-2 py-2 mt-4 md:px-5'>{edu.degree}</td>
				<td className='md:mr-2 py-2 mt-4 md:px-5'>
					<Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
					{edu.current ? 'Now' : <Moment format='DD/MM/YYYY'>{edu.to}</Moment>}
				</td>
				<td className='md:mr-2 py-2 mt-4 md:px-5'>
					<button
						onClick={() => deleteEDU(edu._id)}
						className='bg-danger text-white mr-2 py-2 mt-4 px-5 rounded-xl cursor-pointer hover:opacity-80 my-1'
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
				{'<'}Education_Credentials{'/>'}
			</code>
			<table className='bg-[dark] border'>
				<thead>
					<tr>
						<th className='bg-light md:mr-2 py-2 mt-4 md:px-8'>School</th>
						<th className='bg-light md:mr-2 py-2 mt-4 md:px-8'>Degree</th>
						<th className='bg-light md:mr-2 py-2 mt-4 md:px-8'>Years</th>
						<th className='bg-light md:mr-2 py-2 mt-4 md:px-8'> </th>
					</tr>
				</thead>
				<tbody>{educations}</tbody>
			</table>
		</>
	);
}
