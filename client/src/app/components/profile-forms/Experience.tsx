import React, { PropsWithChildren } from 'react';
import Moment from 'react-moment';

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
	const experiences = experience.map((exp) => {
		return (
			<tr key={exp._id}>
				<td className='mr-2 py-2 mt-4 px-5'>{exp.company}</td>
				<td className='mr-2 py-2 mt-4 px-5'>{exp.title}</td>
				<td className='mr-2 py-2 mt-4 px-5'>
					<Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
					{exp.current ? 'Now' : <Moment format='DD/MM/YYYY'>{exp.to}</Moment>}
				</td>
				<td className='mr-2 py-2 mt-4 px-5'>
					<button className=' bg-danger text-white mr-2 py-2 mt-4 px-5 rounded-xl cursor-pointer hover:opacity-80 my-1'>
						Delete
					</button>
				</td>
			</tr>
		);
	});
	return (
		<>
			<h2 className='my-4 font-bold'>Experience Credentials</h2>
			<table>
				<thead>
					<tr>
						<th className='bg-light mr-2 py-2 mt-4 px-8'>Company</th>
						<th className='bg-light mr-2 py-2 mt-4 px-8'>Title</th>
						<th className='bg-light mr-2 py-2 mt-4 px-8'>Years</th>
						<th className='bg-light mr-2 py-2 mt-4 px-8'> </th>
					</tr>
				</thead>
				<tbody>{experiences}</tbody>
			</table>
		</>
	);
}
