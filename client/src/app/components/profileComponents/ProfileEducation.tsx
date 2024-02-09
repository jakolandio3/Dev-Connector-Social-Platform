import React from 'react';
import Moment from 'react-moment';

export default function ProfileEducation({
	education,
}: {
	education: {
		school: string;
		current: boolean;
		description: string;
		degree: string;
		fieldofstudy: string;
		from: string;
		to?: null | string;
		_id: string;
	};
}) {
	return (
		<div className='border-b border-dashed  m-4 p-4 border-primary  '>
			<h3 className='text-dark font-bold'>{education.school}</h3>
			<p>
				<Moment format='DD/MM/YYYY'>{education.from}</Moment> -{' '}
				{education.to ? (
					<Moment format='DD/MM/YYYY'>{education.to}</Moment>
				) : (
					'Now'
				)}
			</p>
			<p>
				<strong>Degree: </strong>
				{education.degree}
			</p>
			<p>
				<strong>Field Of Study: </strong>
				{education.fieldofstudy}
			</p>
			<p>
				<strong>Description: </strong>
				{education.description}
			</p>
		</div>
	);
}
