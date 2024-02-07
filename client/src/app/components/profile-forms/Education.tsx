import React, { PropsWithChildren } from 'react';
import Moment from 'react-moment';

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
	const educations = education.map((edu) => {
		return (
			<tr key={edu._id}>
				<td className='mr-2 py-2 mt-4 px-5'>{edu.school}</td>
				<td className='mr-2 py-2 mt-4 px-5'>{edu.degree}</td>
				<td className='mr-2 py-2 mt-4 px-5'>
					<Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
					{edu.current ? 'Now' : <Moment format='DD/MM/YYYY'>{edu.to}</Moment>}
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
			<h2 className='my-4 font-bold'>Education Credentials</h2>
			<table>
				<thead>
					<tr>
						<th className='bg-light mr-2 py-2 mt-4 px-8'>School</th>
						<th className='bg-light mr-2 py-2 mt-4 px-8'>Degree</th>
						<th className='bg-light mr-2 py-2 mt-4 px-8'>Years</th>
						<th className='bg-light mr-2 py-2 mt-4 px-8'> </th>
					</tr>
				</thead>
				<tbody>{educations}</tbody>
			</table>
		</>
	);
}
