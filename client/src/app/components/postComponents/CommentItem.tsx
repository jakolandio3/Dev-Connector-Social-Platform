import { deleteComment } from '@/actions/post';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import React from 'react';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';

export default function CommentItem({
	comment: { user, text, name, avatar, _id, date },
	postId,
}: {
	comment: {
		user: string;
		text: string;
		name: string;
		avatar: string;
		_id: string;
		date: string;
	};
	postId: string;
}) {
	const dispatch = useDispatch<any>();
	const auth = useTypedSelector((state) => state.auth);
	return (
		<div className='flex flex-row bg-light border-dashed border border-primary rounded-md gap-12  w-full  p-4 my-4'>
			<div className='flex text-center'>
				<a href={`/profile/${user}`}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img className='rounded-full' src={`https:${avatar}`} alt='' />
					<h4 className='font-bold text-primary'>{name}</h4>
				</a>
			</div>
			<div className='flex flex-col justify-between'>
				<div className='flex flex-row w-full gap-12 justify-between'>
					<p className=' italic my-8'>{text}</p>
					{!auth.loading && user === auth.user._id && (
						<button
							className='text-center min-w-fit'
							onClick={() => dispatch(deleteComment(_id, postId))}
						>
							❌
						</button>
					)}
				</div>
				<p className='text-sm italic text-[#ccc]'>
					Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
				</p>
			</div>
		</div>
	);
}
