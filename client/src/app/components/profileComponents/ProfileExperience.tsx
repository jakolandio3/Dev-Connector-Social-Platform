import React from 'react';
import Moment from 'react-moment';

export default function ProfileExperience({
	experience,
}: {
	experience: {
		company: string;
		current: boolean;
		description: string;
		location: string;
		title: string;
		from: string;
		to?: null | string;
		_id: string;
	};
}) {
	return (
		<div className='border-b border-dashed  m-4 p-4 border-primary  '>
			<h3 className='text-dark font-bold'>{experience.company}</h3>
			<p>
				<Moment format='DD/MM/YYYY'>{experience.from}</Moment> -{' '}
				{experience.to ? (
					<Moment format='DD/MM/YYYY'>{experience.to}</Moment>
				) : (
					'Now'
				)}
			</p>
			<p>
				<strong>Position: </strong>
				{experience.title}
			</p>
			<p>
				<strong>Description: </strong>
				{experience.description}
			</p>
		</div>
	);
}
